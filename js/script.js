let box = document.querySelector('.box');

let btn = document.querySelector('#btn');

btn.addEventListener("click", handlechange)

function handlechange(){
    box.classList.toggle("box1")
}


