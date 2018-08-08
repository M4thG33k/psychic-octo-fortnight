import {Canvas} from "./canvas";

export class Tower {

    private radius: number = 20;
    private xCoord: number;
    private yCoord: number;

    public constructor(private canvas: Canvas) {
        this.xCoord = this.canvas.getWidth() / 2.0;
        this.yCoord = this.canvas.getHeight() / 2.0;
    }

    public onClickEvent(E: any) {
        console.log("Clicky clicky!");
        const mousePos = {
            x: E.clientX - this.canvas.getOffsetTop(),
            y: E.clientY - this.canvas.getOffsetLeft()
        };
        console.log(mousePos);
    }

    public draw() {
        this.canvas.drawCircle(
            "#AAAAAA",
            this.xCoord,
            this.yCoord,
            this.radius,
            "#555555"
        )
    }
}