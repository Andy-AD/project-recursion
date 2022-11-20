/* Fibonacci Sequence using iteration
@param {number} number: Get the number of elements
@returns The array of  Fibonacci numbers */

function fibs(number) {
    if (number <= 0) return "Number is not valid"
    if (number === 1) return [0];
    if (number === 2) return [0, 1];
    let numbers = [0, 1];
    for (let i = 2; i < number; i++) {
      numbers.push(numbers[i - 2] + numbers[i - 1]);
    }
    return numbers;
  }