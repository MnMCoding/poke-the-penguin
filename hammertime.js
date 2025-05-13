let currPenguinTile;
let currPolarbearTiles = [];
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i=0; i < 9; i++) {

        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", pointSystem)
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setPenguin, 750);
    setInterval(setPolarbear, 950);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setPenguin() {
    if (gameOver) {
        return;
    }
99
    if (currPenguinTile) {
        currPenguinTile.innerHTML = "";
    }

    let num = getRandomTile(); 

    if (currPolarbearTiles.includes(num)) {
        return;
    }

    currPenguinTile = document.getElementById(num); 

    let penguin = document.createElement("img");
    penguin.src = "./penguin-150563_640.webp"; 
    currPenguinTile.appendChild(penguin);
}

function setPolarbear() {
    if (gameOver) {
        return;
    }

    currPolarbearTiles.forEach(tileId => {
        let tile = document.getElementById(tileId);
        tile.innerHTML = ""; 
    });
    currPolarbearTiles = []; 

    let numPolarBears = Math.floor(Math.random() * 3) + 1; 
    for (let i = 0; i < numPolarBears; i++) {
        let num;
        do {
            num = getRandomTile();
        } while (currPenguinTile && currPenguinTile.id == num || currPolarbearTiles.includes(num));

        currPolarbearTiles.push(num);
        let polarbear = document.createElement("img");
        polarbear.src = "./polar-bear-155118_640.png"; 
        document.getElementById(num).appendChild(polarbear);
    }
}

function pointSystem() {
    if (gameOver) {
        return;
    }

    if (this == currPenguinTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (currPolarbearTiles.includes(this.id)) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}