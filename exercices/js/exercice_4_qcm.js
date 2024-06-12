function addNewBadge(badgeName, lineClass) {
    const newBadge = document.createElement("div");
    newBadge.classList.add('badge');
    newBadge.classList.add(badgeName);
    document.querySelector(lineClass).append(newBadge);
}

function checkSmartCheese() {
    const nextDiv = document.querySelector('#next-section');
    if (!(nextDiv.classList.contains("hidden"))) {
        const newLoreText = document.createElement('i');
        newLoreText.innerHTML = "<br><br>Pédro vous regarde du coin de l'oeil pendant que vous vous en allez, il sait ce que vous avez fait pour passer son épreuve..";
        nextDiv.append(newLoreText);
    };
}

document.addEventListener("DOMContentLoaded", (e) => {
    var button = document.querySelector("a.btn");
    var selects = document.querySelectorAll("select");

    checkSmartCheese();

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
    let validAnswers = ["a", "c", "a", "c"];
    let complete = true;
    let next_section = document.getElementById("next-section");

    answers.forEach((answer, i) => {
        if (answer.value != validAnswers[i]) {
            answer.classList.remove("valid-answer");
            answer.classList.add("wrong-answer");
            complete = false;
        }
        else {
            answer.classList.remove("wrong-answer");
            answer.classList.add("valid-answer");
        }
    })

    if (complete) {
        addNewBadge('badge-4', '.ligne-1');
        next_section.classList.remove("hidden");
    }
}