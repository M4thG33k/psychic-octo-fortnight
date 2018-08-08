export class Canvas {
    private canvas;

    public constructor(elementId: string) {
        this.canvas = document.getElementById(elementId);
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

    public clearDraw(): void {
        this.getContext().clearRect(0, 0, this.getWidth(), this.getHeight());
    }
}