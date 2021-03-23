window.addEventListener('load', function () {

    const FIRST = document.querySelector('#first')
    const SECOND = document.querySelector('#second')
    const THIRD = document.querySelector('#third')
    FIRST.addEventListener('keydown', function (e) {
        if (FIRST.value.length == 3)
        {
            SECOND.focus()
        }
    })
    SECOND.addEventListener('keydown', function (e) {
        if (SECOND.value.length == 3)
        {
            THIRD.focus()
        }
    })

})


/*

1. Nesapratu gluži jautājumu, bet noprotu ka jautājums ir tāds "kā es pārvietojos pa input tagiem?" es pārvietojos pa input tagiem ar funkciju focus() 


*/