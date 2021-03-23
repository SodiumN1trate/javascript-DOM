window.addEventListener('load', function () {

    const ELEMENTS = document.querySelectorAll(".second_five > li")
    const BUTTON = document.querySelector('#toggle_button')

    var toggleStatus = false
    BUTTON.addEventListener('click', function (e) {
        if (toggleStatus == false) {
            ELEMENTS.forEach(function (element) {
                element.style.display = 'flex'
                toggleStatus = true
            })
        }
        else {
            ELEMENTS.forEach(function (element) {
                element.style.display = 'none'
                toggleStatus = false
            })
        }
    })

})





/*

1. Es biju izmantojis funkciju gan querySelectorAll un querySelector, jo ar to ir viss vienkāršāk un laikam ar viens no veidiem kā pārvietoties par html lapu.


*/