/* Arrays vs LinkedList
1. Memory Usage:
  - Arrays require contiguous memory allocation, while linked lists use scattered memory with pointers.
2. Access Time:
  - Arrays provide O(1) random access, whereas linked lists require O(n) traversal for access.
3. Insertion/Deletion:
  - Arrays have O(n) complexity for insertion/deletion (except at the end), while linked lists offer O(1) insertion/deletion with a pointer.
4. Memory Overhead:
  - Linked lists use extra memory for pointers, increasing overhead compared to arrays.
5. Cache Performance:
  - Arrays have better cache locality due to contiguous memory, making them faster for sequential access.
6. Dynamic Resizing:
  - Linked lists grow/shrink dynamically without reallocation, while arrays may require resizing and copying.
*/

/* Array List
An Array List is a dynamic array that can grow or shrink in size. It provides random access to elements and is implemented as a resizable array.

Advantages:
1. Dynamic Resizing: Automatically resizes when elements are added or removed.
2. Random Access: Provides O(1) access to elements by index.
3. Cache Friendly: Contiguous memory allocation improves cache performance.

Disadvantages:
1. Resizing Overhead: Resizing involves copying elements to a new array, which is costly.
2. Insertion/Deletion: Operations at the beginning or middle require O(n) time due to shifting elements.
3. Fixed Capacity: May allocate extra memory upfront, leading to potential waste.

Use Cases:
- Suitable for scenarios requiring frequent random access.
- Ideal for dynamic collections with moderate insertion/deletion operations.
*/

//Interview Question: What is better? Array List or Linked List?
/*A (ThePrimeagen): If you're pushing and popping from the end, well, either a Linked List oran ArrayList can work quite well.
You get a little bit more conveniences cuz often with an ArrayList you also havelike say angle bracket accessing.You can have that with a Linked List,
but doesn't often happen.But at the exact same time you have random access with an ArrayList.Give me index three.That's constant time.That's really really good,
but you do not remove from the front.So there's definitely a trade-off, there's definitely a trade-off graph somewhere onthere that you have to be careful of.
Getting sucks on Linked List; removing from the front, sucks on ArrayList.  */

/* RingBuffer
A RingBuffer, also known as a circular buffer, is a fixed-size data structure that uses a single, contiguous block of memory in a circular manner. When the buffer is full,
new data overwrites the oldest data.

Advantages:
1. Fixed Size: Efficient memory usage with a predefined size.
2. Continuous Operation: Ideal for scenarios where overwriting old data is acceptable.
3. Fast Operations: Provides O(1) time complexity for both insertion and deletion.

Disadvantages:
1. Fixed Capacity: Cannot dynamically resize, requiring careful size selection.
2. Overwriting: Risk of losing old data if the buffer is full.

Use Cases:
- Suitable for streaming data, such as audio or video processing.
- Ideal for implementing queues in real-time systems.
*/

/*
What is the [] in javascript? 

Instant access, instant push/pop in the end, O(n) un/shift.
A: ArrayList.
*/
