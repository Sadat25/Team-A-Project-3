let box = document.querySelector('.box');
let html = document.getElementById('html');
let btn = document.querySelector('#btn');

btn.addEventListener("click", handlechange)

function handlechange(){
    html.classList.toggle("dark")
}


