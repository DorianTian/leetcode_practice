package main

import (
	"fmt"
	"leetcode_practice/func/classification"
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
	// 5,1,4,null,null,3,6
	//arrayA := []*int{utils.IntPtr(1), utils.IntPtr(2), utils.IntPtr(3), utils.IntPtr(4), nil, nil, nil, utils.IntPtr(5)}
	//arrayA := []*int{
	//	utils.IntPtr(-10),
	//	utils.IntPtr(-3),
	//	utils.IntPtr(0),
	//	utils.IntPtr(5),
	//	utils.IntPtr(9),
	//}
	//arrayA := []int{3, 1, 2}

	//arrayA := [][]int{
	//	{1, 4, 5},
	//	{1, 3, 4},
	//	{2, 6},
	//}
	//n := 2

	//headA := utils.CreateRandomLinkedList(arrayA)
	//headA := utils.CreateSingleLinkList(arrayA)
	//levelTree := utils.CreateBinaryTreeByLevel(arrayA)

	//headA.Next.Next.Next.Next = headA.Next.Next
	//headB.Next.Next.Next.Next = headA.Next.Next.Next
	//nums := []string{"eat", "tea", "tan", "ate", "nat", "bat"}
	//target := 9
	//digits := "23"
	//candidates := []int{2, 7, 9, 3, 1}
	//s := "()[]{}"
	//candidate := "abaccc"
	answer := classification.NumSquares(12)

	//for answer != nil {
	//	fmt.Println(answer.Val)
	//	answer = answer.Next
	//}

	//fmt.Printf("nums: %v\n", nums)
	fmt.Printf("answer: %v\n", answer)

	//cache := utils.Constructor(2)
	//
	//// 向缓存插入数据
	//cache.Put(1, 1)           // 缓存是 {1=1}
	//cache.Put(2, 2)           // 缓存是 {1=1, 2=2}
	//fmt.Println(cache.Get(1)) // 返回 1
	//cache.Put(3, 3)           // 该操作会使得 key 2 被逐出，缓存是 {1=1, 3=3}
	//fmt.Println(cache.Get(2)) // 返回 -1 (未找到)
	//cache.Put(4, 4)           // 该操作会使得 key 1 被逐出，缓存是 {4=4, 3=3}
	//fmt.Println(cache.Get(1)) // 返回 -1 (未找到)
	//fmt.Println(cache.Get(3)) // 返回 3
	//fmt.Println(cache.Get(4)) // 返回 4
}
