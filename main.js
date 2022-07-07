document.getElementById("main").style.backgroundColor = "antiquewhite"

function random() {
    let random = Math.floor(Math.random() * 8)
    let img = document.getElementById("img")
    let txt = document.getElementById("txt")

    if (random == 1) {
        img.src = "catA.jpg"
        txt.innerHTML = "Food is food! <br> <i>-Cat A</i>"
        document.getElementById("main").style.backgroundColor = "antiquewhite"
    } else if (random == 2) {
        img.src = "catB.jpg"
        txt.innerHTML = "When you drink water, you drink water! <br> <i>-Cat B</i>"
        document.getElementById("main").style.backgroundColor = "#d6ffda"
    } else if (random == 3) {
        img.src = "catC.jpg"
        txt.innerHTML = "Dancing for me is fun! <br> <i>-Cat C</i>"
        document.getElementById("main").style.backgroundColor = "#c9cdff"
    } else if (random == 4) {
        img.src = "catD.jpg"
        txt.innerHTML = "I sorta like gorillas, I mean c'mon! <br> <i>-Cat D</i>"
        document.getElementById("main").style.backgroundColor = "#ddb0ff"
    } else if (random == 5) {
        img.src = "catD.jpg"
        txt.innerHTML = "I sorta like gorillas, I mean c'mon! <br> <i>-Cat D</i>"
        document.getElementById("main").style.backgroundColor = "#ddb0ff"
    } else if (random == 6) {
        img.src = "catD.jpg"
        txt.innerHTML = "I sorta like gorillas, I mean c'mon! <br> <i>-Cat D</i>"
        document.getElementById("main").style.backgroundColor = "#ddb0ff"
    } else if (random == 7) {
        img.src = "catD.jpg"
        txt.innerHTML = "I sorta like gorillas, I mean c'mon! <br> <i>-Cat D</i>"
        document.getElementById("main").style.backgroundColor = "#ddb0ff"
    } 
}