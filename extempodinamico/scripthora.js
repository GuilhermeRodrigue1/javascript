function loadpage() {

    var horario = new Date
    var horaatt = horario.getHours()

    var menssagem = window.document.querySelector(`.hora-box`)
    var imagemtemp = window.document.querySelector(`.imagemcfg`)

    if (horaatt >= 6.00 &&  horaatt <= 11.59) {

        menssagem.innerHTML = `Bom dia` 
        imagemtemp.src = ("https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg")
        window.document.body.style.backgroundColor = "#01307C"

    } else if (horaatt >= 12.00 &&  horaatt <= 18.59) {

        menssagem.innerHTML = `Boa tarde` 
        imagemtemp.src = ("https://cdn.pixabay.com/photo/2020/04/04/21/00/twilight-5003856_1280.jpg")
        window.document.body.style.backgroundColor = "#434D50"
    } else if (horaatt >= 19.00 && horaatt <= 23.59) {

        menssagem.innerHTML = `Boa noite` 
        imagemtemp.src = ("https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_1280.jpg")
        window.document.body.style.backgroundColor = "#071E3C"

    } else if (horaatt >= 0.00 && horaatt <= 5.59) {

        menssagem.innerHTML = `Boa madrugada` 
        imagemtemp.src = ("https://cdn.pixabay.com/photo/2018/05/03/20/04/sol-3372233_1280.jpg")
        window.document.body.style.backgroundColor = "#07142F"

    }
}