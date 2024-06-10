
function section2() {
    const select = document.getElementById("select");
    const btn2 = document.getElementById("partie2");
    const style = window.getComputedStyle(select);
    btn2.onclick = function() {
        if (select.value === "Hubert" && style.borderRadius != "3px") {
            document.getElementById("section-finish").classList.remove('caché');
        } else {

        }
    }
}


document.addEventListener("DOMContentLoaded", (e) => {
    const input = document.getElementById('input');
    const btn1 = document.getElementById('partie1');
    const input_style = window.getComputedStyle(input);
    btn1.onclick = function () {
        if (input.value === "Hubert" && input_style.fontSize != "0px" && input_style.backgroundColor === "rgb(240, 240, 240)") {
            const section_2 = document.getElementById('section-2');
            section_2.classList.remove('caché');
            section2();
        } else if (input.value === "Hubert" && input_style.color === input_style.backgroundColor) {
            console.log("not cool");
        } else if (input.value === "Hubert" && input_style.fontSize != "0px" && input_style.backgroundColor != "#rgb(240, 240, 240") {
            console.log("cool mais moche");
        }
    }    
})