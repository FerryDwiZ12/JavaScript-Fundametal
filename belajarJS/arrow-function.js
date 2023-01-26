const startEngine = () => {
    console.log("Enginee Start...");
}
const changeGear = (gear) => {
    console.log(`Masukan Gigi ${gear} to move a car`);
}
const goCar = () => {
    console.log("Mobil Berjalan...");
}
const stopACar = () => {
    console.log("Mobil Berhenti...");
}
const shutDownEngine = () => {
    console.log("Mesin Mobil Dimatikan");
}

//
let add = (a,b) => {a + b}

function driveACAr(callBackFunction){
    callBackFunction();
    changeGear(1);
    goCar();
    stopACar();
    shutDownEngine();
}

driveACAr(startEngine);