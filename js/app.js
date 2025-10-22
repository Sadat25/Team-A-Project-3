const darklight = document.getElementById('darklight');
const menuBar = document.getElementById('menuBar');
const mobileMenu = document.getElementById('mobileMenu');
const html = document.getElementsByTagName('html')[0];

darklight.addEventListener('click', () => {
    html.classList.toggle('dark');
});

menuBar.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});