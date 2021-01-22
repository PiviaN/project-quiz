'use strict';

class Auxiliary {
    constructor($buttonX, $leftDiv, $centerDiv, $rightDiv) {
        this.$buttonX = document.querySelector('.button_x');
        this.$leftDiv = document.querySelector('.leftside-div');
        this.$centerDiv = document.querySelector('.centerside-div');
        this.$rightDiv = document.querySelector('.rightside-div');
    }
    
    redirect(firstPage, correctPage, incorrectPage) {
        firstPage = setTimeout(() => {
            window.location.href = "src/question/quiz1.html";
        }, 310);
        correctPage = setTimeout(() => {
            window.location.href = "right-answer.html";
        }, 2000);
        incorrectPage = setTimeout(() => {
            window.location.href = "wrong-answer.html";
        }, 2000);
    }

    handleLeftAnswer() {
        $leftDiv.classList.replace('leftside-div', 'leftside-div-js');
        $centerDiv.classList.replace('centerside-div', 'centerside-div-js-no-display');
        $rightDiv.classList.replace('rightside-div', 'rightside-div-js-no-display');
    }

    handleMidAnswer() {
        $centerDiv.classList.replace('centerside-div', 'centerside-div-js');
        $rightDiv.classList.replace('rightside-div', 'rightside-div-js-no-display');
        $leftDiv.classList.replace('leftside-div', 'leftside-div-js-no-display');
    }

    handleRightAnswer() {
        $rightDiv.classList.replace('rightside-div', 'rightside-div-js');
        $centerDiv.classList.replace('centerside-div', 'centerside-div-js-no-display');
        $leftDiv.classList.replace('leftside-div', 'leftside-div-js-no-display');
    }
}
