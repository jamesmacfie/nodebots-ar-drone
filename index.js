var keypress = require("keypress");
var drone = require('ar-drone').createClient();

keypress(process.stdin);
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);

console.log('Fly my pretty');

process.stdin.on("keypress", function(ch, key) {
	if (!key) {
		return;
	}

	var action = key.name;

	if (action == 'q') {
		setTimeout(process.exit, 500);
		return;
	}

	console.log(action);
	var actionDict = {
		u: drone.up,
		d: drone.downn,
		t: drone.takeoff,
		l: drone.land,
		space: drone.stop,
		left: drone.counterClockwise(0.2),
		right: drone.clockwise(0.2),
		up:	drone.front(0.2),
		down: drone.back(0.2)
	};
});

