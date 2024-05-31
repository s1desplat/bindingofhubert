function generateNextButton(href) {
    const nextButton = document.createElement("a");
    nextButton.classList.add("btn");
    nextButton.classList.add("suivant");
    nextButton.setAttribute("href", href);
    nextButton.innerHTML = "Suivant &rarr;"

    document.querySelector('nav').appendChild(nextButton);
}

function exerciceSuccess() {
    generateNextButton('exercice_6.html');

    const successText = document.querySelector('.exercice section p');
    successText.innerHTML = "Félicitations ! Pédro est impressionné par votre talent d'artiste.<br><br>Cependant il n'a pas l'air beaucoup plus calme qu'avant. Il faut croire que le rouge n'est pas une couleur qui calme."
}

function exerciceFailure(error) {
    const errorText = document.querySelector('.exercice section p');
    errorText.innerHTML = error;
}

document.addEventListener("DOMContentLoaded", (e) => {
    const redSquare = document.querySelector('.carrerougedepedro');
    if (redSquare) {
        const redSquareStyle = window.getComputedStyle(redSquare);
        let redSquareResult = {};
        redSquareResult.width = redSquareStyle.getPropertyValue('width') === "70px" ? true : false;
        redSquareResult.height = redSquareStyle.getPropertyValue('height') === "70px" ? true : false;
        redSquareResult.background = redSquareStyle.getPropertyValue('background-color') === "rgb(255, 0, 0)" ? true : false;
        redSquareResult.margin = redSquareStyle.getPropertyValue('margin') === "auto" ? true : false;
    
        if (redSquareResult.width &&
            redSquareResult.height &&
            redSquareResult.background &&
            redSquareResult.margin) {
            exerciceSuccess();
        } else {
            let errorInnerHTML = ""
            if (!(redSquareResult.width)) {
                errorInnerHTML += "Pédro est surpris par votre manque de finesse sur la largeur de votre carré. Il avait pourtant bien dit qu'il devait faire 70 pixels de haut.<br><br>";
            }
            if (!(redSquareResult.height)) {
                errorInnerHTML += "Pédro ne sait plus ou donner de la tête. Votre carré ne fait clairement pas 70 pixels de haut !<br><br>";
            }
            if (!(redSquareResult.background)) {
                errorInnerHTML += "Pédro sort des lunettes de sa poche pour s'assurer que sa vue ne le trompe pas, mais il n'avait pas tort. Votre carré n'est clairement pas rouge !<br><br>";
            }
            if (!(redSquareResult.margin)) {
                errorInnerHTML += "Pédro sort sa règle pour mesurer l'alignement de votre carré et la sentence est irrévocable. Votre carré n'est pas correctement aligné ! (Conseil : Utilisez l'attribut \"margin\")<br><br>";
            }
            exerciceFailure(errorInnerHTML);
        }
    }
});