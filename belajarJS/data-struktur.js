// struktur data stag sma Q

let arrayList = [];
for (let i = 2; i < 20; i += 2) {
  arrayList.push(i);
}

console.log(arrayList);
arrayList.pop();
console.log(arrayList);

let hasil;
for (let e of arrayList) {
  hasil += e + 3 + " "; // hasil di + 3 ex: 2 jadi 5
}
console.log(hasil);


arrayList.forEach(e=>{
    hasil += e + 3 + " "; // hasil di + 3 ex: 2 jadi 5
})
console.log(hasil)

arrayList.map(arr=>{
    hasil += arr + 3 + " "; // hasil di + 3 ex: 2 jadi 5
})
console.log(hasil)


let user= [{
    nama: "Zul",
    kelas: "3 SMA",
    Hobbi: "Main Game",
    active: true
}]

console.log(user)

for(let e in user){             // Mengambil data dalam object menggununakan key
    console.log(user[e])    //e itu data
}


// ---------Mengisi nilai array data menggunakan isi object----//
let data =[];
for(let e in user){
    data.push(user[e])
}

console.log(data)


// Mengubah data nilai user
user.nama= "Ferry";
user.kelas="XII";
console.log(user)

function users(nama, kelas, Hobbi, active){
    this.nama = nama,
    this.kelas = kelas,
    this.Hobbi = Hobbi,
    this.active = active
}

let objectUser = [];

let user1 = Object.assign({}, new users()) // menambahkan nilai dengan function, tapi dengan Object.assign nama function tidak ikut
let user2 = Object.assign({}, new users())

user1.nama = 'Roy'
user1.kelas = 'VI IPA'
user1.Hobbi = 'Mancing'
user1.active = true

user2.nama = 'Lemon'
user2.kelas = 'IV IPA'
user2.Hobbi = 'Tamia'
user2.active = true

objectUser.push(user1, user2)
console.log(objectUser)


console.log("=============BATAS=============")

// let f2 = objectUser.map( e =>{
//     console.log(e)
// })

for(let e of objectUser){
    console.log(e)
    //
    //console.log("Object"+ JSON.stringify)
}

//belum jadi
for(let a of objectUser){

}