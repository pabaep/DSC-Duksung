const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

function randHole(holes) {
    const randIndex = Math.floor(Math.random() * holes.length)
    const hole = holes[randIndex]
    if(hole===lastHole){
        return randHole(holes)
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randTime(500,1000)
    const hole = randHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        if(!timeUp){
            peep()
        }
    }, time)
}

function startGame() {
    scoreBoard.textContent = 0
    score = 0
    timeUp = false
    peep()

    setTimeout(() => timeUp = true, 10000) //20초 지나면 게임 끝
}

function bonk(e) {
    if(!e.isTrusted) return;

    this.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
