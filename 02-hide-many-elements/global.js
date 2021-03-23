window.addEventListener("load", function () {
    const HIDE_ME_ELEMENTS = document.querySelectorAll(".hide_me")
    const BUTTON = document.querySelector("#button")

    BUTTON.addEventListener('click', function(e) {
        HIDE_ME_ELEMENTS.forEach(function(element) {
            element.style.display = "none";
        })
    })
});



/*

1. Es no lapas paņēmu visus .hide_me klases elementus. Man to atgrieza kā sarakstu, tāpēc nācās veidot loopu.

2. Es to izdarīju ar ciklu, jo tas man patīkamāks veids un nezinu kā savādāk to varēja izdarīt.


*/