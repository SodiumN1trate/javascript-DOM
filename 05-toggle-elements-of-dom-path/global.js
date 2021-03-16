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