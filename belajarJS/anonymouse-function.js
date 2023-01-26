// function anonimouse dibungkus dengan variabel

let show = function(){
    console.log('Anounimouse function')
};

show()

// Functin Anonimouse menggunakan parameter

let person = {
    firstName: "Jhon",
    lastName: "Week"
};

(function(){
    console.log(person.firstName+ ' ' + person.lastName);
})(person);


function driveACAr(){
    setTimeout(function(){
        console.log("Engine start..")
    },1000)
    setTimeout(function(){
        console.log("Engine move..")
    },2000)
    setTimeout(function(){
        console.log("Engine stop..")
    },3000)
}

driveACAr()



function driveAcarTimeOut(callBackFunction){
    setTimeout
}