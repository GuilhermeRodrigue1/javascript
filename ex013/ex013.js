var agora = new Date()
var hora = agora.getHours()

if ((hora >= 6.00 && hora <= 11.59)) {
    console.log(`A hora é ${parseFloat(hora)}. Bom dia!`);
} else if ((hora >= 12.00 && hora <= 17.59)) {
    console.log(`A hora é ${parseFloat(hora)}. Boa tarde`);
} else if ((hora >= 18.00 && hora <= 23.59)) {
    console.log(`A hora é ${parseFloat(hora)}. Boa noite`);
} else if ((hora >= 0.00 && hora <= 5.59)) {
    console.log(`A hora é ${parseFloat(hora)}. Boa Madruga`);
} else {
    console.log("Hora inválida");
}