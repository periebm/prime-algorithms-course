/* Binary Search
Array needs to be sorted. Divides the list in half at each iteration, comparing the middle element with the target. If the target is equal, returns the index.
If smaller, searches the left half; if larger, searches the right half. Repeats until the element is found or determined to be absent. Complexity: O(log n). 
#Tip: If the input halves at each step, its likely O(LogN) or O(NlogN) */

function binarySearch(numberArray: number[], target: number): number {
  let left = 0;
  let right = numberArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numberArray[mid] === target) {
      return mid; // Target found
    } else if (numberArray[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

function testBinarySearch() {
  const arr: number[] = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

  console.log(binarySearch(arr, 23)); // Output: 5 (index of element 23)
  console.log(binarySearch(arr, 8)); // Output: 2 (index of element 8)
  console.log(binarySearch(arr, 50)); // Output: -1 (element not found)
  console.log(binarySearch(arr, 2)); // Output: 0 (index of element 2)
  console.log(binarySearch(arr, 91)); // Output: 9 (index of element 91)
}

/* The Crystal Ball Problem

You have a fixed number of balls (e.g., 2) and a building with n floors. The goal is to determine the critical floor
(the highest floor where the ball doesn't break) while minimizing the worst-case number of drops. The problem assumes:

If a ball doesn't break when dropped from a floor, it can be reused.
If it breaks, it cannot be reused.
There is a threshold floor: below it, the ball doesn't break; at or above it, the ball breaks.
For example, with 2 balls and 100 floors, you need to find the critical floor with the fewest drops in the worst case.

Solution:
The optimal strategy for the 2-crystal-ball problem uses a binary search-like approach with a step size to minimize the worst-case number of drops.
Instead of dropping from the middle (which is inefficient with limited balls), we drop the first ball at intervals of approximately
floors (or a calculated step size) to narrow down the range. If the first ball breaks, we use the second ball to test floors sequentially in the narrowed range.
This balances the number of drops between the two balls.
*/

function twoCrystalBall(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount;
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  // Start searching from the floor after the last safe floor
  i -= jmpAmount;
  for (let j = 0; j <= jmpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1; // No break found
}

function testTwoCrystalBall() {
  const breaks: boolean[] = Array(100).fill(false).fill(true, 42);
  console.log(twoCrystalBall(breaks)); // Expected output: 42

  const breaks2: boolean[] = Array(100).fill(false).fill(true, 10); // Critical floor at 10
  console.log(twoCrystalBall(breaks2)); // Expected output: 10

  const breaks3: boolean[] = Array(100).fill(false); // No break
  console.log(twoCrystalBall(breaks3)); // Expected output: -1

  const breaks4: boolean[] = Array(100).fill(false).fill(true, 95); // Critical floor at 95
  console.log(twoCrystalBall(breaks4)); // Expected output: 95
}
