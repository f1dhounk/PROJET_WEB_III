
class centipede {
    constructor() {
		this.node = document.createElement("div");
		this.node.id = "centi" + y;
		
		document.getElementById("pop").appendChild(this.node);

		let columnCount = 4;
		let rowCount = 4;
		let refreshDelay = 100;
		let loopCol = true;
		let scale = 1.0;

		this.tiledImage = new TiledImage("img/Jeu/vilain.png", columnCount, rowCount, refreshDelay, loopCol, scale, "centi" + y)
		this.tiledImage.changeRow(1); 
		this.tiledImage.changeMinMaxInterval(0, 4);

		this.x = 1450;
		this.y = 28;

		this.alive = true;
		this.kill = false;
	}

	

	tick () {	
		let steam = spriteList[1];
		let distance = this.x - steam.x;

		if ( (steam.tiledImage.imageCurrentRow == 3 || steam.tiledImage.imageCurrentRow == 4) && (distance > 1 && distance < 10) ) {
			this.tiledImage.changeRow(2);

			this.tiledImage.changeMinMaxInterval(0, 4, () => {
				document.getElementById("pop").removeChild(this.node);
				this.alive = false;
				
				let val = parseInt(document.querySelector("#kills").value);
				document.querySelector("#kills").value = val + 1;
			})
		}
		else if ( (steam.tiledImage.imageCurrentRow == 0 || steam.tiledImage.imageCurrentRow == 1) && (distance > 1 && distance < 10) ) {
			this.tiledImage.changeRow(3);
			this.kill = true;
			gameover = true;
		}	

		if ( this.alive == true ) {
			this.x--;	
			this.tiledImage.tick(this.x, this.y);
		}

        return this.alive;
    }
}