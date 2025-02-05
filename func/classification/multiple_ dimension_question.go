package classification

func NumIslands(grid [][]byte) int {
	if grid == nil || len(grid) == 0 {
		return 0
	}
	numIslands := 0
	rows := len(grid)
	cols := len(grid[0])

	var dfs func(row, col int)
	dfs = func(row, col int) {
		if row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] == '0' {
			return
		}

		grid[row][col] = '0'
		dfs(row+1, col)
		dfs(row-1, col)
		dfs(row, col+1)
		dfs(row, col-1)
	}

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == '1' {
				dfs(i, j)
				numIslands++
			}
		}
	}

	return numIslands
}

func OrangesRotting(grid [][]int) int {
	minCounts := 0
	rows, cols := len(grid), len(grid[0])

	var queue []int
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == 2 {
				queue = append(queue, i*cols+j)
			}
		}
	}

	direction := []struct{ x, y int }{
		{-1, 0}, {1, 0}, {0, -1}, {0, 1},
	}

	for len(queue) > 0 {
		n := len(queue)
		for i := 0; i < n; i++ {
			pos := queue[0]
			queue = queue[1:]
			r, c := pos/cols, pos%cols

			for _, d := range direction {
				nr, nc := r+d.x, c+d.y
				if nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1 {
					grid[nr][nc] = 2
					queue = append(queue, nr*cols+nc)
				}
			}
		}

		minCounts++
	}

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == 1 {
				return -1
			}
		}
	}

	return max(minCounts-1, 0)
}

func canFinish(numCourses int, prerequisites [][]int) bool {
	graph := make([][]int, numCourses)
	inDegree := make([]int, numCourses)
	count := 0

	for _, info := range prerequisites {
		course := info[0]
		pre := info[1]
		graph[pre] = append(graph[pre], course)
		inDegree[course]++
	}

	queue := make([]int, 0, numCourses)

	for i := 0; i < numCourses; i++ {
		if inDegree[i] == 0 {
			queue = append(queue, i)
		}
	}

	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		count++

		for _, neighbor := range graph[current] {
			inDegree[neighbor]--
			if inDegree[neighbor] == 0 {
				queue = append(queue, neighbor)
			}
		}
	}

	return count == numCourses
}
