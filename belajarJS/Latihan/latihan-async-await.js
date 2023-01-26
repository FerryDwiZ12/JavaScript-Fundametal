//bikin 2 object array
//masukin data menggunakan async await promise
//bergantian saat inputnya

function masukinData(tipeMobil, warnaMobil, sizeKursi, hargaMobil ){
    return new Promise((resolve, reject)=> {
        
    this.tipeMobil = tipeMobil,
    this.warnaMobil = warnaMobil,
    this.sizeKursi = sizeKursi,
    this.hargaMobil = hargaMobil
    })
}

function masukinDataLagi(tipeMobil, warnaMobil, sizeKursi, hargaMobil, inden){
    return new Promise((resolve, reject)=> {
        
    this.tipeMobil = tipeMobil,
    this.warnaMobil = warnaMobil,
    this.sizeKursi = sizeKursi,
    this.hargaMobil = hargaMobil,
    this.inden = inden
    })
}

let shorumRoy= [];

let data1 = Object.assign({}, new tipeMobilA())
let data2 = Object.assign({}, new tipeMobilA())

// data1.tipeMobil = 'Honda'
// data1.warnaMobil = 'Putih'
// data1.sizeKursi = '4'
// data1.hargaMobil = 5000

// data2.tipeMobil = 'Toyota'
// data2.warnaMobil = 'Hitam'
// data2.sizeKursi = '6'
// data2.hargaMobil = 4000

shorumRoy.push(data1, data2)
console.log(shorumRoy)

//=====================================================//
