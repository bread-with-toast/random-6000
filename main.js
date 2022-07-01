function random() {
    let random = Math.floor(Math.random() * 5)
    let img = document.getElementById("img")
    let txt = document.getElementById("txt")

    if (random == 1) {
        img.src = "catA.jpg"
        txt.innerHTML = "Food is food! <br> <p><i>-Cat A<i><p>"
    } else if (random == 2) {
        img.src = "catB.jpg"
        txt.innerHTML = "When you drink water, you drink water! <br> <p><i>-Cat B<i><p>"
    } else if (random == 3) {
        img.src = "catC.jpg"
        txt.innerHTML = "Dancing for me is fun! <br> <p><i>-Cat C<i><p>"
    } else if (random == 4) {
        img.src = "catD.jpg"
        txt.innerHTML = "I sorta like gorillas, I mean c'mon! <br> <p><i>-Cat D<i><p>"
    } 
}
