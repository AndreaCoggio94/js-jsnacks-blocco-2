// generate array of number

const numbersAmount = prompt("Quanti numeri vuoi generare ?");

const maxNumber = prompt("Dimmi il numero più alto a cui possono arrivare");

let numbers = [];

for (let i = 0; i < numbersAmount; i++) {
  let newNumber = Math.floor(Math.random() * maxNumber + 1);
  numbers.push(newNumber);
}

console.log(numbers);

// array of numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 != 0) {
    sumNumbers = sumNumbers + numbers[i];
  }
}

console.log(sumNumbers);
alert(sumNumbers);
