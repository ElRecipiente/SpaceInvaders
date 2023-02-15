let theShip = document.getElementById("ship");
let theMain = document.querySelector("main");
let showScore = document.querySelector("#score span")
let score = 0;
let theMissile = document.getElementById("missile");
let invadersLine1 = document.querySelector("div.invadersLine1");
let invadersLine2 = document.querySelector("div.invadersLine2");
let invadersLine3 = document.querySelector("div.invadersLine3");
let invaders;
let shipX = 47.75;
let missileToShip = 95;
let missileX = 50;
let missileY = missileToShip;
let tableInvaders = new Array();
let invaderTop1 = "10%";
let invaderTop2 = "20%";
let invaderTop3 = "30%";

//*** Enemies Generator ***//
function invadersAreComing() {
    for (let i = 0; i < 27; i++) {
        tableInvaders[i] = new Array();
        let invader = document.createElement("div");
        invader.classList.add("invader");

        if (i < 10) {
            invadersLine1.append(invader);
            invader.style.left = `${2.5 + ((i + (i * 4))) * 2}%`;
            tableInvaders[i].push(invaderTop1);
            tableInvaders[i].push(invader.style.left);
        }

        else if (i < 19) {
            let j = i - 10;
            invadersLine2.append(invader);
            invader.style.left = `${7.5 + ((j + (j * 4))) * 2}%`;
            tableInvaders[i].push(invaderTop2);
            tableInvaders[i].push(invader.style.left);
        }

        else {
            let k = i - 19;
            invadersLine3.append(invader);
            invader.style.left = `${12.5 + ((k + (k * 4))) * 2}%`;
            tableInvaders[i].push(invaderTop3);
            tableInvaders[i].push(invader.style.left);
        }
        invader.style.backgroundImage = `url(img/sprite_${Math.floor(Math.random() * 6)}.png)`;
    }
    console.log(tableInvaders);
    invaders = document.querySelectorAll("div.invader");
}

//*** Is Enemy Here Verification ***//
function isInvaderHere() {
    for (let i = 0; i < tableInvaders.length; i++) {
        if ((parseFloat(tableInvaders[i][0]) < missileY && missileY < parseFloat(tableInvaders[i][0]) + 2) && (parseFloat(tableInvaders[i][1]) < missileX && missileX < parseFloat(tableInvaders[i][1]) + 3)) {
            invaders[i].classList.remove("invader");
            tableInvaders[i][0] = null;
            tableInvaders[i][1] = null;
            score += 100;
            showScore.textContent = `${score}`;
        }
    }
}

//*** Missile Attack ***/
function missileAttack() {
    if (missileY > 0) {
        missileY = missileY - 2;
        theMissile.style.top = `${missileY}%`;
        window.requestAnimationFrame(() => {
            missileAttack();
        })
    }
    else {
        missileY = missileToShip;
        theMissile.style.top = `${missileY}%`;
    }
    isInvaderHere();
}

//*** Click Event Listener ***//
document.addEventListener("click", () => {
    console.log("click");
    missileAttack();
})

// *** Key Event Listener *** //
document.addEventListener("keydown", (event) => {
    let key = event.code
    console.log(key)
    if ((key === "KeyD" || key === "ArrowRight") && shipX < 94.75 && missileY == missileToShip) {
        shipX += 1;
        theShip.style.left = `${shipX}%`;
        missileX += 1;
        theMissile.style.left = `${missileX}%`;
    }
    else if ((key === "KeyA" || key === "ArrowLeft") && shipX > 0 && missileY == missileToShip) {
        shipX -= 1;
        theShip.style.left = `${shipX}%`;
        missileX -= 1;
        theMissile.style.left = `${missileX}%`;
    }
    // else if ((key === "KeyW" || key === "ArrowUp")) {
    //     window.requestAnimationFrame(() => {
    //         missileAttack();
    //     })
    // }
})

invadersAreComing();