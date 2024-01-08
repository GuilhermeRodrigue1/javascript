function tabuada() {

// DECLAREI VARIAVEL DE INPUT E LINKEI
let entradainput = window.document.getElementById("ntabuada")

    // CRIEI UMA CONDIÇÃO COM IF E ELSE, SE O NUMERO DE CARACATERES DIGITADOS NO INPUT FOR IGUAL A 0 ELE EXECUTA O IF, SE NÃO ELE EXECUTA O ELSE
    if (entradainput.value.length == 0) {

        window.alert("Digite um numero")

    } else {

        // LINKEI A TABELA SELECT AQUI
        var tabela = window.document.getElementById("tabela")

        // CRIEI UMA VARIAVEL PARA ARMAZENAR O NUMERO MULTIPLICADOR
        let numbercount = 1

        // TRANSFORMEI O VALOR DO INPUT EM NUMERO
        let numberent = Number(entradainput.value) 

        // LIMPANDO A TABELA TODA VEZ QUE A FUNCTION E CHAMADA
        tabela.innerHTML = ""

        while (numbercount <= 10) {

            // CRIEI UM ELEMENTO USANDO JS (OPTION) USADO DENTRO DO SELECT
            var opt = document.createElement("option")

            // USEI A VARIVAVEL QUE CARREGAR MEU OPTION CRIADO DO HTML O TEXTO DENTRO DELE E FIZ ELE LER E ESCREVER OQUE EU QUISESSE.
            opt.text = (`${numberent} x ${numbercount} = ${numberent * numbercount}`)

            // ADICIONEI UM FILHO NO SELECT, O OPTION
            tabela.appendChild(opt)

            // NUMERO DO MULTIPLICADOR RECEBENDO + 1 PARA SER SOMADO, LEMBRANDO QUE ESTAMOS USANDO WHILE
            numbercount++

        }

    }

}