(function() {
    'use strict';

    $leftside_div.addEventListener('click', handleIncorrectAnswer, false);
    $centerside_div.addEventListener('click', handleIncorrectAnswer2, false);
    $rightside_div.addEventListener('click', handleCorrectAnswer, false);

    function handleCorrectAnswer() {
        $rightside_div.classList.replace('rightside-div', 'rightside-div-js' );
        $centerside_div.classList.replace('centerside-div', 'centerside-div-js-no-display');
        $leftside_div.classList.replace('leftside-div', 'leftside-div-js-no-display');
        counter += 1;
        setTimeout(redirectToCorrectPage, 1000);
    }


    function handleIncorrectAnswer() {
        $rightside_div.classList.replace('rightside-div', 'rightside-div-js' );
        $centerside_div.classList.replace('centerside-div', 'centerside-div-js-no-display');
        $leftside_div.classList.replace('leftside-div', 'leftside-div-js-no-display');
        setTimeout(redirectToIncorrectPage, 2000);
    }

    function handleIncorrectAnswer2() {
        $rightside_div.classList.replace('rightside-div', 'rightside-div-js' );
        $centerside_div.classList.replace('centerside-div', 'centerside-div-js-no-display');
        $leftside_div.classList.replace('leftside-div', 'leftside-div-js-no-display');
        setTimeout(redirectToIncorrectPage, 2000);
    }

})()