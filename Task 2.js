let people = ["Adam", "Mia", "Jamal", "Sara", "Omar", "Nina"];

/*Ahmed Montaser Ahmed Hassan*/
/*Day 2*/
people.shift();
//console.log(people);
people.unshift("Luna");
//console.log(people);
let r = people.splice(-2);
people.splice(1, 0, ...r);
//console.log(people);
/*==================================================================================*/
let a = 12;
let b = 5;
let c = 0;
let isNiceNumber = true;

if ((a % 2 == 0 && b % 2 == 1) || !c == true) {
  //console.log("isNiceNumber : ", isNiceNumber);
}
/*============================================================================*/
let cartA = ["Phone", "Headphones", "Charger"];
let cartB = ["Laptop", "Camera"];
let hasTechDeal;

if (cartA.includes("Laptop") || cartA.includes("Camera")) {
  //console.log("hasTechDeal in cartA =", (hasTechDeal = true));
} else if (cartB.includes("Laptop") || cartB.includes("Camera")) {
  //console.log("hasTechDeal = in cartB", (hasTechDeal = true));
}
/*====================================================================================================*/
let values = [0, "hi", "", 42, null];
let truthy = [];
let falsy = [];
if (!values[0]) {
  falsy.push(values[0]);
} else {
  truthy.push(values[0]);
}
if (!values[1]) {
  falsy.push(values[1]);
} else {
  truthy.push(values[1]);
}
if (!values[2]) {
  falsy.push(values[2]);
} else {
  truthy.push(values[2]);
}
if (!values[3]) {
  falsy.push(values[3]);
} else {
  truthy.push(values[3]);
}
if (!values[4]) {
  falsy.push(values[4]);
} else {
  truthy.push(values[4]);
}

//console.log(truthy, falsy);
/*=======================================================*/
let defaults = { theme: "light", pageSize: 20, showTips: true };
let overrides = { theme: "", pageSize: 50 };
let set = {};
let settings = Object.assign(set, defaults, overrides);

//console.log(settings, defaults);
/*================================================================*/
let vehicleBase = {
  type: "vehicle",
  wheels: 0,
  powered: true,
};
let myBike = Object.create(vehicleBase);
myBike.type = "bike";
myBike.wheels = 2;
myBike.brand = "EcoRide";
//console.log("myBike.kind     =", myBike.kind);
//console.log("myBike.wheels   =", myBike.wheels);
//console.log("myBike.powered  =", myBike.powered);
/*====================================================*/
let scores = { Alice: 17, Bob: 22, Carol: 22 };
let v = Object.keys(scores);
let m = Object.values(scores);
//console.log(v, m);
let hasBob;
if (v.includes("Bob")) {
  //console.log((hasBob = true));
}
let winner;
if (scores.Alice > scores.Bob && scores.Alice > scores.Carol) {
  console.log((winner = scores.Alice));
} else if (scores.Bob > scores.Alice && scores.Bob > scores.Carol) {
  console.log((winner = scores.Bob));
} else if (scores.Carol > scores.Alice && scores.Carol > scores.Bob) {
  console.log((winner = scores.Carol));
} else {
  //console.log((winner = "Tie"));
}
/*==========================================================================*/
let customer = { age: 20, isStudent: true, hasCoupon: true };
let price;
if (customer.age < 6) {
  price = 0;
} else if (customer.age <= 18 || customer.isStudent == true) {
  price = 8;
} else if (customer.age >= 65) {
  price = 6;
} else {
  price = 12;
}
if (customer.hasCoupon == true) {
  if (price == 0) {
    price = 0;
  } else {
    price -= 2;
  }
}
//console.log("price =", price);
/*===============================================*/
let rawName = "   PreProgramming JavaScript   ";
let trim = rawName.trim();
let firword = trim.split(" ")[0];
let displayName = firword[0].toUpperCase() + firword.slice(1).toLowerCase();
let hasProgram = trim.toLowerCase().includes("program");
//console.log("displayName =", displayName);
// console.log("hasProgram  =", hasProgram);
