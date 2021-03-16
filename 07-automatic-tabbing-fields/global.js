document.addEventListener('DOMContentLoaded', function () {

    const first = document.querySelector('#first')
    first.addEventListener('keyup', function (e) {
        if (e.target.value.length == 3)
        {
            const second = document.querySelector('#second')
            second.focus()
            second.addEventListener('keyup', function (e) {
                if (e.target.value.length == 3) {
                    const third = document.querySelector('#third')
                    third.focus()
                }
            })
        }
    })

})


/*

1. Nesapratu gluži jautājumu, bet noprotu ka jautājums ir tāds "kā es pārvietojos pa input tagiem?" es pārvietojos pa input tagiem ar funkciju focus() 


*/