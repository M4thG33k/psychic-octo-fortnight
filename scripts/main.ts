import {Canvas} from "./canvas"

let gameInterval;
// let gameCanvas;
let eventCatcherDiv;

let heroX = 10;
let heroY = 10;

let canvas;

function startLoading() {
    eventCatcherDiv = document.getElementById("EventCatcher");

    eventCatcherDiv.addEventListener("mousemove", canvasMove);

    canvas = new Canvas("GraphicsBox");
    // gameCanvas = document.getElementById("GraphicsBox");

    gameInterval = setInterval(hasLoaded, 250);
}

function hasLoaded() {
    if (true) {
        clearInterval(gameInterval);
        startGame();
    }
}

function startGame() {
    drawTheHero(canvas.getContext());
    // drawTheHero(gameCanvas.getContext("2d"));
    gameInterval = setInterval(runGame, 25);
}

function runGame() {
    canvas.clearDraw();
    drawTheHero(canvas.getContext());
    // gameCanvas.getContext("2d").clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    // drawTheHero(gameCanvas.getContext("2d"));
}

function canvasMove(E) {
    E = E || window.event;
    heroX = E.pageX;
    heroY = E.pageY;
}

function drawTheHero(g) {
    g.fillStyle = "#0000FF";
    g.fillRect(heroX, heroY, 20, 20);
}