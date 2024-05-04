var body = window.document.getElementById(`corpo`)
var button = window.document.getElementById(`toggle-button`)
var image = window.document.getElementById(`img-source`)
var display = window.document.getElementById(`display`)

// Check condition
var check = false

button.addEventListener(`click`, ()=> {

    if (check === true) {

        check = false
        display.innerText = `Modo dia [ON]`
        noite()

    } else { 

        check = true
        display.innerText = `Modo noite [ON]`
        dia()

    }

})


function dia(){

    image.src = 'IMG/sun.png'
    body.style.backgroundColor = `#acacac`
    console.log(`ficando de dia`)
    button.style.backgroundColor = `#FFFFFF`
    image.style.filter = (`brightness(-100%)`)

}

function noite(){

    image.src = 'IMG/moon.png'
    console.log(`ficando de noite`)
    body.style.backgroundColor = `#2C2B2C`
    button.style.backgroundColor = `#202020`
    image.style.filter = (`brightness(100%)`)
    
}