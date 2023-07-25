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
  "Roberts",
  "Robinson",
  "Thompson",
  "Wright",
];
// list of filler
let filler = [
  "Wade",
  "Dave",
  "Seth",
  "Ivan",
  "Riley",
  "Gilbert",
  "Jorge",
  "Dan",
];
// list of used filler
let usedFiller = [];

// generator of missing listName elements

for (let i = listName.length; i <= listSurname.length; i++) {
  let randomFiller = Math.floor(Math.random() * filler.length);
  listName.push(filler[randomFiller]);
  usedFiller = filler.splice(randomFiller, 1);
}

console.log(listName);
alert(listName);
