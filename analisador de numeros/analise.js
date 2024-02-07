function calculartudo() {

    // INICIO LINKS

        // LINK DO INPUT
        var entradainput = window.document.getElementById("entrada")
        // LINK PRO DISPLAY DE TESTE
        var displaytst = window.document.querySelector(".teste-display")
        // LINK PRA SECTION QUE VAI PORTAR A DIV
        var sectiondiv = window.document.getElementById("container-div")

        var numberinput = Number(entradainput.value)

    // FIM LINKS

    // CRIAÇÃO DE ELEMENTO DO JS INICIO

        // VARIAVEL QUE CRIA UM ELEMENTO "DIV" OU QUAL VOCE QUISER
        var divadd = window.document.createElement("div")
        // ADIÇÃO DE TEXTO DE CONTEUDO DENTRO DA DIV!
        divadd.textContent = `Valor "${numberinput}" Adicionado!`
        // ADIÇÃO DA VARIAVEL QUE CRIA DIV PARA A SECTION QUE IRA COMPORTAR ELA
        sectiondiv.appendChild(divadd)

    // CRIAÇÃO DE ELEMENTO DO JS FIM

    // ADICIONANDO VALORES A VARIAVEL COMPOSTA
    var numberarray = arrayport.push(numberinput)

    var lengtharray = arrayport.length

    displaytst.innerHTML = `O numero do input é: ${numberinput} | ${arrayport} | A quantidade de elemento nesta array é: ${lengtharray}`

}

var arrayport = []
