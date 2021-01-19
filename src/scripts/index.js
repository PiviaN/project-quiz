(function() {
    'use strict';

    var $button_x = document.querySelector('.button_x');

    $button_x.addEventListener('click', redirectPage, false);

    function redirectPage() {
        setTimeout(function() {
            window.location.href = "src/question/quiz1.html";
        }, 310)
    }

})()