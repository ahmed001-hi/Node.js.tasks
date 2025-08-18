const student = {
  name: "Amina",
  age: 19,
  contact: {
    email: "amina@example.com",
    phones: ["+201100000000", "+201122233344"],
  },
  favorites: {
    colors: ["red", "green", "blue"],
    books: [
      { title: "Eloquent JavaScript", authors: ["Marijn Haverbeke"] },
      { title: "You Don't Know JS", authors: ["Kyle Simpson"] },
    ],
  },
};

const classroom = {
  courseName: "Intro to JavaScript",
  batches: [
    {
      id: "AUG",
      students: [
        { id: "s1", name: "Amina", scores: [10, 15, 20] },
        { id: "s2", name: "Omar", scores: [12, 18, 17] },
      ],
    },
    {
      id: "SEP",
      students: [{ id: "s3", name: "Sara", scores: [20, 19, 18] }],
    },
  ],
  materials: ["console", "strings", "arrays", "objects"],
};

/*Ahmed Montaser Ahmed Hassan*/
// console.log(classroom.courseName)
// console.log(student)
// console.log(student.contact)
// console.log(student.contact.phones.length)
// console.log(classroom.materials)
/*=====================================================================*/
//console.log(2 + 3); // 5
//console.log("2" + 3); //23
//console.log(2 + "3"); //23
//console.log("2" + "3");// 23
//console.log(2 + 3 + "5"); //55
//console.log("5" + 2 + 3); //523
/*===================================================================*/
const a = "10";
const b = 5;
//console.log(parseInt(a) + b)
//console.log(a+b)
/*=====================================================================*/
//console.log(student.contact.phones[0])

let j = student.favorites.colors;
let k = j[j.length - 1];
//console.log(k)
/*=======================================================================*/
//console.log(student.favorites.books[1].title)
/*========================================================================*/
//console.log(classroom.batches[0].students[1].name)
/*========================================================================*/
student.favorites.colors.push("purple");
//console.log(student.favorites.colors)
/*========================================================================*/
//console.log(student.favorites.books[0].authors)
/*=====================================================================*/
//console.log(classroom.batches[0].students[1].scores[1])
/*=====================================================================*/
const phrase = "  JavaScript is Fun and Powerful!  ";
let n = phrase.trim();
//console.log(n)
//console.log(n.toUpperCase())
//console.log(n.toLowerCase())
let v = n.replace("Fun", "Awesome");
//console.log(v)
/*=========================================================*/
const csv = "Amina,19,amina@example.com";
let ah = csv.slice(0, 5);
let me = csv.slice(6, 8);
let ed = csv.slice(9, 26);
let arr = [ah, me, ed];
//console.log(arr)
/*===========================================*/
let o = classroom.batches[0].students[0].name;
let f = classroom.batches[0].students[1].name;
//console.log(classroom.batches[0].students[0].name,classroom.batches[0].students[0].scores[2])
//console.log(classroom.batches[0].students[1].name,classroom.batches[0].students[1].scores[2])
/*Ahmdc Montaser*/
