function addNewBadge(badgeName, lineClass) {
    const newBadge = document.createElement("div");
    newBadge.classList.add('badge');
    newBadge.classList.add(badgeName);
    document.querySelector(lineClass).append(newBadge);
}

function generateNextButton(href) {
    const nextButton = document.createElement("a");
    nextButton.classList.add("btn");
    nextButton.classList.add("suivant");
    nextButton.setAttribute("href", href);
    nextButton.innerHTML = "Suivant &rarr;"

    document.querySelector('nav').appendChild(nextButton);
}

document.addEventListener("DOMContentLoaded", (e) => {
    var button = document.querySelector("a.btn");
    var selects = document.querySelectorAll("select");

    if (button) {
        button.addEventListener("click", checkAnswers);
    }

    selects.forEach((select) => {
        select.addEventListener("change", () => {
            select.classList.remove(...["valid-answer", "wrong-answer"]);
        })
    })
})

function checkAnswers(e) {
    e.preventDefault();
    let answers = document.querySelectorAll("select");
    let validAnswers = ["c", "b", "c", "b", "abc"];
    let complete = true;
    let next_section = document.getElementById("next-section");

    answers.forEach((answer, i) => {
        if (validAnswers[i].includes(answer.value)) {
            answer.classList.remove("wrong-answer");
            answer.classList.add("valid-answer");
        }
        else {
            answer.classList.remove("valid-answer");
            answer.classList.add("wrong-answer");
            complete = false;
        }
    })

    if (complete) {
        addNewBadge('badge-8', '.ligne-2');
        next_section.classList.remove("hidden");
        next_section.innerHTML = "<i><p>Félicitations ! Vous avez vaincu le Grand Mage Pédro !</p><p>Dépité, ce dernier vous donne la relique tant convoitée et vous remercie une dernière fois pour les cookies avant de vous mettre à la porte.</p><p>Une fois sorti, vous ouvrez finalement le petit coffre brillant... pour ne rien y trouver ???</p><p>Et si la vraie relique n'était pas les connaissances acquises au long de votre périple ?</p><p>FIN</p></i>";
        generateNextButton('conclusion.html');
    }
}