let spriteList = [];
let y = 2;
let gameover = false;
let fin = false;


let leftArrowOn = false;
let rightArrowOn = false;
let upArrowOn = false;
let downArrowOn = false;

window.addEventListener("load", () => {

	if ( fin == false ) {
		spriteList.push(new game_over("gameover"));
		spriteList.push(new steam());
		

		setInterval(() => {
			spriteList.push(new villageois());
			y++;
		}, 4000);

		setInterval(() => {
			spriteList.push(new centipede());
			y++;
		}, 4000);
	}
	
	
	tick();
});

const tick = () => {
	for (let i = 0; i < spriteList.length; i++) {
        const element = spriteList[i];
		element.tick();
	}

	if ( fin == false ) {
		window.requestAnimationFrame(tick);
	}
}

document.addEventListener("keydown", e => {
	if (e.which == 37) leftArrowOn = true;
	else if (e.which == 39) rightArrowOn = true;
	else if (e.which == 38) upArrowOn = true;
	else if (e.which == 40) downArrowOn = true;
});

document.addEventListener("keyup", e => {
	if (e.which == 37) leftArrowOn = false;
	else if (e.which == 39) rightArrowOn = false;
	else if (e.which == 38) upArrowOn = false;
	else if (e.which == 40) downArrowOn = false;
});