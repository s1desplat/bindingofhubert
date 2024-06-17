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
}

function exerciceSuccess() {
    generateNextButton('exercice_2.html');
    addNewBadge('badge-1', '.ligne-1');

    const successText = document.querySelector('.exercice section p');
    successText.innerHTML = "<i>Félicitations ! Tu as aidé Hubert le Niglo à retrouver sa première pièce d'équipement ! (il est quand même bien long ce rouleau à pâtisserie..)<br><br>Ce n'est pourtant que le début d'une longue aventure qui commence bien !<br><br>Clique sur le bouton 'Suivant' afin de passer à l'épreuve suivante !<br><br><img class='illustration' src='../img/hubert_rouleau.webp'></img>"
}

function exerciceButtonSuccess() {
    const section_3 = document.getElementById('section-3');
    const show = document.getElementById('i2');
    section_3.classList.remove('caché');
    show.classList.remove('caché');
    const titres = section_3.querySelectorAll('button, input, select');

    if (titres.length == 1) {
        titres.forEach(titre => {
            if (titre.tagName === 'BUTTON') {
                document.getElementById('btn3').onclick = function () {
                    exerciceSuccess();
                }
            } else if (titre.tagName === 'INPUT') {
                exerciceFailure("Ceci est un champ input, tu peux y rentrer du texte, mais ce n'est pas ce qu'on recherche, essayez autre chose !", 'ie3');
            } else if (titre.tagName === 'SELECT') {
                exerciceFailure("Ceci est un champ select, actuellement vide tu peux l'utiliser pour faire une selection d'option fixe, mais ce n'est pas ce qu'on recherche, essayez autre chose !", 'ie3')
            }
        });
    } else if (titres.length > 1) {
        exerciceFailure("Je vois ce que vous avez essayé de faire ici ! Essayez avec une seule proposition !", "ie3");
    }
}

function exerciceLinkSuccess() {
    const show = document.getElementById('i1');
    const section_2 = document.getElementById('section-2');
    show.classList.remove('caché');
    section_2.classList.remove('caché');
    const titres = section_2.querySelectorAll('a, b, i .trou');

    if (titres.length == 1) {
        titres.forEach(titre => {
            if (titre.tagName === 'A') {
                exerciceButtonSuccess();
            } else if (titre.tagName === 'B') {
                exerciceFailure("Et non ceci est un texte en gras, essayez autre chose !", "ie2");
            } else if (titre.tagName === 'I') {
                exerciceFailure("Et non ceci est un texte en italique, essayer autre chose !", "ie2");
            }
        });
    } else if (titres.length > 1){
        exerciceFailure("Je vois ce que vous avez essayé de faire ici ! Essayez avec une seule proposition !", "ie2");
    }
}

function exerciceFailure(error, id) {
    const errors = document.getElementById(id);
    errors.innerHTML = error;
    errors.classList.remove('caché');
}

document.addEventListener("DOMContentLoaded", (e) => {
    const exo_1 = document.getElementById('section-1');
    const titres = exo_1.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (titres.length === 1) {
        titres.forEach(titre => {
            if (titre.tagName === 'H2') {
                exerciceLinkSuccess();
            } else if (titre.tagName === 'H1') {
                exerciceFailure("Le titre est trop grand Hubert trouve le titre vertigineux, essayez autre chose !", 'ie1');
            } else if (titre.tagName === 'H3') {
                exerciceFailure("Le titre est trop petit Hubert à oublié ses lunettes il ne pourras pas le lire, essayez autre chose !", 'ie1');
            }
        });
    } else if (titres.length > 1) {
        exerciceFailure("Je vois ce que vous avez essayé de faire ici ! Essayez avec une seule proposition !", "ie1");
    }
})