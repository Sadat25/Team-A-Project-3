const darklight = document.getElementById('darklight');
const html = document.getElementsByTagName('html')[0];
darklight.addEventListener('click',()=>{
    html.classList.toggle('dark');
    console.log(html.classList);
})