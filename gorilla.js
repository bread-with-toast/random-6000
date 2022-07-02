document.getElementById("main").style.backgroundColor = "antiquewhite"

function random() {
    let random = Math.floor(Math.random() * 8)
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
    } else if (random == 5) {
        img.src = "gorillaE.jpg"
        txt.innerHTML = "Gorilla life, ape life. <br> <i>-Gorilla E</i>"
        document.getElementById("main").style.backgroundColor = "#97E9C0"
    } else if (random == 6) {
        img.src = "gorillaF.jpg"
        txt.innerHTML = "Time to touch grass! <br> <i>-Gorilla F</i>"
        document.getElementById("main").style.backgroundColor = "#F4A2BF"
    } else if (random == 7) {
        img.src = "gorillaG.jpg"
        txt.innerHTML = "Is that a human I spy?. <br> <i>-Gorilla G</i>"
        document.getElementById("main").style.backgroundColor = "#A8A2F4"
    } 
}