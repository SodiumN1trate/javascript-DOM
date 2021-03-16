document.addEventListener('DOMContentLoaded', function () {

    const elements = document.querySelectorAll(".second_five > li")
    const button = document.querySelector('#toggle_button')

    var toggleStatus = false
    button.addEventListener('click', function (e) {
        if (toggleStatus == false) {
            elements.forEach(function (element) {
                element.style.display = 'flex'
                toggleStatus = true
            })
        }
        else {
            elements.forEach(function (element) {
                element.style.display = 'none'
                toggleStatus = false
            })
        }
    })

})


/*

1. Es biju izmantojis funkciju gan querySelectorAll un querySelector, jo ar to ir viss vienkāršāk un laikam ar viens no veidiem kā pārvietoties par html lapu.


*/