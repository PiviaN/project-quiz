'use strict';

class auxiliaryMethods {

  constructor() {
    // var counter = 0;
    const $leftSideAnswer = document.querySelector('.leftside-div');
    const $centerSideAnswer = document.querySelector('.centerside-div');
    const $rightSideAnswer = document.querySelector('.rightside-div');
  }
    redirect (correctPage, IncorrectPage) {
      if (correctPage) 
        window.location.href = "right-answer.html"
    if (incorrectPage) 
        window.location.href = "wrong-answer.html"
    } 

  /*saveTheChosenValues(selected, correctOne) {
    const theRightOne = selected === correctOne;
    const theWrongOne1 = selected !== correctOne; (se não é o certo, é qualquer um dos dois)
    const theWrongOne2 = selected !== correctOne && theWrongOne1; (aquele que sobrou)
    const answers = [theRightOne, theWrongOne1, theWrongOne2];
    const correctOne = answers.shift();
    const firstIncorrect = answers.slice(1, -1);
    const lastIncorrect = answers.pop();
  } */

  /*correctClassChange() {
    `$${correctOne}SideAnswer.classList.replace(elementSide'${correctOne}side-div', '${correctOne}side-div-js' );`
      `$${firstIncorrect}SideAnswer.classList.replace(elementSide'${firstIncorrect}side-div', '${firstIncorrect}side-div-js-no-display' );`
      `$${lastIncorrect}SideAnswer.classList.replace(elementSide'${lastIncorrect}side-div', '${lastIncorrect}side-div-js-no-display' );`
  } */

  /*incorrectClassChange() {
    `$${correctOne}SideAnswer.classList.replace(elementSide'${correctOne}side-div', '${correctOne}side-div-js' );`
        `$${firstIncorrect}SideAnswer.classList.replace(elementSide'${firstIncorrect}side-div', '${firstIncorrect}side-div-js-no-display' );`
        `$${lastIncorrect}SideAnswer.classList.replace(elementSide'${lastIncorrect}side-div', '${lastIncorrect}side-div-js-no-display' );`
  }*/

  /* então a função final ficaria assim: 
      function handleAnswers() {
    callback saveTheChosenValues(selected, correctOne) 
    if (theRightOne)
        correctClassChange()
      setTimeout(redirect(correctPage), 1000);
    if (theWrongOne1 || theWrongOne2)
        incorrectClassChange();
      setTimeout(redirect(incorrectPage), 2000);
    }
  */

  // função total
  handleAnswer(selected, correctOne) { // left, center, right
    const theRightOne = selected === correctOne;
    const theWrongOne1 = selected !== correctOne; // (se não é o certo, é qualquer um dos dois)
    const theWrongOne2 = selected !== correctOne && theWrongOne1; // (aquele que sobrou)

    const answers = [theRightOne, theWrongOne1, theWrongOne2]; // um array com todas as posições possíveis

    const correctOne = answers.shift(); // pega o primeiro elemento de answers (theRightOne)
    const firstIncorrect = answers.slice(1, -1); // pega o segundo elemento de answers (theWrongOne1)
    const lastIncorrect = answers.pop(); // pega o terceiro elemento de answers (theWrongOne2)

    // até aqui foi só declaração de variável >> saveTheChosenValues() será executada
    if (theRightOne) {
      //correctClassChange() será executado para encapsulação de código
      `$${correctOne}SideAnswer.classList.replace(elementSide'${correctOne}side-div', '${correctOne}side-div-js' );`
        `$${firstIncorrect}SideAnswer.classList.replace(elementSide'${firstIncorrect}side-div', '${firstIncorrect}side-div-js-no-display' );`
        `$${lastIncorrect}SideAnswer.classList.replace(elementSide'${lastIncorrect}side-div', '${lastIncorrect}side-div-js-no-display' );`
      setTimeout(redirect(correctPage), 1000);
    } if (theWrongOne1 || theWrongOne2) {
      //incorrectClassChange() será executada para encapsulação de código novamente
      `$${correctOne}SideAnswer.classList.replace(elementSide'${correctOne}side-div', '${correctOne}side-div-js' );`
        `$${firstIncorrect}SideAnswer.classList.replace(elementSide'${firstIncorrect}side-div', '${firstIncorrect}side-div-js-no-display' );`
        `$${lastIncorrect}SideAnswer.classList.replace(elementSide'${lastIncorrect}side-div', '${lastIncorrect}side-div-js-no-display' );`
      setTimeout(redirect(incorrectPage), 2000);
    }
  }

}
