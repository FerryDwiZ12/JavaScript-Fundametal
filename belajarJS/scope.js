var message = 'Hi'; //globsl

function say(){
    var message = 'Hello'; // local
    console.log(message);
}

say(); //nebanpilkan Hello
console.log(message);
