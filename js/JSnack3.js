// array of numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    sumNumbers = sumNumbers + numbers[i];
  }
}

console.log(sumNumbers);
alert(sumNumbers);
