// DECLARANDO O VETOR / ARRAY
let num = [1 ,5 ,7 ,8 ,4 ,6 ,4 ,5 ,9 , 0]

// ORGANIZANDO OS VALORES DO VETOR
// num.sort()

// EXIBE NO CONSOLE O QUANTO DE ELEMENTOS TEM NO VETOR / ARRAYS
console.log (`A quantidade de elementos arrays é ${num.length}`)

// ADICIONA VALOR NO FINAL DO VETOR, O VALOR É REFERENCIADO DE ACORDO COM O NUMERO QUE COLOCA DENTRO DO PARENTESES!
num.push(1)

// EXIBE NA TELA TODO O VETOR
console.log(num)

/*
for ( let posicao = 0 ; posicao < num.length ; posicao++ ) {

    console.log (`A posição atual é ${posicao} e o elemento é ${num[posicao]}`)

}

var pos = 0

while (pos < num.length) {

    console.log(`Posição é: ${pos} e o elemento array selecionado é: ${num[pos]}`)

    pos++

}

for (let posi in num) {

    console.log(`Posição é: ${pos} e o elemento array selecionado é: ${num[posi]}`)    

}
*/

let position = num.indexOf(9)


if (position == -1) {

    console.log(`Não foi possivel encontrar o valor requisitado!`)

} else { 

    console.log(position)

}