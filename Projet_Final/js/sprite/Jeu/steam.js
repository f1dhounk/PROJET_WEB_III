class steam {
    constructor() {
		this.node = document.createElement("div");
		this.node.id = "skel";

		document.getElementById("pop").appendChild(this.node);

		let columnCount = 6;
		let rowCount = 6;
		let refreshDelay = 100;
		let loopCol = true;
		let scale = 1.0;

		this.tiledImage = new TiledImage("img/Jeu/steam7.png", columnCount, rowCount, refreshDelay, loopCol, scale, "skel")
		this.tiledImage.changeRow(0); 
		this.tiledImage.changeMinMaxInterval(0, 6);

		this.x = 1;
		this.y = 52;

		this.alive = true;
	}

	tick () {
		if (this.alive == true) {
			if (leftArrowOn) 
				this.tiledImage.changeRow(4);
			else if (rightArrowOn) {
				this.x++;
				this.tiledImage.changeRow(1);
			}
			else if (upArrowOn) {
				this.y = 1;
				this.tiledImage.changeRow(5);
			}
			else if (downArrowOn) 
				this.tiledImage.changeRow(3);
			else
				this.tiledImage.changeRow(0);
		}

		if ( gameover == true ) {
			this.tiledImage.changeRow(1);

			this.tiledImage.changeMinMaxInterval(0, 6, () => {
				document.getElementById("pop").removeChild(this.node);
				this.alive = false;
			})
		}

		if ( this.alive == true ) {
			this.tiledImage.tick(this.x, this.y);
			this.y = 52;
		}
		
		return this.alive;
	}
}