function generateNextButton(href) {
    const nextButton = document.createElement("a");
    nextButton.classList.add("btn");
    nextButton.classList.add("suivant");
    nextButton.setAttribute("href", href);
    nextButton.innerHTML = "Suivant &rarr;"

    document.querySelector('nav').appendChild(nextButton);
}

function exerciceSuccess() {
    generateNextButton('exercice_7.html');

    const successText = document.querySelector('.exercice section p');
    successText.innerHTML = "Félicitations ! Pédro hume une divine odeur de gras et de rhubarbe qui l'attire vers vos \"\"cookies\"\".<br><br>Il semble complètement repu (il ne bouge plus ?)."
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
        let errorInnerHTML = "<br>Pédro vous épie au loin et remarque que votre recette n'est pas complète, il marmonne dans sa moustache :<br><br>"
        keys.forEach((key) => {
            errorInnerHTML += "\"" + randomGrognements[getRandomInt(5)] + ", t'as oublié de cocher la case " + key + " d'abord\"<br><br>";
        });
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
            let errorInnerHTML = "<br>";
            if (beurreDivResult.fontWeight < 700) {
                errorInnerHTML += "Votre beurre ne semble pas assez gras. N'hésitez pas à le faire épaissir (indice : font-weight)<br><br>"
            }
            if (beurreDivResult.fontSize < 30) {
                errorInnerHTML += "Votre beurre ne semble pas assez grand. Faites le grandir pour qu'on le voie bien dans la recette ! (indice: font-size)"
            }
            document.querySelector('section p span').innerHTML = errorInnerHTML;
            return false;
        }
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
