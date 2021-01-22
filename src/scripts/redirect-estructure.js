class Redirect {
    structure = [
        {
            rightAnswerPage: {
                correctTopMessage: "Você mais uma vez mostrou que é um gamer de verdade.",
                cssLink: "link rel='stylesheet' href='/src/styles/right-answer.css'"
            }
        }, {
            wrongAnswerPage: {
                incorrectTopMessage: "Não foi dessa vez, Player!",
                cssLink: "link rel='stylesheet' href='/src/styles/wrong-answer.css'"
            }
        },
        {
            resultTarget: {
                title: "Gamer Testing: Result Page",
                topResultMessage: "Parabéns! Você terminou o Quiz.",
                bottomResultMessage: "Sua pontuação foi /number/ de 10. Você é um(a) /verdadeira lenda/",
                cssLink: "link rel='stylesheet' href='/src/styles/zresult-page.css'"
            }
        }
    ]
}
