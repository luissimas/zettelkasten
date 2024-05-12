---
created-at: 2020-11-27
---
Quicksort is one of the fastest sorting algorithm, and it is used in a lot of applications. It uses the principles of [[Divide and conquer|divide and conquer]].
The idea of the algorithm is to first find the base cases. Since we're dealing with arrays, we can say that the base cases are when the array has 1 or less elements, but in this case, is pretty easy to sort and array with 2 elements too, we just have to check both of elements and swap them if needed. With that, we have the base cases. Now we choose choose a *pivot*, and based on that pivot create two *sub-arrays*, one with all the elements that are greater than the pivot and another with all the elements that are smaller than the pivot. And finally, we can just apply the same idea recursively in the sub-arrays until both of them reach the base case. So the steps are:
- Pick a pivot
- Partition the array in two sub-arrays
- Do the same thing recursively to the sub-arrays

It's tricky to measure quicksort's efficiency, but in the average case it's $\text{O}(n\log{n})$, and in the worst case it's $\text{O}(n^2)$.
> If you always choose a random element in the array as the pivot, quicksort will complete in $\text{O}(n\log{n})$ time in average.