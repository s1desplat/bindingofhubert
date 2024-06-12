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
    generateNextButton('exercice_7.html');
    addNewBadge('badge-6', '.ligne-2');

    const successText = document.querySelector('.exercice section p');
    successText.innerHTML = "<i>Félicitations ! Pédro hume une divine odeur de gras et de rhubarbe qui l'attire vers vos \"\"cookies\"\".<br><br>Après s'être goinfré de toute la fournée, il semble complètement repu et s'allonge sur le sol dans le coin de la pièce. Vous vous assurez tout de même qu'il respire encore avant de continuer votre quête.<i><br><br><br><img class='illustration' src='../img/pedro_cookies.jpeg'></img>"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function areCheckboxesAllChecked(checkboxes) {
    let ingredientList =  {
        "rhubarbe": false,
        "farine": false,
        "sucre": false,
        "oeuf": false,
        "beurre": false
    };

    checkboxes.forEach((checkbox) => {
        if (checkbox.name in ingredientList && checkbox.checked) {
            ingredientList[checkbox.name] = true;
        }
    });

    const keys = Object.keys(ingredientList).filter(k=>ingredientList[k]===false);
    if (keys.length) {
        const randomGrognements = ['Grrnnrnr', 'Gruuiiik', 'Scrogneugneu', 'Kreooog', 'Squeeeeee'];
        let errorInnerHTML = "<i>Pédro vous épie au loin et remarque que votre recette n'est pas complète, il marmonne dans sa moustache :<br><br>"
        keys.forEach((key) => {
            errorInnerHTML += "\"" + randomGrognements[getRandomInt(5)] + ", t'as oublié de cocher la case " + key + " d'abord.\"<br><br>";
        });
        errorInnerHTML += "</i>Si vous n'avez pas de case à cocher pour vos ingrédients, n'hésitez pas à recopier celle qui existe déjà dans l'HTML ! (en modifiant l\'attribut \"name\" bien entendu)"
        document.querySelector('section p span').innerHTML = errorInnerHTML;
        return false;
    }
    return true;
}

function checkIfBeurreIsReallyBigAndBold() {
    const beurreDiv = document.querySelector('li#beurre span');
    if (beurreDiv) {
        const beurreDivStyle = window.getComputedStyle(beurreDiv);
        let beurreDivResult = {};
        beurreDivResult.fontWeight = parseInt(beurreDivStyle.getPropertyValue('font-weight'));
        beurreDivResult.fontSize = parseInt(beurreDivStyle.getPropertyValue('font-size'));
        console.log(beurreDivStyle.getPropertyValue('font-weight'), beurreDivStyle.getPropertyValue('font-size'))

        if (beurreDivResult.fontWeight >= 700 && beurreDivResult.fontSize >= 30) {
            return true;
        } else {
            let errorInnerHTML = "";
            if (beurreDivResult.fontWeight < 700) {
                errorInnerHTML += "Votre beurre ne semble pas assez gras. N'hésitez pas à le faire épaissir (indice : font-weight)<br><br>"
            }
            if (beurreDivResult.fontSize < 30) {
                errorInnerHTML += "Votre beurre ne semble pas assez grand. Faites le grandir pour qu'on le voie bien dans la recette ! (indice: font-size)"
            }
            document.querySelector('section p span').innerHTML = errorInnerHTML;
            return false;
        }
    } else {
        document.querySelector('section p span').innerHTML = "Vous avez bien crée une entrée de liste pour votre beurre, mais il n'a pas de nom...";
        return false;
    }
}

function checkIfBeurreExists() {
    const beurreDiv = document.querySelector('ul li#beurre');
    if (beurreDiv) {
        document.querySelector('section p span').innerHTML = "Bravo tu as rajouté le beurre ! Maintenant il faut cocher les aliments pour compléter la recette (indice : input de type checkbox) ";
        return true;
    }
    return false;
}

document.addEventListener("DOMContentLoaded", (e) => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    if (checkIfBeurreExists()) {
        if (checkIfBeurreIsReallyBigAndBold()) {
            if (areCheckboxesAllChecked(checkboxes)) {
                exerciceSuccess();
            }
        }
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const recipeText = checkbox.parentElement.querySelector('span');
            checkbox.checked ? recipeText.classList.add('ok') : recipeText.classList.remove('ok');

            if (checkIfBeurreExists()) {
                if (checkIfBeurreIsReallyBigAndBold()) {
                    if (areCheckboxesAllChecked(checkboxes)) {
                        exerciceSuccess();
                    }
                }
            }
        });
    });
});
