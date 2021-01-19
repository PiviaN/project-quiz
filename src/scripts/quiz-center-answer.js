(function() {
    'use strict';

    $leftside_div.addEventListener('click', handleIncorrectAnswer, false);
    $centerside_div.addEventListener('click', handleCorrectAnswer, false);
    $rightside_div.addEventListener('click', handleIncorrectAnswer2, false);

    function handleCorrectAnswer() {
        $centerside_div.classList.replace('centerside-div', 'centerside-div-js' );
        $rightside_div.classList.replace('rightside-div', 'rightside-div-js-no-display');
        $leftside_div.classList.replace('leftside-div', 'leftside-div-js-no-display');
        counter += 1;
        setTimeout(redirectToCorrectPage, 1000);
    }


    function handleIncorrectAnswer() {
        $centerside_div.classList.replace('centerside-div', 'centerside-div-js' );
        $rightside_div.classList.replace('rightside-div', 'rightside-div-js-no-display');
        $leftside_div.classList.replace('leftside-div', 'leftside-div-js-no-display');
        setTimeout(redirectToIncorrectPage, 2000);
    }

    function handleIncorrectAnswer2() {
        $centerside_div.classList.replace('centerside-div', 'centerside-div-js' );
        $rightside_div.classList.replace('rightside-div', 'rightside-div-js-no-display');
        $leftside_div.classList.replace('leftside-div', 'leftside-div-js-no-display');
        setTimeout(redirectToIncorrectPage, 2000);
    }

})()