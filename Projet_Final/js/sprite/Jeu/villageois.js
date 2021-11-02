class villageois {
    constructor() {
		this.node = document.createElement("div");
		this.node.id = "woman" + y;

		document.getElementById("pop").appendChild(this.node);

		let columnCount = 6;
		let rowCount = 1;
		let refreshDelay = 100;
		let loopCol = true;
		let scale = 1.0;

		this.tiledImage = new TiledImage("img/Jeu/Woman_walk_inv.png", columnCount, rowCount, refreshDelay, loopCol, scale, "woman" + y);
		this.tiledImage.changeRow(0); 
		this.tiledImage.changeMinMaxInterval(0, 6);

		this.x = 1300;
		this.y = 52;

		this.alive = true;
	}

	tick () {	
        let steam = spriteList[1];
        let distance = this.x - steam.x;

        if ( steam.tiledImage.imageCurrentRow != 5 && (distance > 1 && distance < 10) ) {
            this.tiledImage.changeMinMaxInterval(0, 6, () => {
				this.alive = false;
				gameover = true;
            })
        }

        if ( this.alive == true ) {
            this.x--;	
            this.tiledImage.tick(this.x, this.y);
        }

        return this.alive;
    }
}