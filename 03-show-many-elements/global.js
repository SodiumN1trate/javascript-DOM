window.addEventListener("load", function () {
    const HIDE_ME_ELEMNTS = document.querySelectorAll(".show_me")
    const BUTTON = document.querySelector("#button")

    BUTTON.addEventListener('click', function(e) {
        HIDE_ME_ELEMNTS.forEach(function(element) {
            element.style.display = "initial";
        })
    })
})














/*

1. Elementus es paslēpu sākumā ar CSS. Pēc pogas nospiešanas nomainīju CSS stilu uz "initial"

*/