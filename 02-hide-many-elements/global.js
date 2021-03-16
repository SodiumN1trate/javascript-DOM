const hideMeElements = document.querySelectorAll(".hide_me")
const button = document.querySelector("#button")


button.addEventListener('click', function(e) {
    hideMeElements.forEach(function(element) {
        element.style.display = "none";
    })
})


/*

1. Es no lapas paņēmu visus .hide_me klases elementus. Man to atgrieza kā sarakstu, tāpēc nācās veidot loopu.

2. Es to izdarīju ar ciklu, jo tas man patīkamāks veids un nezinu kā savādāk to varēja izdarīt.


*/