var nextData = [ //4*4
	[2, 2, 0, 0],
	[0, 2, 2, 0],
	[0, 0, 0, 0],
	[0, 0, 1, 0]
];
var gameData = [ //10*20
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var nextDivs = [];
var gameDivs = [];
var initGame = function() {
	for (var i = 0; i < gameData.length; i++) {
		var gameDiv = [];
		for (var j = 0; j < gameData[0].length; j++) {
			var newNode = document.createElement('div');
			newNode.className = 'none';
			newNode.style.top = (i * 20) + 'px';
			newNode.style.left = (j * 20) + 'px';
			document.getElementById('game').appendChild(newNode);
			gameDiv.push(newNode);
		}
		gameDivs.push(gameDiv);
	}
};
var initNext = function() {
	for (var i = 0; i < nextData.length; i++) {
		var nextDiv = [];
		for (var j = 0; j < nextData[0].length; j++) {
			var newNode = document.createElement('div');
			newNode.className = 'none';
			newNode.style.top = (i * 20) + 'px';
			newNode.style.left = (j * 20) + 'px';
			document.getElementById('next').appendChild(newNode);
			nextDiv.push(newNode);
		}
		nextDivs.push(nextDiv);
	}
};
var refreshGame = function() {
	for (var i = 0; i < gameData.length; i++) {
		for (var j = 0; j < gameData[0].length; j++) {
			var item = gameData[i][j];
			if (item == 0) {
				gameDivs[i][j].className = 'none';
			} else if (item == 1) {
				gameDivs[i][j].className = 'done';
			} else if (item == 2) {
				gameDivs[i][j].className = 'current';
			}
		}
	}
};
var refreshNext = function() {
	for (var i = 0; i < nextData.length; i++) {
		for (var j = 0; j < nextData[0].length; j++) {
			var item = nextData[i][j];
			if (item == 0) {
				nextDivs[i][j].className = 'none';
			} else if (item == 1) {
				nextDivs[i][j].className = 'done';
			} else if (item == 2) {
				nextDivs[i][j].className = 'current';
			}
		}
	}
};
initGame();
initNext();
refreshGame();
refreshNext();