---
created-at: 2020-11-19
---
Binary search is an algoritm that searches for a element in a **ordered** list and returns its position. The idea is that each step reduces in half the search space. The algoritm first gets the middle element in the interval, then it compares the element with the target element, if the middle element is bigger than the target, then we set the max of the interval to the middle element, that's why is crucial that the list or array is **sorted**. The process is analog if the middle element is smaller than the target, every time that we get a new element we cut the array in half, until the middle element is equal to the target element.
The binary search takes $\log_2{n}$ steps to find the target, in other words, its a very very efficient algorithm in wich the steps needed to find the target element grow at a lower rate as the number of elements increases. That means that the bigger the number of elements, more useful the binary search becomes!
When we implement this algorithm, is very very important to pay attention in the way that we obtain the middle element. It's very intuitive to do:
$$
  m= \frac{min+max}{2}
$$
But this is a very poor aproach that can easily lead to overflow when dealing with larger numbers. We should always use the equivalent expression:
$$
  m=min + \frac{max-min}{2}
$$