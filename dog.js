document.getElementById("main").style.backgroundColor = "antiquewhite"

function random() {
    let random = Math.floor(Math.random() * 5)
    let img = document.getElementById("img")
    let txt = document.getElementById("txt")

    if (random == 1) {
        img.src = "dogA.jpg"
        txt.innerHTML = "Woof woof! <br> <i>-Dog A</i>"
        document.getElementById("main").style.backgroundColor = "antiquewhite"
    } else if (random == 2) {
        img.src = "dogB.jpg"
        txt.innerHTML = "When a dog is born, that dog will be a dog! <br> <i>-Dog B</i>"
        document.getElementById("main").style.backgroundColor = "#d6ffda"
    } else if (random == 3) {
        img.src = "dogC.jpg"
        txt.innerHTML = "Currently, there is a picture of a dog! <br> <i>-Dog C</i>"
        document.getElementById("main").style.backgroundColor = "#c9cdff"
    } else if (random == 4) {
        img.src = "dogD.jpg"
        txt.innerHTML = "Making this is so fun and dull! <br> <i>-Dog D</i>"
        document.getElementById("main").style.backgroundColor = "#ddb0ff"
    } 
}