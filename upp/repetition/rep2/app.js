let arr = document.getElementById("arr");
let pop = document.getElementById("pop");
let push = document.getElementById("push");
let splice = document.getElementById("splice");

let myArray = ["volvo", "nissan", "toyota", "mercedes", "bmw"]

arr.innerHTML = myArray;

pop.addEventListener("click", popFunction)
push.addEventListener("click", pushFunction)
splice.addEventListener("click", spliceFunction)

function popFunction() {
    myArray.pop();
    arr.innerHTML = myArray
}
function pushFunction() {
    myArray.push("volvo?");
    arr.innerHTML = myArray
}
function spliceFunction() {
    myArray.splice(0, 3);
    arr.innerHTML = myArray
}