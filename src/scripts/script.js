'use strict';

class auxiliaryMethods {

  constructor() {
    const $leftSideAnswer = document.querySelector('.leftside-div');
    const $centerSideAnswer = document.querySelector('.centerside-div');
    const $rightSideAnswer = document.querySelector('.rightside-div');
  }

  redirect(elementName, to, timeOut) {
    const element = document.querySelector(elementName);
    element.addEventListener('click',

      setTimeout(() => {
        window.location.href = to;
      }, timeOut),

      false);
  }

  handleAnswer(selected, correctOne) { // left, center, right
    const hitTheRightOne = selected === correctOne;

    const answers = ['center', 'right'];
    delete answers[correctOne];

    answer.forEach(element => {
      $rightside_div.classList.replace(element + 'side-div', element + 'side-div-js-no-display');
    });

    redirect()
  }

}
