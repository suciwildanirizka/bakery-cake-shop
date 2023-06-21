// Toggle class active
const navbarNav = document.querySelector 
('.navbar-nav');
// Ketika cake menu diklik
document.querySelector('#cake-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};


// Klik diluar sidebar untuk menghilangkan nav
const cake = document.querySelector
('#cake-menu');

document.addEventListener('click'), function(e) {
    if(!cake.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
}

let slides = dokument.querySelectorALL('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


