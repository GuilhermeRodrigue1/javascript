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

    if (numberinput <= 0) {

        window.alert("Por favor insira um valor entre 1 e 100!")

    } else {

        // CRIAÇÃO DE ELEMENTO DO JS INICIO

            // CRIANDO ELEMENTO DENTRO DE VAR
            var divadd = window.document.createElement("div")
            // ADICIONANDO CONTEUDO DENTRO DA DIV QUE SERA CRIADA
            divadd.textContent = `Valor "${numberinput}" Adicionado!`
            // ADICIONANDO ELA DENTRO DA SECTION
            sectiondiv.appendChild(divadd)

        // CRIAÇÃO DE ELEMENTO DO JS FIM

        // ADICIONANDO VALORES A VARIAVEL COMPOSTA
        var numberarray = arrayport.push(numberinput)
        // CRIANDO VARIAVEL PARA PUXAR LENGHT DE VARIAVEL EXTERNA NO CASO A COMPOSTA
        var lengtharray = arrayport.length
        armlength = lengtharray

        displaytst.innerHTML = `O numero do input é: ${numberinput} | ${arrayport} | A quantidade de elemento nesta array é: ${lengtharray}`

        entradainput.value = ""
        var divoff = window.document.getElementById("divoffport")
        divoff.style.display = "none"
        entradainput.focus()

    }

}

var arrayport = []
var armlength = ""

function finalizar() {

    if (armlength == 0) {

        window.alert("Verifique se voce adicinou valores corretamente!")

    } else {

        var pconteudo1 = window.document.getElementsByClassName("paragrafo-ctd")[0].innerHTML = `Ao todo temos ${armlength} elementos dentro da Array ou Vetor`
        
        // DESCOMPACTANDO VALORES DA ARRAY
        var menorvalorarray = Math.min(...arrayport)

        var pconteudo2 = window.document.getElementsByClassName("paragrafo-ctd")[1].innerHTML = `O menor valor digitado é ${menorvalorarray}`
        
        var maiorvalorarray = Math.max(...arrayport)

        var pconteud3 = window.document.getElementsByClassName("paragrafo-ctd")[2].innerHTML = `O maior valor digitado é ${maiorvalorarray}`

        var divon = window.document.getElementById("divoffport")
        divon.style.display = "flex"

    }

}