package main

import (
	"fmt"
	"leetcode_practice/func/practice"
)

func main() {
	fmt.Println("Main")
	//nums := [][]int{{1, 4}, {5, 6}}
	//nums := []int{3, 4, -1, 1}
	matrix := [][]int{
		{0, 1, 2, 0},
		{3, 4, 5, 2},
		{1, 3, 1, 5},
	}
	//k := 3
	//t := "ABC"
	//s := "ADOBECODEBANC"
	//p := "abc"
	//utils.QuickSort(nums, 0, len(nums)-1)
	answer := practice.SetZeroes(matrix)

	//fmt.Printf("nums: %v\n", nums)
	fmt.Printf("answer: %v\n", answer)
}
