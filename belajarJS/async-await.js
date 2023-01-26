const getNomorAntri = (nomor) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve(nomor);
       }, 6000);
     });
   };

   const pilihPaket = (nomor, paket) => {
       return new Promise((resolve, reject) => {
       let msg = "";
       if (nomor <= 10 && !isNaN(nomor)) {
         msg =  "Silahkan Antri";
       } else {
         if (paket === "A") {
           msg = "KFC Paket A";
         } else {
           msg = "KFC Paket B";
         }
       }
       setTimeout(()=>{
           resolve(msg)
       })
     });
   };

   const tagihan = (paket) => {
       return new Promise((resolve, reject) => {
           let pkt = ''
           if (paket === "A") {
               pkt =  25000;
           } else {
               pkt = 24000
           }
           setTimeout(() => {
             resolve(pkt);
           }, 3000);
       })
   };

   const orderKfc = () => {
     setTimeout(() => {
       getNomorAntri(5);
     }, 1000),
       setTimeout(() => {
         pilihPaket(5, "B");
       }, 2000),
       setTimeout(() => {
         tagihan("B");
       }, 5000);
   };

   // orderKfc();

   const orderKFC = async (paket) => {
     const nomorAntri = await getNomorAntri(11);
     const menu = await pilihPaket(nomorAntri, "A");
     const total = await tagihan(menu);
     return [nomorAntri, menu, total];
   };

   orderKFC("A").then((res) => console.log(res));

// const getNomorAntri = (nomor) => {
//   let msg;
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       nomor <= 10 && !isNaN(nomor) ? (msg = "silahkan antri") : (msg = nomor);
//       resolve(msg);
//     }, 6000)
//   );
// };

// const pilihPaket = (paket) => {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       let msg = "";
//       paket == "A" ? (msg = "KFC Paket A") : (msg = "KFC Paket B");
//       resolve(msg);
//     }, 1000)
//   );
// };

// const tagihan = (paket) => {
//   let harga = "";
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       paket == "A" ? (harga = "25000") : (harga = "24000");
//       resolve(harga);
//     }, 3000)
//   );
// };

// const orderKFC = async (paket) => {
//   const nomorAntri = await getNomorAntri(12);
//   const menu = await pilihPaket(paket);
//   const total = await tagihan(paket);

//   return [nomorAntri, menu, total];
// };

// orderKFC("A")
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));
