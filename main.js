
const crente = document.querySelector('.crente');
const diabo = document.querySelector('.diabo');


const jump = () => {
    crente.classList.add('jump');  

    setTimeout(() =>{
        crente.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const diaboPosition = diabo.offsetLeft;
    const crentePosition = +window.getComputedStyle(crente).bottom.replace('px', '');

    if(diaboPosition <= 95 && diaboPosition > 0 && crentePosition <= 70  ){
        diabo.style.animation = 'none';
        diabo.style.left = `${diaboPosition}px`

        crente.style.animation = 'none';
        crente.style.bottom = `${crentePosition}px`

        crente.src = '/images/rip.png';
        crente.style.width = '100px';
        crente.style.marginLeft = '10px';
    }

}, 10);


document.addEventListener('keydown', jump);  