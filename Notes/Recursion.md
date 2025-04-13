---
created-at: 2020-11-25
---

Recursion is when a concept is defined in terms of itself. Recursion is common in Mathematics or Computer Science, usually in scenarios in which a function is used in its own definition.

In programming, recursion can be a very efficient and elegant way to solve problems. [[Functional programming languages]] use recursion extensively as a way to iterate over data structures.

The typical blueprint to solve problems using recursion is:

- Identify the base case: this is the simplest case of the problem, usually an atomic case which cannot be decomposed further down (e.g. empty list, empty tree etc)
- Identify the recursive case: how can we decompose the problem into smaller parts that can be solved in the same manner and them composed to form the final solution?

If we can define those two, then we just defined the solution of the problem recursively.

Recursion really feels like magic in some cases. It's often hard to think about the whole problem and all the intermediary steps to solve it. With recursion, we just need to think about the simplest case (which is often trivial), and then think of a generic case that can be defined in terms of itself (this is often the tricky part).

The main drawback of recursion when compared with alternative approaches to solve problems (usually using iteration) is that it can consume more memory due to the increased number of function calls. This can be mitigated in some cases by languages that implement [[Call stack optimization]], but in most cases that optimization won't be possible due to either the language or the problem itself.

# Example

This is a [LeetCode problem](leetcode.com/problems/convert-sorted-array-to-binary-search-tree) that can be solved very easily with recursion.

> Given an integer array nums where the elements are sorted in ascending order, convert it to a binary search tree.

So, the base case here is that an empty list results in an empty tree. The recursive case is that a list results in a tree with the middle element as the root and the left and right children are trees created from applying the same process to the left and right portions of the list.

Implementing this in [[Python]] yields a very simple to understand solution:

```python
def sorted_array_to_bst(self, nums: List[int]) -> Optional[TreeNode]:
    if len(nums) == 0:
        return None

    mid = len(nums) // 2
    return TreeNode(
        val=nums[mid],
        left=self.sorted_array_to_bst(nums[:mid]),
        right=self.sorted_array_to_bst(nums[mid+1:]),
    )
```

The same solution in [[Elixir]] is equally simple:

```elixir
defmodule Solution do
  @spec sorted_array_to_bst(nums :: [integer]) :: TreeNode.t | nil
  def sorted_array_to_bst([]), do: nil
  def sorted_array_to_bst([head | tail] = nums) do
    {left, [mid | right]} = Enum.split(nums, div(length(nums), 2))
    %TreeNode{
        val: mid, 
        left: sorted_array_to_bst(left), 
        right: sorted_array_to_bst(right),
    }
  end
end
```
