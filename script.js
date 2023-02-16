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
let missileX = shipX + 2.25;
let missileY = missileToShip;
let tableInvaders = new Array();
let invaderTop1 = "10%";
let invaderTop2 = "20%";
let invaderTop3 = "30%";
let leftPush = [];
let gameEnd = false;
let moveDown = 0.2;
let moveSide = 2;
let theGround = 90;

//*** Enemies Generator ***//
function invadersAreComing() {
    for (let i = 0; i < 27; i++) {
        tableInvaders[i] = new Array();
        let invader = document.createElement("div");
        invader.classList.add("invader");
        invader.classList.add("invaderStayDead");

        if (i < 10) {
            invadersLine1.append(invader);
            invader.style.left = `${2.5 + ((i + (i * 4))) * 2}%`;
            leftPush.push(parseFloat(invader.style.left));
            tableInvaders[i].push(invaderTop1);
            tableInvaders[i].push(invader.style.left);
        }

        else if (i < 19) {
            let j = i - 10;
            invadersLine2.append(invader);
            invader.style.left = `${7.5 + ((j + (j * 4))) * 2}%`;
            leftPush.push(parseFloat(invader.style.left));
            tableInvaders[i].push(invaderTop2);
            tableInvaders[i].push(invader.style.left);
        }

        else {
            let k = i - 19;
            invadersLine3.append(invader);
            invader.style.left = `${12.5 + ((k + (k * 4))) * 2}%`;
            leftPush.push(parseFloat(invader.style.left));
            tableInvaders[i].push(invaderTop3);
            tableInvaders[i].push(invader.style.left);
        }

        setTimeout(() => {
            invader.style.backgroundImage = `url(img/enemy${Math.floor(Math.random() * 6)}.png)`;
        }, i * 100)
    }
    console.log(tableInvaders);
    console.log(leftPush);
    invaders = document.querySelectorAll("div.invader");
}

//*** Invaders are Moving ! ***//
function invadersAreMoving() {

    if (gameEnd) {
        lastDiv = document.querySelector("p")

        if (gameEnd && score > 2600) {
            console.log("YOU WIN");
            lastDiv.textContent = "YOU WIN !"
            lastDiv.classList.add("win")
        }
        else if (gameEnd && score <= 2600) {
            console.log("YOU LOSE");
            lastDiv.textContent = "YOU LOSE !"
            lastDiv.classList.add("lose")
        }
    }

    else {

        invaders = document.querySelectorAll("div.invaderStayDead"); /* 'cause the deads have to still here, but dead */

        for (let i = 0; i < invaders.length; i++) {

            if (i < 10) {

                setTimeout(() => {
                    leftPush[i] += moveSide;
                    invaders[i].style.left = `${leftPush[i]}%`
                    if (tableInvaders[i][1] != null) { /* Refresh */
                        tableInvaders[i][1] = `${leftPush[i]}%`
                    }
                    else {
                        tableInvaders[i][1] = null;
                    }

                }, 1000)

                setTimeout(() => {
                    invaderTop1 = parseFloat(invaderTop1) + moveDown;
                    invadersLine1.style.top = `${invaderTop1}%`
                    if (tableInvaders[i][0] != null) { /* Refresh */
                        tableInvaders[i][0] = `${invaderTop1}%`
                    }
                    else {
                        tableInvaders[i][0] = null;
                    }

                }, 2000)

                setTimeout(() => {
                    leftPush[i] -= moveSide;
                    invaders[i].style.left = `${leftPush[i]}%`
                    if (tableInvaders[i][1] != null) {
                        tableInvaders[i][1] = `${leftPush[i]}%`
                    }
                    else {
                        tableInvaders[i][1] = null;
                    }
                }, 3000)

                setTimeout(() => {
                    invaderTop1 = parseFloat(invaderTop1) + moveDown;
                    invadersLine1.style.top = `${invaderTop1}%`
                    if (tableInvaders[i][0] != null) {
                        tableInvaders[i][0] = `${invaderTop1}%`
                    }
                    else {
                        tableInvaders[i][0] = null;
                    }
                }, 4000)
            }

            else if (i < 19) {

                setTimeout(() => {
                    leftPush[i] += moveSide;
                    invaders[i].style.left = `${leftPush[i]}%`;
                    if (tableInvaders[i][1] != null) {
                        tableInvaders[i][1] = `${leftPush[i]}%`
                    }
                    else {
                        tableInvaders[i][1] = null;
                    }
                }, 1000)

                setTimeout(() => {
                    invaderTop2 = parseFloat(invaderTop2) + moveDown;
                    invadersLine2.style.top = `${invaderTop2}%`;
                    if (tableInvaders[i][0] != null) {
                        tableInvaders[i][0] = `${invaderTop2}%`
                    }
                    else {
                        tableInvaders[i][0] = null;
                    }
                }, 2000)

                setTimeout(() => {
                    leftPush[i] -= moveSide;
                    invaders[i].style.left = `${leftPush[i]}%`;
                    if (tableInvaders[i][1] != null) {
                        tableInvaders[i][1] = `${leftPush[i]}%`
                    }
                    else {
                        tableInvaders[i][1] = null;
                    }
                }, 3000)

                setTimeout(() => {
                    invaderTop2 = parseFloat(invaderTop2) + moveDown;
                    invadersLine2.style.top = `${invaderTop2}%`;
                    if (tableInvaders[i][0] != null) {
                        tableInvaders[i][0] = `${invaderTop2}%`
                    }
                    else {
                        tableInvaders[i][0] = null;
                    }
                }, 4000)
            }

            else {

                setTimeout(() => {
                    leftPush[i] += moveSide;
                    invaders[i].style.left = `${leftPush[i]}%`;
                    if (tableInvaders[i][1] != null) {
                        tableInvaders[i][1] = `${leftPush[i]}%`
                    }
                    else {
                        tableInvaders[i][1] = null;
                    }
                }, 1000)

                setTimeout(() => {
                    invaderTop3 = parseFloat(invaderTop3) + moveDown;
                    invadersLine3.style.top = `${invaderTop3}%`;
                    if (tableInvaders[i][0] != null) {
                        tableInvaders[i][0] = `${invaderTop3}%`
                    }
                    else {
                        tableInvaders[i][0] = null;
                    }
                }, 2000)

                setTimeout(() => {
                    leftPush[i] -= moveSide;
                    invaders[i].style.left = `${leftPush[i]}%`;
                    if (tableInvaders[i][1] != null) {
                        tableInvaders[i][1] = `${leftPush[i]}%`
                    }
                    else {
                        tableInvaders[i][1] = null;
                    }
                }, 3000)

                setTimeout(() => {
                    invaderTop3 = parseFloat(invaderTop3) + moveDown;
                    invadersLine3.style.top = `${invaderTop3}%`;
                    if (tableInvaders[i][0] != null) {
                        tableInvaders[i][0] = `${invaderTop3}%`
                    }
                    else {
                        tableInvaders[i][0] = null;
                    }
                }, 4000)
            }
        }
        isGameOver(invaderTop1, invaderTop2, invaderTop3);
        setTimeout(() => {
            requestAnimationFrame(() => {
                invadersAreMoving();
            })
        }, 4000);
    }
}

setTimeout(() => {
    invadersAreMoving();
}, 2700)

//*** Is Enemy Here Verification ***//
function isInvaderHere() {
    for (let i = 0; i < tableInvaders.length; i++) {
        if ((parseFloat(tableInvaders[i][0]) < missileY && missileY < parseFloat(tableInvaders[i][0]) + 2) && (parseFloat(tableInvaders[i][1]) < missileX && missileX < parseFloat(tableInvaders[i][1]) + 3)) {
            invaders[i].classList.add("dead")
            tableInvaders[i][0] = null;
            tableInvaders[i][1] = null;
            score += 100;
            showScore.textContent = `${score}`;
            setTimeout(() => {
                invaders[i].classList.remove("invader");
                invaders[i].classList.remove("dead");
            }, 400);
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
})

/*** GameEnd ***/
function isGameOver(a, b, c) {

    if (a >= theGround || b >= theGround || c >= theGround || score == 2700) {
        gameEnd = true;
        invadersAreMoving();
    }
}

/*** Reset ***/
function reset() {
    location.reload();
}

/*** Game First Lauch ***/
invadersAreComing();

/*** Final Boss ***/