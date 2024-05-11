---
created-at: 2020-12-08
tags:
---
A hash table is a data structure that allows us to search, insert and delete data all in $\text{O}(1)$ (constant time). That can be acomplished by combining an [[Arrays and linked lists#Arrays|arrays]] and a mapping function (aka [[Hash function|hash function]]), those are the two components of a hash table.
Hash tables associate a *key* with a *value*. When we want to insert data, we give the *key* and the respective *value* to the hash function, then it converts the *key* into a index, and stores the *value* in this index of the array. WHen we want to search or delete data, we simply inform the *key*, the hash function converts that *key* into a index and either return or delete the value stored in the array on that specific index. 
This is what allows the hash table to perform any operation in *constant time*. It's important to notice that the speed and efficiency of the hash table depends mainly on the hash function, so it's very important to use a good one for that task.