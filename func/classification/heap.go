package classification

import (
	"container/heap"
	"fmt"
)

func buildMaxHeap(nums []int, index int) {
	left, right := index*2+1, index*2+2
	maxIndex := index

	if left < len(nums) && nums[left] > nums[maxIndex] {
		maxIndex = left
	}

	if right < len(nums) && nums[right] > nums[maxIndex] {
		maxIndex = right
	}

	if maxIndex != index {
		nums[index], nums[maxIndex] = nums[maxIndex], nums[index]
		buildMaxHeap(nums, maxIndex)
	}
}

func heapify(nums []int) {
	size := len(nums)

	for i := size/2 - 1; i >= 0; i-- {
		buildMaxHeap(nums, i)
	}
}

func FindKthLargest(nums []int, k int) int {
	heapify(nums)

	for i := 0; i < k-1; i++ {
		nums[0], nums[len(nums)-1-i] = nums[len(nums)-1-i], nums[0]
		buildMaxHeap(nums[:len(nums)-1-i], 0)
	}

	return nums[0]
}

type Element struct {
	value int
	count int
}

type MinHeap []Element

func (h *MinHeap) Len() int           { return len(*h) }
func (h *MinHeap) Less(i, j int) bool { return (*h)[i].count < (*h)[j].count }
func (h *MinHeap) Swap(i, j int)      { (*h)[i], (*h)[j] = (*h)[j], (*h)[i] }
func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(Element))
}
func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func TopKFrequent(nums []int, k int) []int {
	freqMap := make(map[int]int)
	result := make([]int, k)
	for _, num := range nums {
		freqMap[num]++
	}

	fmt.Println(freqMap)

	minHeap := &MinHeap{}
	heap.Init(minHeap)

	for num, count := range freqMap {
		heap.Push(minHeap, Element{num, count})

		fmt.Println(minHeap)
		if minHeap.Len() > k {
			heap.Pop(minHeap)
		}
	}

	for i := 0; i < k; i++ {
		result[i] = (*minHeap)[i].value
	}

	return result
}
