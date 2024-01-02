/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function sortFn(a,b){
    if(a > b) return 1;
    else if(a < b) return -1;
    else 0;
}

function findLargestElement(numbers) {
    return numbers.sort(sortFn)[numbers.length - 1];
}

module.exports = findLargestElement;