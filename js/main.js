var canvas  = document.getElementById('super-js-adventure');
var ctx     = canvas.getContext('2d');
var width   = 256;
var height  = 224;
var key = [0,0,0,0,0];
var link = new Image();

var player  = {
    x: 0,
    y: 0
};

function init() {
	// Initialise the game!
	zoom(3);
	link.src = 'images/link.png';
	player.x = 100;
	player.y = 100;
	Input.init();
}

function zoom(s) {
    canvas.style.cssText = 'width:'+width*s+'px;height:'+height*s+'px;';
    canvas.parentNode.style.cssText = 'width:'+width*s+'px;height:'+height*s+'px;';
}

var x = 0;

// Here's where we handle all the input, logic and drawing to the screen per frame.
function main() {    
	// Handle the Input
	if (key[2]) // up
		player.y -= 4;
	if( key[3]) // down
		player.y += 4;
	if( key[0]) // left
		player.x -= 4;
	if( key[1]) // right
		player.x += 4;

	ctx.clearRect(0, 0, 256, 224);
	/*
    ctx.fillStyle = '#f00';
	ctx.fillRect(x, 0, 50, 50);*/
	ctx.drawImage(link, player.x, player.y);
	x = x + 1;
	
    // call itself by requesting the next animation frame, and so begin the endless loop
    requestAnimationFrame(main);
}

// Initialise
init();

// Start the loop!
requestAnimationFrame(main);