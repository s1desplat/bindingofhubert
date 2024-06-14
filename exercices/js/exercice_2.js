function addNewBadge(badgeName, lineClass) {
    const newBadge = document.createElement("div");
    newBadge.classList.add('badge');
    newBadge.classList.add(badgeName);
    document.querySelector(lineClass).append(newBadge);
}

function generateNextButton(href) {
    const nextButton = document.createElement("a");
    nextButton.classList.add(...["btn", "suivant"]);
    nextButton.setAttribute("href", href);
    nextButton.innerHTML = "Suivant &rarr;"

    document.querySelector('nav').appendChild(nextButton);

    addNewBadge('badge-2', '.ligne-1');

    console.log(nextButton);
}

function exerciceSuccess() {
    generateNextButton('exercice_3.html');

    const successText = document.querySelector('.exercice section p');
    successText.innerHTML = "<i>Félicitations ! Tu as aidé Hubert le niglo à retrouvé sont crayon rouge du css !<br><br> Clique sur le bouton 'Suivant' afin de poursuivre ton aventure et retrouver plus d'équipement.<br><br><img class='illustration' src='../img/hubert_redsquare.jpeg'></img>"
}

function exerciceFailure(error, id) {
    const errors = document.getElementById(id);
    errors.innerHTML = error;
    errors.classList.remove('caché');
}

document.addEventListener("DOMContentLoaded", (e) => {
    const btn1 = document.getElementById('btn1');
    btn1.onclick = function () {
        const style = window.getComputedStyle(btn1);
        console.log(style.display);
        if (style.display === 'block') {
            exerciceFailure("Il semblerait que le bouton soit visible, mais il n'est pas centré, essayez de le placé au centre !", 'ie1');
        } else if (style.display === 'none') { 
            exerciceFailure("Il semblerait que le bouton n'est toujours pas visible, essayez autre chose !", "ie1")
        } else if (style.display === 'inline-block') {
            document.getElementById("section-2").classList.remove("caché");
            document.getElementById('i1').classList.remove("caché");
        }
    }

    document.getElementById('btn2').onclick = function () {
        document.getElementById('i2').classList.remove('caché');
        exerciceSuccess();
    }

})