---
created-at: 2020-11-24
---
These are the two basic data structures, they differ a lot, so there are multiple uses for both of them.

# Linked lists
In linked lists the elements aren't stored in a single sequence of memory blocks. What happens is that each element stores the address for the next element. This allows the items in a liked list to be spread across multiple non-sequential memory addresses
Here's a visual representation of how elements in a linked list are disposed in the memory:
![](linkedlist.png)

The nature of linked lists implies in some interesting characteristics:
- Items can be easily added or deleted without the need to move the existing ones.
- The elements can only be read sequentially, random access isn't possible.

# Arrays
Arrays are probably the most common and simple way to arrange a sequence of different elements of data from the same type. Inserting items in a array is not that simple, since an array require a fixed area of memory with consecutive blocks for each index. The main advantage of the arrays are that we always know the address of every element in the array, so it's very easy to read any element by just knowing its index, without the need to go through every element before, as in linked lists.
Knowing that, we can say that an array is very easy to read, since it allows random access of its elements. But also is very slow to insert or delete from a array, because we have to rearrange the whole structure of the array and in some cases reallocate all memory blocks.
$$
\begin{array}{|c|c|c|}
\hline
&\text{Arrays}&\text{Lists}\\
\hline
\text{Reading}&O(1)&O(n)\\
\hline
\text{Insertion}&O(n)&O(1)\\
\hline
\text{Deletion}&O(n)&O(1)\\
\hline
\end{array}
$$