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


    if (ninicio.value.length == 0 || nfim.value.length == 0 || npasso.value.length == 0) {

        window.alert("[ERRO] Os valores nos campos estão faltando")
        displayer.style.display = `none`

    } else {

        displayer.style.display = `flex`

            if (numberini < numberfim) {

                // CONTA CRESCENTE
                for (  var nini = numberini  ;  nini <= numberfim  ;  nini += numberpass  ) {

                    displayer.innerHTML += `${nini} \u{1F449} `
            
                }

            } else {

                // CONTA DECRESCENTE / REGRESSIVA
                for (  var nini = numberini  ;  nini >= numberfim  ;  nini -= numberpass ) {

                    displayer.innerHTML += `${nini} \u{1F449}`

                }
                
            }

       displayer.innerHTML += `\u{1F3C1}`

    }

}