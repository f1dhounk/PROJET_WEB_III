class woodCutter {
    constructor() {
        this.node = document.createElement("div");
        this.node.id = "wood";

        document.getElementById("ecran_noir").appendChild(this.node);

        let col = 6;
        let row = 1;
        let refreshDelay = 100;
        let loopCol = true;
        let scale = 3.5;

        this.tiledImage = new TiledImage("img/Histoire/Woodcutter_run.png", col, row, refreshDelay, loopCol, scale, "wood")
        this.tiledImage.changeRow(0);
        this.tiledImage.changeMinMaxInterval(0, 6);

        this.x = 1000;
        this.y = 450;
    }

    tick () {
        this.tiledImage.tick(this.x, this.y);

		return true;
    }
}