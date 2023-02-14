let theShip = document.getElementById("ship");
let theMain = document.querySelector("main");
let theMissile = document.getElementById("missile");
let invadersLine1 = document.querySelector("div.invadersLine1");
let invadersLine2 = document.querySelector("div.invadersLine2");
let invadersLine3 = document.querySelector("div.invadersLine3");
let shipX = 50;
let missileToShip = 97;
let missileX = 52.25;
let missileY = missileToShip;
let tableInvaders = new Array();
let invaderTop1 = "6%";
let invaderTop2 = "12%";
let invaderTop3 = "18%";
let base = 10;

for (let i = 0; i < 27; i++) {
    tableInvaders[i] = new Array();
}

//*** Enemies Generator ***//
function invadersAreComing() {
    for (let i = 0; i < 27; i++) {
    
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

    }
    console.log(tableInvaders);
}

//*** Is Enemy Here Verification ***//
function isInvaderHere () {
    for (let i = 0; i < tableInvaders.length; i++)
    if (missileY == parse(tableInvaders[i][0]) && missileX == parse(tableInvaders[i][1])) {
        console.log("touché")
    }
    console.log(missileY);
    console.log(missileX);
    console.log(parse(tableInvaders[i][0]))
}

//*** Missile Attack ***/
function missileAttack() {
    if (missileY > 0) {
        missileY = missileY - 0.5;
        theMissile.style.top = `${missileY}%`;
        isInvaderHere();
        window.requestAnimationFrame(() => {
            missileAttack();
        })
    }
    else {
        missileY = missileToShip;
        theMissile.style.top = `${missileY}%`;
    }
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
    if ((key === "KeyD" || key === "ArrowRight") && shipX < 95 && missileY == missileToShip) {
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