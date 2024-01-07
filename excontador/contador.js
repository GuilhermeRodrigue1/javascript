function contando() {

// VARIAVEIS REFERENCIADAS DO HTML (INPUT)
var ninicio = document.getElementById("ninicio")
var nfim = document.getElementById("nfim")
var npasso = document.getElementById("npasso")

// DISPLAY DO RESULTADO
var displayer = window.document.getElementById("displ")


// TRANSFORMANDO EM NUMEROS
var numberini = Number(ninicio.value)
var numberfim = Number(nfim.value)
var numberpass = Number(npasso.value)

// CONTADOR
var contador = numberini + numberpass

displayer.innerText = (`INICIO: ${ninicio.value} | PASSO ${npasso.value} | CONTADOR: ${contador}`)


// O NOSSO NUMERO DO INPUT INICIO É MENOR OU IGUAL AO NUMERO DO INPUT FIM? ( SE SIM ELE EXECUTA BLOCO, SE NÃO ELE FECHA O WHILE)

    while ( ) {



    }

}