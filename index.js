// function sayHello(name, age){
//     return `Hello ${name} you are ${age} years old`;
// }
// const greetJeong = sayHello("Jeong", 29);

/*
const calculator = {
    plus : function(a, b){
        return a + b;
    }
}

// console.log(greetJeong);
const plus = calculator.plus(5, 5);
console.log(plus);
*/
/*
const title = document.getElementById("title");

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
console.dir(title);
console.dir(document);
*/


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick); // 함수를 바로 호출하지 않는다.
}

init();







