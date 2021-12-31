'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const dsplyMessage = function(message){document.querySelector('.message').textContent = message;}; 

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        dsplyMessage('No number!');
    }else if(guess === secretNum){
        dsplyMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = 'rgb(72 157 21)';
        document.querySelector('.number').style.width = '16rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guess !== secretNum){
        if(score > 1){
            dsplyMessage(guess > secretNum ? 'Too high!' : 'Too low!');  
        score = score-1;  
        document.querySelector('.score').textContent = score;
        }else{
            dsplyMessage('You lost the game!');
        }          
    }
});
document.querySelector('.tryAgain').addEventListener('click', function(){
    score = 20;
    secretNum = Math.trunc(Math.random()*20)+1;
    dsplyMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(84 77 84)';
    document.querySelector('.number').style.width = '8rem';
})