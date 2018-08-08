export class Canvas {
    private canvas: any;
    private scale: number;

    public constructor(elementId: string, scale: number) {
        this.canvas = document.getElementById(elementId);
        this.scale = scale;

        this.getContext().scale(this.scale, this.scale);
    }

    public getContext() {
        return this.canvas.getContext("2d");
    }

    public getWidth(): number {
        return this.canvas.width;
    }

    public getHeight(): number {
        return this.canvas.height;
    }

    public getOffsetLeft(): number {
        console.log(this.canvas.getOffsetLeft);
        return this.canvas.getOffsetLeft;
    }

    public getOffsetTop(): number {
        return this.canvas.getOffsetTop;
    }

    public getBoundingRect(){
        return this.canvas.getBoundingClientRect();
    }

    public clearDraw(): void {
        this.getContext().clearRect(0, 0, this.getWidth() / this.scale, this.getHeight() / this.scale);
    }

    public drawRect(color: string, xCoord: number, yCoord: number, width: number, height: number) {
        let temp = this.getContext();
        temp.fillStyle = color;
        temp.fillRect(xCoord / this.scale, yCoord / this.scale, width, height);
    }

    public drawCircle(color: string, xCoord: number, yCoord: number, radius: number, borderColor: string | undefined = undefined, borderWidth: number = 2) {
        let temp = this.getContext();
        temp.fillStyle = color;
        temp.beginPath();
        temp.arc(xCoord / this.scale, yCoord / this.scale, radius, 0, 2 * Math.PI, false);
        temp.fill();

        if (borderColor) {
            temp.lineWidth = borderWidth;
            temp.strokeStyle = borderColor;
            temp.stroke();
        }
    }

    public drawCircleRad(color: string, rho: number, theta: number, radius: number, borderColor: string | undefined = undefined, borderWidth: number = 2) {
        let xCoord = (this.getWidth()) / 2.0 + rho * Math.cos(theta);
        let yCoord = (this.getHeight()) / 2.0 + rho * Math.sin(theta);

        this.drawCircle(color, xCoord, yCoord, radius, borderColor, borderWidth)
    }
}