---
created-at: 2020-12-15
tags:
---
Breadth-first search is an algorithm that runs on [[Graphs|graphs]]. We can use it to verify if a path from *node A* to *node B* exist and also to find the shortest path from these two nodes.
The idea of the algorithm is to search the graph in levels, we search in all the nodes in the first level, and then go to all the nodes in the second level and keep searching until we find the target or until we have searched all the nodes in the graph. This allows the algorithm to always find the shortest path between the first node and the target.
It's complexity is  a bit weird to measure, because we have to take in account all the nodes and edges. In essence, this algorithm has $\text{O}(V+E)$ time.