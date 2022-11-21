/* Function mergeSort using a recursive merge sort methodology
@param {array} arr: Array of integers to be sorted
@returns Sorted array */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let sortedArray = merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
  );
  return sortedArray;
}

function merge(leftSortedArr, rightSortedArr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let mergedArray = [];
  while (
    leftIndex < leftSortedArr.length ||
    rightIndex < rightSortedArr.length
  ) {
    if (leftSortedArr[leftIndex] <= rightSortedArr[rightIndex]) {
      mergedArray.push(leftSortedArr[leftIndex]);
      leftIndex++;
    } else if (rightSortedArr[rightIndex] < leftSortedArr[leftIndex]) {
      mergedArray.push(rightSortedArr[rightIndex]);
      rightIndex++;
    } else if (!leftSortedArr[leftIndex]) {
      mergedArray.push(rightSortedArr[rightIndex]);
      rightIndex++;
    } else if (!rightSortedArr[rightIndex]) {
      mergedArray.push(leftSortedArr[leftIndex]);
      leftIndex++;
    }
  }
  return mergedArray;
}
