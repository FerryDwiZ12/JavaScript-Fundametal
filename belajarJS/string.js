let greeting = "Hi";
let message = "Bye";

console(greeting,message);
console.log(greeting,' ', message);


let message2 = 'I\'m Ferry'
    message2 = " I'm Ferry"
    message2 = `I'm "Ferry"`
console.log(message2)

let str = 'java script';
    str = str + 'string'; //= penulisan +=

let s = 'javaScript'

console.log(str)


// trim - menghilangkan spasi

let rawString = ' Hi '
let strippedString = rawString.trim();
console.log(strippedString); // 'Hi'

//
let greeting3 = 'Hello';
console.log(greeting3.toLowerCase()); // 'hello'
console.log(greeting3.toUpperCase()); // 'HELLO'

let str2 = "this is a test of search";
let pos = str.search(/is/);
console.log(pos); // mencari kata is menggunakan search

let expression = ' 1 + 2 = 3';
let matches = expression.match(/\d+/);
console.log(matches[0]); // 1

let expression2 = '1 + 2 = 3';
let matches2 = expression2.match(/\d+/g); // mengecek keseluruhan isi dari expression2
for(const match of matches2) {
    console.log(match)
}

let str3 = "the baby kicks the ball";
//replace "the" with "o"
let newStr = str.replace(/the/g, "a")


//tB APce
camp = "bootcamp"+"node.js"+"\tfullstack"
console.log(camp);

//newLinespace
camp2 = "bootcamp"+"node.js"+"\tfullstack"+"\nwith codeid\nvivaa";
caonsole.log(camp2)

let nama = "code.id"
camp = `bootcamp with ${nama}`


//replace

//split -> ubah string menjadi array character
let campSplit = "aku-suka-ecma"
campSplit = campSplit("-",2)
console.log(campSplit);

//join
let campJoin = campSplit.join("**")
console.log(campJoin);




