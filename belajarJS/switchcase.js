let rl = require('readline-sync');

let day = parseInt(rl.question("Masukan Angka : "))

let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'cuma ada sampai  boy'
        break;
}

console.log(dayName);

/*
let bmi = weight / (height*height);

let weightStatus;
switch (true) {
    case bmi < 18.5:
      weightStatus = "Under Weight";
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      weightStatus = "Healthy Weight";
      break;
    case bmi >= 25 && bmi <= 29.9:
      weightStatus = "Over Weight";
      break;
    default:
      weightStatus = "Obesity"
      break;
  }

  console.log(weightStatus)*/

//   switch (month) {
//     case 1: case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     daycount - 31; break;
//     case 4: case 6:
//     case 6:
//     Case 9:
//     I
//     case 11:
//     daycount = 30;
//     break;
//     case 2:
//     if ((year % 4 -= 0 88 ! (year & 100 - 0)) Il year 8.
//     daycount = 29;
//     ) else {
//     daycount = 28;
//     }
//     break;
//     default:
//         daycount =1;
//   }
