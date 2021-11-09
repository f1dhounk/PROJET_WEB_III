window.addEventListener("load", () => {
    applyStyles();
});


const applyStyles = iframe => {
	let styles = {
		fontColor : "#333",
		backgroundColor : "rgba(255,255,255, 0.9)",
		fontGoogleName : "Sofia",
		fontSize : "20px",
		hideIcons : false ,
		inputBackgroundColor : "red",
		inputFontColor : "blue",
	}
	
	setTimeout(() => {
		iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
    }, 100);
}
