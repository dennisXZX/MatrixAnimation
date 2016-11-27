function Matrix(symbolString, fontSize) {

	const canvas = document.getElementById("canvas");
	// The getContext() method returns an object that provides methods and properties for drawing on the canvas.
	const canvasCTX = canvas.getContext("2d");

	// making the canvas to fit the visible screen
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	// converting the string into an array of single characters
	const symbol = symbolString.split("");

	// number of columns for the rain
	const columns = canvas.width / fontSize; 

	// an array of drops - one drop for each column
	let drops = [];

	// initialize all the drops, calculating drops number based on column number
	// setting y coordinates of all drops to 1 initially - [1, 1, 1, 1, 1, 1, 1...]
	for (let x = 0; x < columns; x++) {
		drops[x] = 1; 
	}

	// drawing the characters
	function draw() {

		// set the canvas to a translucent black which fills the whole screen
		canvasCTX.fillStyle = "rgba(0, 0, 0, 0.05)";
		// context.fillRect(x, y, width, height);
		canvasCTX.fillRect(0, 0, canvas.width, canvas.height);
		
		// set the text to dark green
		canvasCTX.fillStyle = "#0F0"; 
		canvasCTX.font = font_size + "px arial";

		// looping over drops
		for (let i = 0; i < drops.length; i++) {

			// retrieve a random character to print
			const text = symbol[Math.floor(Math.random() * symbol.length)];

			// context.fillText(text, x, y, maxWidth);
			canvasCTX.fillText(text, i * font_size, drops[i] * font_size);

			// sending the drop back to the top randomly after it has gone vertically beyond the screen
			// adding a randomness to the reset (Math.random() > 0.975) to make the drops scattered on the y axis
			if(drops[i] * font_size > canvas.height && Math.random() > 0.975 ){
				drops[i] = 0;
			}
			
			// incrementing y coordinate
			drops[i] += 1;

		} // end of for loop

	} // end of draw()

	return draw;

}