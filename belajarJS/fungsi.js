//JENIS JENIS FUNCTION
//reguler
//callback
//anonimous
//arrow

//Bukan Void
function apa(){
    return "hi"
}
console.log(apa());


//--------Void Function----------//
function sayHello(s){
    console.log("Wedus")
}

sayHello()
//--------- Calllback Function----//
// Callback function adlaah function yang dikirim sebagai parameter ke function lain

function startEngine(){
    console.log("Engine Start....");
}
function changeGear(gear){
    console.log(`Masukan gigi ${gear} to move a car`);
}

function goCar(){
    console.log("Mobil Berjalan")
}

function stopACar(){
    console.log("Mobil Berhenti..")
}

function shutDownEngine(){
    console.log("Mesin Mobil Dimanatikan")
}

//call man function

function driveACAr(callBackFunction){
    callBackFunction();
    changeGear(1);
    goCar();
    stopACar();
    shutDownEngine();
}

driveACAr(startEngine);
