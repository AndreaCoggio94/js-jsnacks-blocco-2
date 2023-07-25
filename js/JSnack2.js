// list of names
let listName = [
  "Jack",
  "Jimmy",
  "Johnny",
  "Jenny",
  "Eleanor",
  "Miles",
  "Lucy",
  "Daisy",
  "Olive",
];
// list of surnames
let listSurname = [
  "Smith",
  "Jones",
  "William",
  "Taylor",
  "Brown",
  "Davies",
  "Evans",
  "Thomas",
  "Wilson",
];
// number of guest
const guest = prompt("Quanti invitati vuoi avere?");

// guest generator

let invitedGuest = [];

for (let i = 0; i < guest; i++) {
  let numberName = Math.floor(Math.random() * listName.length);
  let numberSurname = Math.floor(Math.random() * listSurname.length);
  invitedGuest.push(listName[numberName] + " " + listSurname[numberSurname]);
}

console.log(invitedGuest);
alert(invitedGuest);
