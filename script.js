'use strict';

//selecting elements
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const btnNew = document.querySelector(".btn--new")
const dice = document.querySelector(".dice")
const currentScore0 = document.getElementById("current--0")
const currentScore1 = document.getElementById("current--1")
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')

let score,currentScore,activePlayer,playing

function newGame(){
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
  
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  };
  newGame();

function switchPlayer(){
    currentScore =0;
    document.getElementById(`current--${activePlayer}`).textContent=0
    activePlayer= activePlayer===0? 1 : 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}


btnRoll.addEventListener('click',function () {
    if(playing){
    dice.classList.remove("hidden")
    const diceVal = Math.trunc(Math.random()*6)+1
    dice.src= `dice-${diceVal}.png`
    if (diceVal !== 1) {
        // add to current score
        currentScore += diceVal
        document.getElementById(`current--${activePlayer}`).textContent= currentScore
    }else{
        //switch player
        switchPlayer()
    }
    }
})

btnHold.addEventListener('click',function(){
    if(playing){
    score[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer] 
    if(score[activePlayer]>=20){
        dice.classList.add("hidden");
        document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');   
        playing = false
    }else{
        switchPlayer()
    }
    }
})


  

btnNew.addEventListener('click',newGame)