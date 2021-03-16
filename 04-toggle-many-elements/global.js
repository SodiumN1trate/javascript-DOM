document.addEventListener('DOMContentLoaded', function () {

    const elements = document.querySelectorAll('.toggle_me')
    const button = document.querySelector('#button')

    var toggleStatus = false
    button.addEventListener('click', function(e) {
        if (toggleStatus == false)
        {
            elements.forEach(function(element) {
                element.style.display = 'initial'
                toggleStatus = true
            })
        }
        else
        {
            elements.forEach(function (element) {
                element.style.display = 'none'
                toggleStatus = false
            })
        }
    })

})