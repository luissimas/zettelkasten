---
created-at: 2020-11-24
---
Selection sort is an algorithm that can sort the element of a list or array. It's one of the simplest algorithms when it comes to sorting, and it's also one of the slowest. The idea is finding the smallest number in the array and putting it at the beginning of the list, and repeat that process, but ignoring the positions that were already sorted. Doing that we reduce the search interval by $1$ each time we find the smallest number in that search interval.
This algorithm has a runtime of $O(n^2)$, so it's not very efficient and there are better alternatives for dealing with this *sort* of problem.