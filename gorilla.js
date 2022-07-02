document.getElementById("main").style.backgroundColor = "antiquewhite"

function random() {
    let random = Math.floor(Math.random() * 5)
    let img = document.getElementById("img")
    let txt = document.getElementById("txt")

    if (random == 1) {
        img.src = "gorillaA.jpg"
        txt.innerHTML = "Food, we need it! <br> <i>-Gorilla A</i>"
        document.getElementById("main").style.backgroundColor = "antiquewhite"
    } else if (random == 2) {
        img.src = "gorillaB.jpg"
        txt.innerHTML = "Ape life is good. <br> <i>-Gorilla B</i>"
        document.getElementById("main").style.backgroundColor = "#d6ffda"
    } else if (random == 3) {
        img.src = "gorillaC.jpg"
        txt.innerHTML = "Grass looks weird! <br> <i>-Gorilla C</i>"
        document.getElementById("main").style.backgroundColor = "#c9cdff"
    } else if (random == 4) {
        img.src = "gorillaD.jpg"
        txt.innerHTML = "I have no idea what to say. <br> <i>-Gorilla D</i>"
        document.getElementById("main").style.backgroundColor = "#ddb0ff"
    } 
}