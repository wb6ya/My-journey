const prefeed = document.querySelector('.feed')
const feed = document.querySelector('.feed p')
const score = document.querySelector('.game-score')
const scoreWin = document.querySelector('.win')
const scoreLose = document.querySelector('.Lose')
const scoreTie = document.querySelector('.tie')
let aiChoice = '';
let result = '';

let gameScore = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

update()

function reset() {
    gameScore.wins = 0;
    gameScore.lose = 0;
    gameScore.tie = 0
    prefeed.removeAttribute("class","game-feed")
    feed.innerHTML = ` `
    score.innerHTML = `<h1>Rochambeau</h1>`
    update()
}

function update() {
    scoreWin.innerHTML =`Win's : ${gameScore.wins}`
    scoreLose.innerHTML =`Loses's : ${gameScore.lose}`
    scoreTie.innerHTML =`Tie's : ${gameScore.tie}`
    localStorage.setItem('score',JSON.stringify(gameScore))
    
}

function game(choice) {
    let ai = Math.random();
    if (ai < 1/3) {
        aiChoice = '✊'
    } else if (ai > 1/3 && ai < 2/3) {
        aiChoice = '✋'
    } else if (ai > 2/3) {
        aiChoice = '✌️'
    }

    if (choice === '✊') {
        if (aiChoice === '✊') {
            result = 'Tie'
            gameScore.tie += 1;
        } else if (aiChoice === '✋') {
            result = 'You lost'
            gameScore.lose += 1
        } else if (aiChoice === '✌️') {
            result = 'You Win'
            gameScore.wins += 1
        }
    } else if (choice === '✋') {
        if (aiChoice === '✋') {
            result = 'Tie'
            gameScore.tie += 1;
        } else if (aiChoice === '✌️') {
            result = 'You lost'
            gameScore.lose += 1
        } else if (aiChoice === '✊') {
            result = 'You Win'
            gameScore.wins += 1
        }
    } else if (choice === '✌️') {
        if (aiChoice === '✌️') {
            result = 'Tie'
            gameScore.tie += 1;
        } else if (aiChoice === '✊') {
            result = 'You lost'
            gameScore.lose += 1
        } else if (aiChoice === '✋') {
            result = 'You Win'
            gameScore.wins += 1
        }
    }

    prefeed.setAttribute("class","game-feed")
    feed.innerHTML = `<pre>You Pickd ${choice}</pre><pre>Ai picked ${aiChoice}</pre>`
    score.innerHTML = `<h1>${result}</h1>`
    update();
}