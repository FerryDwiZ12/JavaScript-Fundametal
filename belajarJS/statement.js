let rl = require('readline-sync');
let weight = rl.question("Masukan Berat Badan Anda : ")
let height = rl.question("Masukan Tinggi Badan ANda : ")

let bmi = weight / (height*height);

//ternery

let weightStatus = bmi < 18.5 ? 'Underweight' 
                    : bmi>= 18.5 && bmi <= 4.9 ? 'Healthy Weight' 
                    : bmi>= 25 && bmi <= 29.9 ? 'Overweight' 
                    : 'Obesity';


// if (bmi < 18.5) {
//     weightStatus = 'Underweight';
// }else if(bmi>= 18.5 && bmi <= 4.9){
//     weightStatus = 'Healthy Weight';
// }else if(bmi>= 25 && bmi <= 29.9){
//     weightStatus = 'Overweight';
// }else{
//     weightStatus = 'Obesity';
// }

console.log(weightStatus)

let angka1 = rl.question("Masukan Data : ")
// // angka1=pharseInt(angka1)

// let angka1=5;

// if(angka1>5){
//     console.log("Angka yang  diinput lebih besar dari 5")
// }else{
//     console.log("Angka ya4g  diinput Kurang dari 5")
// }

if (angka1==5) {
    console.log("Angka yang  diinput sama dengan 5")
}else if(angka1>=5) {
    console.log("Angka yang diinputkan lebih besar sama dengan 5")
}else if (angka1 != 5) {
    console.log("Angka yang  diinput tidak sama dengan  dari 5") 
}else if (angka1<=5) {
    console.log("Angka yang diinputkan kurang sama dengan 5")
}else{
    console.log("Angka yang diinput tidak ada yang sesuai")
}

// FLOW STATEMENT

 let age = 16;
 let state = 'CA';

 if (state == 'CA' && age == 16){
    console.log('You Can Drive');
 }

 // IF DIDALAM IF

 let age1 = 16;
 let state1 = 'CA';

 if(state == 'CA'){
    if(age1 >=16) {
        console.log('You Can Drive')
    }
 }

  