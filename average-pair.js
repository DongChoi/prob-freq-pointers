"use strict";



/** function will accept two parameters. First parameter is a sorted array, the second parameter is a number that is our target average.
 * We'll use multiple pointers to move through the front and back of the array determining if the paired values equals the target average.
 */
function averagePair(nums, targetAverage) {

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let average = (nums[left] + nums[right]) / 2;
    if (average === targetAverage) {
      return true;
    }

    else if (average > targetAverage) {
      right--;
    }

    else left++;
  }
  return false;
}
