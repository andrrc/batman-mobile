const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score p');
const board = document.querySelector('.game-board');
const dirt = document.querySelector('.section_dirt')
const body = document.querySelector('body')

let counter = 0;
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    },600)
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioBottom = +window.getComputedStyle(mario).left.replace('px', '');
    if (pipePosition <= 162 && pipePosition < 32 && marioPosition < 41 ) {

        pipe.style.animation = 'none'
        pipe.style.left = `${marioBottom}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'images/batman-game-over.gif';
        mario.style.width = '5rem'
        mario.style.marginLeft = '-50px'
        mario.style.marginBottom = '-1px'



        clearInterval(loop);
        clearInterval(scoring)

    }
    
    
    
}, 10)
const scoring = setInterval(() => {
    counter++
    score.innerHTML = counter
    if (counter >= 10) {
        board.style.background ='linear-gradient(rgb(133, 38, 9), rgb(202, 66, 25) )'
        dirt.style.background = 'gray'
        board.style.borderBottom = '20px solid dimgrey'
        pipe.style.animation = 'pipe-animation 1s infinite linear'
        body.style.background = 'gray'
    }

},1500);
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);