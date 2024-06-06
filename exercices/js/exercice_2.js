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

    addNewBadge('badge-2', '.ligne-1');

    console.log(nextButton);
}

document.addEventListener("DOMContentLoaded", (e) => {
    document.getElementById('btn1').onclick = function () {
        document.getElementById("section-2").classList.remove("caché");
    }

    document.getElementById('btn2').onclick = function () {
        document.getElementById("section-finish").classList.remove("caché");
    }

})