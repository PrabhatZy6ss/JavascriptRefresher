// import * as util from "./util.js";
// //import checkdefault from "./util.js";
// console.log(util.apiKey, util.default);
function greetUser(userName, message = "Hello") {
  // console.log(userName, message);
  return "Hi" + userName + ". " + message;
}
const greetingUser = greetUser("Prabhat", "OverwritinhHello");
console.log(greetingUser);
function combine(a, b, c) {
  return (a * b) / c;
}
const calculateValue = combine(10, 5, 6);
console.log(calculateValue);

const createPerson = (name, age) => ({
  name: name,
  age: age
});

// Or, using shorthand property names (ES6 feature)
//const createPerson = (name, age) => ({ name, age });

const person = createPerson("JohnyGaddar", 30);

console.log(person.name); // { name: 'John', age: 30 }

const userObj = {
  name: "Prabhat",
  skills: "ReactJS developer",
  userObjfun() {
    console.log("Hello Prabhat " + this.skills);
  }
};
console.log(userObj.userObjfun());
const hobbies = ["Cycling", "Gyming", "Sports", "Music/Drama"];
const index = hobbies.findIndex((item) => item === "Music/Drama");
console.log(index);
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);
function transformToObjects(numberArray) {
  // Todo: Add your logic
  var result = [];
  for (var i = 0; i < numberArray.length; i++) {
    var obj = { val: numberArray[i] };
    result.push(obj);
  }
  return result;
  // should return an array of objects
}
var inputArray = [1, 2, 3];
var transformedArray = transformToObjects(inputArray);
console.log(transformedArray);
const userHead = {
  eid: "p.i.kumar"
};
const userUnit = {
  ...userHead,
  name: "Prabhat",
  managementLevel: 12,
  eid: "ritika.sinha"
};
// const password = prompt("Enter password");
// if (password === "Hello") {
//   console.log("Hello Works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   alert("access denied");
// }
console.log(userUnit.eid);
const printName = ({ name }) => {
  console.log(name);
};
printName({ name: "Max", age: 28, hasSkills: "ReactJS" });
