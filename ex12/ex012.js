var idade = 66

if (idade < 16 ) {

    console.log(`Voce não pode votar, a idade minima para votação é de 16 anos e voce tem ${idade} anos!`)

} else {

    if (idade < 18  || idade > 65 ) {

        console.log(`O seu voto é opcional voce tem ${idade} anos!`)

    } else {

        console.log(`O seu voto é obrigatorio, voce tem ${idade} anos!`)

    }

}