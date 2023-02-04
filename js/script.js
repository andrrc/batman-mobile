
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score p');
const board = document.querySelector('.game-board');
const dirt = document.querySelector('.section_dirt')
const body = document.querySelector('body')


const audio = document.getElementById("myAudio");
  audio.autoplay = true;
  audio.load();

let counter = 0;
const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    },1000)
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const onHit = pipePosition < 0 && marioPosition < 40;
    const onHitAIR = pipePosition <= 112 && marioPosition < 40;

    if (onHit || onHitAIR) {

    
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'images/batman-game-over.gif';
        mario.style.width = '90px'
        mario.style.marginLeft = '50px'
        mario.style.marginBottom = '-1px'

        
            var botao = document.createElement("button");
        botao.innerHTML = "Renascer";
        botao.onclick = function() {
        location.reload();
        };
        botao.classList.add("botao-atualizar");
        document.body.appendChild(botao);
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

},2500);
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);

