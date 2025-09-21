const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
function reload() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
}
function drawStars(count){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for(let i=0;i<count;i++){
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        let radius = Math.random()*1.2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}
function initstar() {
    reload()
    drawStars(750);
}
window.addEventListener('resize', initstar())
window.addEventListener('DOMContentLoaded', initstar())



const navbar = document.querySelectorAll('.navbar__item');
const sec = document.querySelectorAll('section[id]');

function setActive() {
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sec.forEach((sec, index) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            navbar.forEach(item => item.classList.remove('active'))
            navbar[index].classList.add('active')
        }
    })
};

window.addEventListener('scroll', setActive);
window.addEventListener('DOMContentLoaded', setActive);


let characters = document.querySelectorAll(['[data-tab-character]']);
let desc = document.querySelectorAll(['[data-tab-desc]'])

characters.forEach((char) => {
    char.addEventListener('click', () => {
        characters.forEach(c => c.classList.remove('active--2'));
        char.classList.add('active--2')
        let target = char.getAttribute('data-tab-character');
        desc.forEach(d => d.classList.add('hide'));
        
        let selected = document.querySelector(`[data-tab-desc="${target}"]`);
        if (selected) {
            selected.classList.remove('hide');
        }
    })
    }
);