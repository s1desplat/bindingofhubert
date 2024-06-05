function exerciceButtonSuccess() {
    document.getElementById('section-finish').classList.remove('caché');
}

function exerciceButtonFailure() {

}

function exerciceLinkSuccess() {
    const section_3 = document.getElementById('section-3');
    section_3.classList.remove('caché');
    const titres = section_3.querySelectorAll('button, input, select');

    titres.forEach(titre => {
        if (titre.tagName === 'BUTTON') {
            document.getElementById('btn3').onclick = function () {
                exerciceButtonSuccess();
            }
        } else if (titre.tagName === 'INPUT') {
            exerciceLinkFailure("Le titre est trop grand Hubert trouve le titre vertigineux, essayez autre chose !");
        } else if (titre.tagName === 'SELECT') {
            exerciceLinkFailure("")
        }
    })
}

function exerciceLinkFailure() {

}

function exerciceTitleSuccess() {
    const section_2 = document.getElementById('section-2');
    section_2.classList.remove('caché');
    const titres = section_2.querySelectorAll('a, b, i');
    
    titres.forEach(titre => {
        if (titre.tagName === 'A') {
            exerciceLinkSuccess();
        } else if (titre.tagName === 'B') {
            exerciceLinkFailure("Le titre est trop grand Hubert trouve le titre vertigineux, essayez autre chose !");
        } else if (titre.tagName === 'I') {
            exerciceLinkFailure("")
        }
    });
}

function exerciceTitleFailure(error) {
    
}

document.addEventListener("DOMContentLoaded", (e) => {
    const exo_1 = document.getElementById('section-1');
    const titres = exo_1.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    titres.forEach(titre => {
        if (titre.tagName === 'H2') {
            exerciceTitleSuccess();
        } else if (titre.tagName === 'H1') {
            exerciceTitleFailure("Le titre est trop grand Hubert trouve le titre vertigineux, essayez autre chose !");
        } else if (titre.tagName === 'H3') {
            exerciceTitleFailure("")
        }
    });


})