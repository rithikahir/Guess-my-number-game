'use strict';
/*console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Predict The Number';
//document.querySelector('.guess').value = 100;
if (document.querySelector('.guess').value >= 100) {
    document.querySelector('.message').textContent = 'The guess is correct'
} else {
    document.querySelector('.message').textContent = 'The guess is wrong'
}



document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (guess <= 100) {
        document.querySelector('.message').textContent = 'Correct Number';
    } else if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess >= 100) {
        document.querySelector('.message').textContent = 'Wrong Number';
    };


});*/

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'NO Number';
    } else if (guess === Secretnumber) {
        document.querySelector('.message').textContent = 'Correct Guess ✔';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = guess;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > Secretnumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'T0 High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < Secretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'T0 Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    Secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';



})