package main

import (
	"fmt"
	"leetcode_practice/func/practice"
	"leetcode_practice/func/utils"
)

func main() {
	fmt.Println("Main")
	//nums := [][]int{{1, 4}, {5, 6}}
	//nums := []int{3, 4, -1, 1}
	//matrix := [][]int{
	//	{1, 4, 7, 11, 15},
	//	{2, 5, 8, 12, 19},
	//	{3, 6, 9, 16, 22},
	//	{10, 13, 14, 17, 24},
	//	{18, 21, 23, 26, 30},
	//}
	//k := 3
	//t := "ABC"
	//s := "ADOBECODEBANC"
	//p := "abc"
	//utils.QuickSort(nums, 0, len(nums)-1)
	arrayA := []int{1, 2, 3, 4, 6}
	//arrayB := []int{5, 6, 4}
	n := 2

	headA := utils.CreateSingleLinkList(arrayA)
	//headB := utils.CreateSingleLinkList(arrayB)

	//headA.Next.Next.Next.Next = headA.Next.Next
	//headB.Next.Next.Next.Next = headA.Next.Next.Next

	answer := practice.ReverseKGroup(headA.Next, n)

	for answer != nil {
		fmt.Println(answer.Val)
		answer = answer.Next
	}

	//fmt.Printf("nums: %v\n", nums)
	fmt.Printf("answer: %v\n", answer)
}
