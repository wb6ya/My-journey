let round = 0
let player = ''
let scoreTitle = 'X';

const btn1 = document.querySelector("#box-1");
const btn2 = document.querySelector("#box-2");
const btn3 = document.querySelector("#box-3");
const btn4 = document.querySelector("#box-4");
const btn5 = document.querySelector("#box-5");
const btn6 = document.querySelector("#box-6");
const btn7 = document.querySelector("#box-7");
const btn8 = document.querySelector("#box-8");
const btn9 = document.querySelector("#box-9");
const title = document.querySelector(".turn");

const btn = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9]

let draw = 0;

function start(place) {
    if (round === 0) {
        player = 'O';
        round++;
        scoreTitle = 'X'
    } else {
        player = 'X';
        round--;
        scoreTitle = 'O'
    }
    btn[place].innerHTML = player;
    btn[place].disabled = true;
    btn[place].classList.remove("effect")
    check()
}

function end(a,b,c) {
    title.innerHTML = `${btn[a].innerHTML}'s win`
    btn[a].style.background = "var(--clr-xo-bg)";
    btn[a].style.color = "var(--clr-xo-text)";
    btn[b].style.background = "var(--clr-xo-bg)";
    btn[b].style.color = "var(--clr-xo-text)";
    btn[c].style.background = "var(--clr-xo-bg)";
    btn[c].style.color = "var(--clr-xo-text)"; 
}

function check() {
    if (btn[0].innerHTML === btn[1].innerHTML && btn[1].innerHTML === btn[2].innerHTML && btn[1].innerHTML != '') {
        end(0,1,2)
        reset()
    } else if (btn[3].innerHTML === btn[4].innerHTML && btn[4].innerHTML === btn[5].innerHTML && btn[4].innerHTML != '') {
        end(3,4,5)
        reset()
    } else if (btn[6].innerHTML === btn[7].innerHTML && btn[7].innerHTML === btn[8].innerHTML && btn[7].innerHTML != '') {
        end(6,7,8)
        reset()
    } else if (btn[0].innerHTML === btn[3].innerHTML && btn[3].innerHTML === btn[6].innerHTML && btn[3].innerHTML != '') {
        end(0,3,6)
        reset()
    } else if (btn[1].innerHTML === btn[4].innerHTML && btn[4].innerHTML === btn[7].innerHTML && btn[4].innerHTML != '') {
        end(1,4,7)
        reset()
    } else if (btn[2].innerHTML === btn[5].innerHTML && btn[5].innerHTML === btn[8].innerHTML && btn[5].innerHTML != '') {
        end(2,5,8)
        reset()  
    } else if (btn[0].innerHTML === btn[4].innerHTML && btn[4].innerHTML === btn[8].innerHTML && btn[4].innerHTML != '') {
        end(0,4,8)
        reset()
    } else if (btn[2].innerHTML === btn[4].innerHTML && btn[4].innerHTML === btn[6].innerHTML && btn[4].innerHTML != '') {
        end(2,4,6)
        reset()
    } else{
        if (draw === 8) {
            for(let a of btn){
                a.style.background = "black";
                a.style.color = "var(--clr-xo-text)";} 
                title.innerHTML = `Draw`
                reset()
        }else {
            draw++
            title.innerHTML = `${scoreTitle}'s Turn`
        }
    }
}

function reset(){
    for(let a of btn){
        a.disabled = true;
        a.classList.remove("effect")
        console.log('removed');
        
    }
     
    setTimeout(function(){
        for(let a of btn){
            location.reload()
        } 
    },1500);
}
