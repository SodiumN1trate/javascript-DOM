document.addEventListener('DOMContentLoaded', function () {

    var htmlName = document.querySelector('#greeting')
    const nameBar = document.querySelector('#full_name')
    nameBar.addEventListener('keyup', function (e) {
        htmlName.textContent = "Hello there, " + e.target.value + "!"
    })

})