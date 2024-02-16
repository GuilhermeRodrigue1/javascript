function apertar() {

var nome = window.prompt("Insira o link de uma imagem Hospedada!")

var botao = window.document.getElementById("titulo")

botao.innerText = `${nome}`

botao.style.color = "red"
botao.style.boxShadow = "1px 1px 1px black"

var imagem = window.document.getElementById("imgsrc")

imagem.src = nome


}
