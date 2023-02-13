let invaders = [];
let theShip = document.getElementById("ship");
let theMain = document.querySelector("main")

function invadersAreComing() {
    for (let i = 0; i < 100; i++) {

        let invader = document.createElement("div");
        invader.classList.add("invader");
        theMain.append(invader);
    }
}

invadersAreComing();