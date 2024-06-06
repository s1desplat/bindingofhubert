let isExerciceOk = false;

function generateNextButton(href) {
    const nextButton = document.createElement("a");
    nextButton.classList.add("btn");
    nextButton.classList.add("suivant");
    nextButton.setAttribute("href", href);
    nextButton.innerHTML = "Suivant &rarr;"

    document.querySelector('nav').appendChild(nextButton);
}

function exerciceSuccess() {
    generateNextButton('exercice_8_qcm.html');
    generateSealOfApproval();

    isExerciceOk = true;
    const successText = document.querySelector('.exercice section');
    successText.innerHTML = "<i>Après un examen minutieux de votre formulaire, le garde vous laisse pénétrer dans l'enceinte du chateau.<br><br>Vous sentez que l'énergie magique de l'artéfact tant désiré se rapproche alors que vous approchez du laboratoire du Mage de la Cour.<br><br>Vous toquez fermement à la porte, et vous y retrouvez un visage familier..</i>"; // TODO : Lore ex 7 réussi
}

function generateSealOfApproval() {
    const nextButton = document.createElement("img");
    nextButton.classList.add("seal-of-approval");
    nextButton.setAttribute("src", '../img/seal_of_approval.png');

    document.querySelector('form').appendChild(nextButton);
}

function checkCerfaValidity(cerfa) {
    const conseilsDiv = document.querySelector('section span.conseils');
    let cerfaValiditySchema = {
        "pseudo": {
            isPresent: false,
            isEmpty: true,
            isOk: false,
        },
        "date": {
            isPresent: false,
            isEmpty: true,
            isOk: false,
        },
        "people": {
            isPresent: false,
            isOk: {
                "reine": false,
                "roi": false,
                "intendant": false,
                "mage": false,
                "cuisine": false
            },
            isPedro: false
        }
    };

    if (cerfa.id !== "cerfa-67042-b") {
        conseilsDiv.innerHTML = "Vous venez de soumettre le mauvais formulaire, relisez bien la consigne.";
        return false;
    }

    let hasIncorrectElements = false;
    const cerfaElements = Array.from(document.querySelectorAll('.cerfa-element')).filter((el) => {
        const retValue = el.children.length === 2 && el.children[0].nodeName === "LABEL" && (el.children[1].nodeName === "INPUT" || el.children[1].nodeName === "SELECT");
        if (!retValue) {
            hasIncorrectElements = true;
            el.classList.add('invalide');
        }
        return retValue;
    });

    if (hasIncorrectElements) {
        if (conseilsDiv) {
            conseilsDiv.innerHTML = "Vous avez des éléments invalides qui ne respectent pas le formatage demandé dans le CERFA. Merci de les corriger.";
        }
        return false;
    }

    cerfaElements.forEach((cerfaElement) => {
        switch (cerfaElement.children[1].type) {
            case 'text':
                cerfaValiditySchema.pseudo.isPresent = true;
                cerfaValiditySchema.pseudo.isEmpty = !cerfaElement.children[1].value;
                cerfaValiditySchema.pseudo.isOk = cerfaElement.children[1].value.toLowerCase().includes("hubert");
                break;
            case 'date':
                cerfaValiditySchema.date.isPresent = true;
                cerfaValiditySchema.date.isEmpty = !cerfaElement.children[1].value;
                if (!cerfaValiditySchema.date.isEmpty) {
                    const dateNow = new Date(Date.now());
                    dateNow.setUTCHours(0,0,0,0);
                    const formDate = new Date(cerfaElement.children[1].value);
                    cerfaValiditySchema.date.isOk = dateNow - formDate;
                }
                break;
            case 'select-one':
                cerfaValiditySchema.people.isPresent = true;
                for (let i = 0; i < cerfaElement.children[1].length; i++) {
                    const option = cerfaElement.children[1][i];
                    cerfaValiditySchema.people.isOk[option.value] = true;
                    if (option.value === "mage") {
                        cerfaValiditySchema.people.isPedro = option.selected;
                    }
                }
                break;
            default:
                break;             
        }
    });

    if (cerfaValiditySchema.pseudo.isOk && cerfaValiditySchema.date.isOk === 0 && cerfaValiditySchema.people.isPedro && Object.keys(cerfaValiditySchema.people.isOk).length === 5) {
        exerciceSuccess();
    } else {
        let conseils = "<br>";
        let peopleIsOk = true;

        if (!cerfaValiditySchema.pseudo.isPresent) {
            conseils += "N'oubliez pas de créer un champ contenant votre pseudonyme !<br><br>";
        } else if (cerfaValiditySchema.pseudo.isEmpty) {
            conseils += "N'oubliez pas de REMPLIR le champ content votre psudonyme.<br><br>";
        } else if (!cerfaValiditySchema.pseudo.isOk) {
            conseils += "Auriez-vous oublié votre propre nom ? (petit indice : vous vous appelez toujours Hubert)<br><br>";
        }

        if (!cerfaValiditySchema.date.isPresent) {
            conseils += "N'oubliez pas de créer un champ contenant la date de votre rendez-vous !<br><br>";
        } else if (cerfaValiditySchema.date.isEmpty) {
            conseils += "N'oubliez pas de REMPLIR le champ content la date de votre rendez-vous.<br><br>";
        } else if (cerfaValiditySchema.date.isOk > 0) {
            conseils += "Vous ne risquez pas d'obtenir un rendez-vous si la date est déjà passée..<br><br>";
        } else if (cerfaValiditySchema.date.isOk < 0) {
            conseils += "Vous comptez vraiment poireauter aussi longtemps devant le château ? Essayez de quérir un rendez-vous pour aujourd'hui.<br><br>";
        }

        if (!cerfaValiditySchema.people.isPresent) {
            conseils += "N'oubliez pas de créer un champ contenant la personne que vous désirez rencontrer !<br><br>";
            peopleIsOk = false;
        } else {
            if (!cerfaValiditySchema.people.isOk.reine) {
                conseils += "N'auriez vous pas oublié de mentionner la Reine dans votre formulaire ? Vous ne tenez pas à votre tête on dirait..<br><br>";
                peopleIsOk = false;
            }
            if (!cerfaValiditySchema.people.isOk.roi) {
                conseils += "N'auriez vous pas oublié de mentionner le Roi dans votre formulaire ? Il serait vexé de l'apprendre..<br><br>";
                peopleIsOk = false;
            }
            if (!cerfaValiditySchema.people.isOk.intendant) {
                conseils += "N'auriez vous pas oublié de mentionner l'Intendant dans votre formulaire ? Ce n'est pas comme s'il était disponible de toute façon.<br><br>";
                peopleIsOk = false;
            }
            if (!cerfaValiditySchema.people.isOk.mage) {
                conseils += "N'auriez vous pas oublié de mentionner le Mage dans votre formulaire ? En plus son nom vous dit quelque chose..<br><br>";
                peopleIsOk = false;
            }
            if (!cerfaValiditySchema.people.isOk.cuisine) {
                conseils += "N'auriez vous pas oublié de mentionner les cuisines dans votre formulaire ? Ils sont déjà bien assez occupés comme ça de toute façon..<br><br>";
                peopleIsOk = false;
            }
            if (Object.keys(cerfaValiditySchema.people.isOk).length > 5) {
                conseils += "Vous avez probablement mal nommé l'une de vos options. Revérifiez bien votre code.<br><br>";
                peopleIsOk = false;
            }
        }

        if (peopleIsOk && (!cerfaValiditySchema.people.isPedro)) {
            conseils += "Cette personne n'acceptera sûrement pas votre requête. De plus, vous voyez un nom familier dans la liste.";
        }

        conseilsDiv.innerHTML = conseils;
    }
}

function addCerfaStyleElements(cerfa) {
    const cerfaTitle = document.createElement("div");
    cerfaTitle.classList.add('cerfa-title');
    cerfaTitle.innerHTML = "CERFA " + cerfa.id.substring(6);
    cerfa.prepend(cerfaTitle);

    const hubertSignatureTitle = document.createElement("p");
    hubertSignatureTitle.classList.add('signature-titre');
    hubertSignatureTitle.innerHTML = "Signature";
    cerfa.append(hubertSignatureTitle);

    const hubertSignature = document.createElement("img");
    hubertSignature.classList.add('signature');
    hubertSignature.setAttribute("src", "../img/hubert_signature.png");
    cerfa.append(hubertSignature)
}

document.addEventListener("DOMContentLoaded", (e) => {
    const cerfa = document.querySelector('.exercice-7 form');
    if (cerfa) {
        if (cerfa.id.startsWith('cerfa-')) {
            addCerfaStyleElements(cerfa);
        }
        cerfa.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!isExerciceOk) {
                checkCerfaValidity(cerfa);   
            }
        });
    }
});
