"use strict";
exports.__esModule = true;
var canvas_1 = require("./canvas");
var gameInterval;
// let gameCanvas;
var eventCatcherDiv;
var heroX = 10;
var heroY = 10;
var canvas;
function startLoading() {
    eventCatcherDiv = document.getElementById("EventCatcher");
    eventCatcherDiv.addEventListener("mousemove", canvasMove);
    canvas = new canvas_1.Canvas("GraphicsBox");
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
