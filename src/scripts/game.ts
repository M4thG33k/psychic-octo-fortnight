import {Canvas} from "./canvas";
import {Tower} from "./tower";

export class Game {
    private interval: number;
    private eventHandler: any;
    private canvas: Canvas;

    private x: number = 10;
    private y: number = 10;

    private tower: Tower;

    private scale: number = 1;

    public constructor() {
    }

    public start() {
        let temp = this;

        this.eventHandler = document.getElementById("EventCatcher");
        this.eventHandler.addEventListener("mousemove", (x: any) => temp.canvasMove(x));
        this.eventHandler.addEventListener("click", (x:any)=>temp.clickEventHandler(x));

        this.canvas = new Canvas("GraphicsBox", this.scale);
        this.tower = new Tower(this.canvas);

        this.interval = setInterval(function () {
            temp.hasLoaded();
        }, 250);

    }

    protected clickEventHandler(E: any){
        console.log(this.getMousePos(E));
        // this.tower.onClickEvent(E);
    }

    protected getMousePos(E: any){
        let rect = this.canvas.getBoundingRect();
        return {
            x: E.clientX - rect.left,
            y: E.clientY - rect.top
        };
    }

    protected hasLoaded() {
        if (true) {
            clearInterval(this.interval);
            this.startGame();
        }
    }

    protected startGame() {
        this.drawTheHero(this.canvas.getContext());
        let temp = this;
        this.interval = setInterval(function () {
            temp.runGame();
        }, 25);
    }

    protected runGame() {
        this.canvas.clearDraw();
        this.drawTheHero(this.canvas.getContext());

        this.canvas.getContext().beginPath();
        this.canvas.getContext().moveTo(this.canvas.getWidth()/2.0, 0);
        this.canvas.getContext().lineTo(this.canvas.getWidth()/2.0, this.canvas.getHeight());
        this.canvas.getContext().stroke();
        this.canvas.getContext().beginPath();
        this.canvas.getContext().moveTo(0, this.canvas.getHeight()/2.0);
        this.canvas.getContext().lineTo(this.canvas.getWidth(), this.canvas.getHeight()/2.0);
        this.canvas.getContext().stroke();

        this.tower.draw();

        // this.canvas.drawCircle("#FF0000", this.canvas.getWidth()/2.0, this.canvas.getHeight()/2.0, 20, "#000000");
        //
        // this.canvas.drawCircleRad("#FF00FF", 0, 0, 10, "#FFFF00");
    }

    protected canvasMove(E: any) {
        // E = E || window.event;
        let mousePos = this.getMousePos(E);

        this.x = mousePos.x;
        this.y = mousePos.y;

        console.log(`Hero coords: (${this.x}, ${this.y})`);
        console.log(`${this.x / this.canvas.getWidth()}, ${this.y / this.canvas.getHeight()})`);
        console.log(`${this.canvas.getWidth()}, ${this.canvas.getHeight()})`);
        // this.x = E.pageX;
        // this.y = E.pageY;
    }

    protected drawTheHero(g: any) {
        this.canvas.drawRect("#0000FF", this.x-10, this.y-10, 20, 20);
        // g.fillStyle = "#0000FF";
        // g.fillRect(this.x / this.scale, this.y / this.scale, 20, 20);
    }
}