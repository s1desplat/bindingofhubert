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
    let validAnswers = ["c", "a", "c", "b", "a"];
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

    if (complete)
        next_section.classList.remove("hidden");
}