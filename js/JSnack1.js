alert("hello world");

const userNumber = prompt("inserisci un numero");
const usedNumber = parseInt(userNumber);

if (usedNumber % 2 == 0) {
  alert(usedNumber);
} else {
  alert(usedNumber + 1);
}
