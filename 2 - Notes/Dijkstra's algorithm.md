---
created-at: 2021-01-04
tags:
---
This algorithm allows us to find the *shortest* path from one node to another in a directed [[Weighted graphs|weighted graph]] without *negative-weighted* edges.
The algorithm follows these basic steps:
1. Set $\infty$ as the cost for all nodes (except the origin node).
2. Set the cheapest node as the `node` to be analyzed
3. While the list of nodes to be analyzed is not null:
	1. Calculate the costs for every neighbor of the `node`
		1. If the cost for this node is lower than the cost registered in the table:
			1. Set the cost as the cost
			2. Set the `node` as the parent
	2. Add the `node` to the list of processed nodes
	3. Set the cheapest neighbor as the new to be analyzed