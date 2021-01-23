'use strict';

export default class Auxiliary {
  redirect(path, sleep = 2000) {
    setTimeout(() => {
      window.location.href = path;
    }, sleep);
  }

  get queryParams() {
    let params = new URLSearchParams(window.location.href.split('?')[1])

    const result = {}
    for (const [key, value] of params.entries()) {
      result[key] = value
    }
    return result
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