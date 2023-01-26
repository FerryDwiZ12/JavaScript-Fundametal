// try {
//     let result = add(10, 20);
//     console.log(result);
// }catch(e){
//     console.log({name:e.name, message:e.message});
// }
// console.log("Bye")

// let result = 0;
// try{
//     result = add(10, 20);
// }catch (e){
//     console.log(e.message);
// }finally{
//     console.log({result})
// }


const add = (x, y) => x + y

let result = 0;

try{
    result = add(10, 20);
    console.log({result})
}catch(e) {
    console.log(e.message);
} finally {
    console.log({result})
}