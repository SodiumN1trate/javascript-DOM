const hideMeElements = document.querySelectorAll(".show_me")
const button = document.querySelector("#button")


button.addEventListener('click', function(e) {
    hideMeElements.forEach(function(element) {
        element.style.display = "initial";
    })
})


/*

1. Elementus es paslēpu sākumā ar CSS. Pēc pogas nospiešanas nomainīju CSS stilu uz "initial"

*/