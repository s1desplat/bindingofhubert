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

function exerciceError(error) {

}

document.addEventListener("DOMContentLoaded", (e) => {
    const btn1 = document.getElementById('btn1');
    btn1.onclick = function () {
        const style = window.getComputedStyle(btn1);
        console.log(style.display);
        if (style.display === 'block') {
            exerciceError("Ah");
        } else if (style.display === 'inline-block') {
            document.getElementById("section-2").classList.remove("caché");
        }
    }

    document.getElementById('btn2').onclick = function () {
        document.getElementById("section-finish").classList.remove("caché");
    }

})