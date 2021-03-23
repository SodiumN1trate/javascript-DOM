window.addEventListener('load', function () {

    const FIRST = document.querySelector('#first')
    FIRST.addEventListener('keyup', function (e) {
        if (e.target.value.length == 3)
        {
            const SECOND = document.querySelector('#second')
            SECOND.focus()
            SECOND.addEventListener('keyup', function (e) {
                if (e.target.value.length == 3) {
                    const THIRD = document.querySelector('#third')
                    THIRD.focus()
                }
            })
        }
    })

})








/*

1. Nesapratu gluži jautājumu, bet noprotu ka jautājums ir tāds "kā es pārvietojos pa input tagiem?" es pārvietojos pa input tagiem ar funkciju focus() 


*/