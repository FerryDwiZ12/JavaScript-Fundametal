// // Iterasi adalah Perulangan

// let ranks = ['A', 'B', 'C'];

// // for (let i = 0; i < ranks.length; i++) {
// //     console.log(ranks[i])
// // }

// for (const [index,ranks] of ranks.entries()){
//     console.log(`${ranks} is at index ${index}`);
// }

// let a = "JavaScript"

// for (let i = 0; i <= 1000; i++){
//     console.log(a)
// }

// const user = {
//   name: "Jhon Doe",
//   email: "@gmail.com",
//   age: 25,
//   dob: "04396u13907",
//   active: true,
// };

// for (const key in user) {
//   console.log(`$(key): ${user[key]}`);
// }

// let colors = ['Red', 'Greeen', 'Blue'];

// for (const[index, colors] of colors.entries()){
//     console.log(`${colors} is at index ${index}`);
// }

//Array Object memanggil isi object
const users = [
  {
    name: "Jhon Doe",
    email: "@gmail.com",
    age: 25,
    dob: "04396u13907",
    active: true,
  },
  {
    name: "Adam",
    email: "@gmail.com",
    age: 25,
    dob: "04396u13907",
    active: true,
  },
  {
    name: "Jamet",
    email: "@gmail.com",
    age: 25,
    dob: "04396u13907",
    active: true,
  },
  {
    name: "Jojo",
    email: "@gmail.com",
    age: 25,
    dob: "04396u13907",
    active: true,
  },
  {
    name: "Ali",
    email: "@gmail.com",
    age: 25,
    dob: "04396u13907",
    active: true,
  },
];

for (const key of users) {
  for (const key1 in key) {
    console.log(key1 + key[key1]);
  }
}

//----- Insert arrray -----//

const foods = ["sup", "pizza", "pasta"];

//add last index
foods.push("cake");

//hapus element di index terakhir
foods.pop();

//add d=first index
foods.unshift("donut");

//hapus element di firstName
foods.shift();

//--------Segitiga 5 4 3 2 1---------//

for (let i = 0; i < 6; i++) {
  let concat = "";
  for (let j = i; j < 6; j++) {
    concat = j - i + " " + concat;
  }
  console.log(concat.replace("0", ""));
  console.log();
}

//----------KOTAK-----//

// let lastCount = 0;
// for ( let i = 0; i < 5; i++){
//     let concat1 = 0;
//     for(let j = 1; j < 5; j++){
//         concat1 += (i+j) + ""
//     }
// }

//---SEGITIGA SAMA KAKI---//

// const n = 7;
// let concat3 = " ";
// let angka = " =";
// for (let i = 1; i <= n; i++) {
//   concat3 = concat3.repeat(n - i) + angka.repeat(i);
//   console.log(concat3);
//   concat3 = " ";
// }

// //---
// //      F
// //     EE
// //    DDD
// //   CCCC
// //  BBBBB
// // AAAAAA

// for (let i = 0; i < 6; i++) {
//   let concat = "";
//   for (let j = i; j < 6; j++) {
//     concat = j - i + " " + concat;
//   }
//   console.log(concat.replace("0", ""));
//   console.log();
// }

// function segitigaA(s) {
//   for (let i = 0; i < s.length; i++) {}
// }

// segitigaA(12);

// segitiga siku-siku
// //      F
// //     EE
// //    DDD
// //   CCCC
// //  BBBBB
// // AAAAAA

let b = require("readline-sync");
let banyak = b.question("Masukkan banyak baris: ");

let max = parseInt(banyak);
let spasi = " ";
let isi = '';
let counts = 0; 

for (let i = 1; i <= max; i++) {
  let huruf = String.fromCharCode(96 + max + counts);
  isi = spasi.repeat(max - i) + huruf.repeat(i);
  console.log(isi);
  isi = '';
  counts--;
}


// // //----------- Operator In---------------//
// const person = {
//   firstName: "Jamet",
//   middleName: "Kudis",
//   lastName: "Kurap",
// };

// if ("firstName" in person) {
//   console.log(`Hallo ${person.firstName}`);
// } else {
//   console.log("FirstName Tidak Ada");
// }

// // //--------------------------------------------------------------------//
// // /* a
// //         b
// //             c
// //                 d*/

// // // Dengan Lopping For
// function viewGanjilFor() {
//   let rl = require("readline-sync");
//   let n = parseInt(rl.question("Masukkan Banyak Data : ")) * 2;

//   let concat = " ";
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 != 0) {
//       concat = concat.repeat(n + i) + i;
//       console.log(concat);
//       concat = " ";
//     }
//   }
// }
// viewGanjilFor();

// // Looping Dengan While
// function viewGanjilWhile() {
//   let rl = require("readline-sync");
//   let n = parseInt(rl.question("Masukkan Banyak Data : ")) * 2;
//   let i = 0;
//   let concat = " ";
//   while (i <= n) {
//     if (i % 2 != 0) {
//       concat = concat.repeat(n + i) + i;
//       console.log(concat);
//       concat = " ";
//     }
//     i++;
//   }
// }
// viewGanjilWhile();

// //--------------------------------------------------------------------//
