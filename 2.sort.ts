/* Bubble Sort
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list.
The algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high, O(n^2), where n is the number of items being sorted.
*/

function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function testBubbleSort() {
  const unsortedArray: number[] = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  const reverseArray: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const duplicatesArray: number[] = [5, 2, 8, 5, 1, 9, 2, 8];
  const singleElementArray: number[] = [42];
  const emptyArray: number[] = [];

  // Run tests
  console.log('Unsorted Array:', bubbleSort([...unsortedArray]));
  // Output: [11, 12, 22, 25, 34, 64, 90]

  console.log('Sorted Array:', bubbleSort([...sortedArray]));
  // Output: [1, 2, 3, 4, 5, 6, 7]

  console.log('Reverse Array:', bubbleSort([...reverseArray]));
  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

  console.log('Duplicates Array:', bubbleSort([...duplicatesArray]));
  // Output: [1, 2, 2, 5, 5, 8, 8, 9]

  console.log('Single Element Array:', bubbleSort([...singleElementArray]));
  // Output: [42]

  console.log('Empty Array:', bubbleSort([...emptyArray]));
  // Output: []
}

/* Linked List
A linked list is a linear data structure where each element is a separate object.
Each element (or node) of a list comprises two parts: data and a reference (or link) to the next node in the sequence.

Fast Insertion/Deletion: Adding or removing elements at the beginning (O(1)) or at known positions (O(1) with a pointer) is efficient, without needing reallocation.
Dynamic Size: Easily grow or shrink without a fixed size, ideal for data with unknown size.
Flexible Memory Usage: Does not require contiguous memory allocation, useful in systems with fragmented memory.

Slow Random Access: Accessing an element requires traversing the list (O(n)), unlike arrays (O(1)).
Extra Memory Usage: Each node stores pointers (e.g., next, prev in doubly linked lists), increasing memory consumption.
Slow Search: Finding an element requires linear traversal (O(n)), less efficient than binary search in sorted arrays.
*/

/* Queue
A Queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. Elements are added (enqueued) at the rear and removed (dequeued) from the front.

Efficient FIFO Operations: Enqueue and dequeue are O(1) with proper implementation (e.g., linked list or circular array).
Dynamic Size: Can grow/shrink easily (with linked list implementation).
Useful for Orderly Processing: Ideal for tasks like job scheduling, breadth-first search, or buffering (e.g., print queues).

Limited Access: Only the front element can be accessed or removed, no random access.
Memory Overhead: Linked list queues use extra memory for pointers; array-based queues may waste space if not circular.
Slow Search: Finding an element requires O(n) traversal, as queues are not designed for searching.
*/
type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as QNode<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.head = { value: item } as QNode<T>;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return undefined;

    this.length--;
    const head = this.head;
    this.head = this.head.next;

    //free
    head.next = undefined;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

/* Stacks
A Stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. Elements are added (pushed) and removed (popped) from the top of the stack.

Efficient LIFO Operations: Push and pop are O(1) operations.
Dynamic Size: Can grow/shrink easily (with linked list or dynamic array implementation).
Useful for Reversals: Ideal for tasks like reversing strings, parsing expressions, or managing function calls (call stack).

Limited Access: Only the top element can be accessed or removed, no random access.
Memory Overhead: Linked list stacks use extra memory for pointers; array-based stacks may waste space if not resized dynamically.
Slow Search: Finding an element requires O(n) traversal, as stacks are not designed for searching.
*/
type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

class Stack<T> {
  public length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item } as SNode<T>;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    const head = this.head as SNode<T>;
    this.head = head.prev;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

