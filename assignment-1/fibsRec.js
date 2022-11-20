/* Fibonacci Sequence using recursion
@param {number} n: Get the number of elements
@returns The array of  Fibonacci numbers */

function fibsRec(n) {
    if (n <= 0) return "Number is not valid";
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let arr = fibsRec(n - 1);
    return [...arr, arr[n - 2] + arr[n - 3]];
  }