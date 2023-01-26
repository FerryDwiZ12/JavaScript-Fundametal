// //rekursif adalah fungsi yang memanggil dirinya sendiri

// function countDown(fromNumber){ // ini akan terus berjalan karena tidak ada yang nyetop
//     console.log(fromNumber);
//     countDown(fromNumber-1)
// }

// function countDown1(fromNumber){
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0){
//         console.log(nextNumber)
//     }
// }

// countDown(3);

// //---------------------------------------------------------------------//

// // mengambil nilai genap dengan rekursif

// let str = ''
// function increment(fromNumber){
//   str += String.fromCharCode(fromNumber) + ' '
  
//   let nextNumber = fromNumber + 1

//   if(nextNumber < 123){
//     increment(nextNumber)
//   }
// }

// increment(97)

// let nextNumber = 0
// function genap(number) {
//   nextNumber ++
//   if(nextNumber <= number){
//     nextNumber%2 == 0 ? console.log(nextNumber) : console.log('')
//     genap(number)
//   }
// }

// genap(100)


//------------TUGAS------------//

let bintang = '';
let jumlah = 0;
function segitiga(n){
  jumlah++
  if(jumlah <= n){
    
    bintang += '* '
    console.log(bintang)
    segitiga(n)
  }
}

segitiga(5)