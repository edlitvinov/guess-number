'use strict';

const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
    if (tries >=5) return alert('конец игры');
    if (num === secretNum) {
        alert('Вы угадали число!');
        tries = 5;
    } else {
        alert('неверно!', 'попробуйте ещё раз!');
        tries++;
    }
}