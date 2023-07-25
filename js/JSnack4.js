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

for (let i = listName.length; i <= listSurname.length; i++) {
  listName.push("filler");
}

console.log(listName);
