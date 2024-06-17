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

    addNewBadge('badge-3', '.ligne-1');
}

function exerciceSuccess() {
    document.getElementById('i2').classList.remove('caché');
    document.getElementById('ie2').classList.add('caché');
    generateNextButton('exercice_4.html');

    const successText = document.querySelector('.exercice section p');
    successText.innerHTML = "<i>Félicitations ! Hubert à récupéré tout son équipement et même un snack !<br><br> On peut maintenant partir à l'aventure sans aucun souci !!<br><br><img class='illustration' src='../img/hubert_snack.webp'></img>"
}

function exerciceFailure(error, id) {
    const errors = document.getElementById(id);
    errors.innerHTML = error;
    errors.classList.remove('caché');
}

function section2() {
    document.getElementById('i1').classList.remove('caché');
    document.getElementById('ie1').classList.add('caché');
    const select = document.getElementById("select");
    const datalist = document.getElementById("datalist");
    const btn2 = document.getElementById("partie2");
    let style;

    if (select != null) {
        style = window.getComputedStyle(select);
    }
    btn2.onclick = function() {
        if (select != null) {
            if (select.value === "Hubert" && style.borderRadius != "3px") {
                exerciceSuccess();
            } else if (style.borderRadius == "3px") {
                exerciceFailure("Ici la selection s'affiche, mais on ne peut pas lire ni voir ce qu'on a sélectionné. Essayez autre chose !", "ie2");
            } else if (style.display == "none") {
                exerciceFailure("Comme dans l'exercice 2, le display empêche de pouvoir voir le selecteur. Essayez autre chose !", "ie2");
            } else {
                exerciceFailure("Il semblerait que vous n'ayez pas selectionné la bonne valeur. Essayez autre chose !", "ie2");
            }
        } else if (datalist != null) {
            exerciceFailure("Vous avez choisi la datalist, celle-ci comme son nom l'indique permet d'afficher une liste de data et non de pouvoir sélectionner quelque chose, essayez autre chose !", "ie2");
        } else {
            exerciceFailure("Hubert ne sait pas ce qu'il s'est passé, avec-vous décommenté l'une des deux options de l'HTML ?", "ie2");
        }
    }
}


document.addEventListener("DOMContentLoaded", (e) => {
    const input = document.getElementById('input');
    const textarea = document.getElementById('text');
    const samp = document.getElementById('samp');
    const btn1 = document.getElementById('partie1');
    let input_style;
    if (input != null) {
        input_style = window.getComputedStyle(input);
    }
    btn1.onclick = function () {
        if (input != null) {
            if (input.value === "Hubert" && input_style.fontSize != "0px" && input_style.backgroundColor === "rgb(240, 240, 240)") {
                const section_2 = document.getElementById('section-2');
                section_2.classList.remove('caché');
                section2();
            } else if (input_style.color === input_style.backgroundColor) {
                exerciceFailure("On ne peut même pas lire ce qui est écrit ! Essayez autre chose !", "ie1");
            } else if (input.value === "Hubert" && input_style.fontSize != "0px" && input_style.backgroundColor != "#rgb(240, 240, 240") {
                exerciceFailure("On peut lire le texte et voir la boîte correctement mais je pense qu'on peut faire mieux.", "ie1");
            } else {
                exerciceFailure("Il semblerait que tu n'as pas rentré la bonne valeur !", 'ie1');
            }
        } else if (textarea != null) {
            exerciceFailure("Ceci est une zone de texte, ça fonctionne un peu comme l'outil qu'on cherche mais ce n'est pas celui là.", "ie1");
        } else if (samp != null) {
            exerciceFailure("Ceci est une zone d'exemple, ou une zone qui permet de faire des citations par exemple. Essayez autre chose !", "ie1");
        } else {
            exerciceFailure("Alors là, même Hubert ne sait pas ce qui ne va pas !", "ie1");
        }
    }    
})