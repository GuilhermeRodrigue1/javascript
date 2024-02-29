function verificar() {

// PEGANDO O ANO DO MEU COMPUTADOR
var ano = new Date()
var anoatual = ano.getFullYear()

// LINK DO INPUT ANO
var inputano = document.getElementById("anoact")

// CALCULADOR DE ANO ATUAL - INPUTANO (O VALUE NO FINAL É EXTREMAMENTE IMPORTANTE PORQUE FOI PEGO DE UM INPUT!)
var calcano = anoatual - inputano.value

// PARAGRAFO QUE EXIBE A RESPOSTA
var respostap = document.getElementById("idade-calc")
respostap.innerText = `A idade é: ${Number(calcano)}`

// RADIO SEXO
var radiosexo = document.getElementsByName("sexo")

// VARIAVEL VAZIA DE GENERO PARA SER COMPLETA NO IF E ELSE
var genero = ""

// IMG DO HTML PARA SER TROCADO O SRC
var imgpessoa = document.getElementById("imgpessoa")

    if (inputano.value <= 0 || inputano.value > anoatual) {

        window.alert("[ERRO] Por favor digite algum valor")
        respostap.innerText = "DIGITE UM VALOR VALIDO!!!"
        imgpessoa.style.display = "none"

    } else if (radiosexo[0].checked) {
        
        genero = "Homem"
        respostap.innerText = `Detectamos ${genero} com ${calcano} Anos de idade` 

        if (calcano >= 0 && calcano <= 10) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1169782751663231106/frost4x3.png?ex=65a07c15&is=658e0715&hm=c90e7f2335e609b8eb74975fa13eeab5a51247a5eca2f3dfe6877ef2c3e86891&"

        } else if (calcano >= 11 && calcano <= 20) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1169782797083361280/philipe4x3.png?ex=65a07c20&is=658e0720&hm=2f468988324f7d7b69431852e4bf4ab2075256629c77c55e6b5032204eae9c8d&"

        } else if (calcano >= 21 && calcano <= 59) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1169782819854229614/baddark4x3.png?ex=65a07c25&is=658e0725&hm=86b971c49d7d45d46505d84f056743c8a0192266a66c39c52143ea5bfd24b931&"

        }

        else if (calcano >= 60) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1169782771019956325/lacerda4x3.png?ex=65a07c1a&is=658e071a&hm=d754822998496a35ba55e73d346ca021e0ca86f7dfa76a067ab166e510546700&"

        }


    } else if (radiosexo[1].checked) {
        
        genero = "Mulher"
        respostap.innerText = `Detectamos ${genero} com ${calcano} Anos de idade`

        if (calcano >= 0 && calcano <= 10) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1177679386674200626/barkanamo_500_x_500.png?ex=65a186e6&is=658f11e6&hm=074491dbf45fe612de02deee0bf8d5e880e4fc4f58a23425c14c21d0cf0ae531&"

        } else if (calcano >= 11 && calcano <= 20) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1185037547764715600/COUNDRAW_500_X_500.png?ex=65a09c38&is=658e2738&hm=7bc01518f721a610a6555329be0318dbbf841c61a9cdbb17c5929967daf06729&"

        } else if (calcano >= 21 && calcano <= 59) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1178041032319971379/silhueta.png?ex=65a2d7b5&is=659062b5&hm=55c5a07d6aa634aee9bc47a48066fb3d401105a2a56f97c59c893b3e7c14d289&"

        } else if (calcano >= 60) {

            imgpessoa.style.display = "block"
            imgpessoa.src = "https://cdn.discordapp.com/attachments/1169772835816869980/1185037192188399729/ECM_500_X_500.png?ex=65a09be3&is=658e26e3&hm=dc551f74468b8f1a6bc3af630d0e1fe87fd0f97a699e82b8a1ac80ebbfec2b69&"

        }

    }

}