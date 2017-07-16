// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i = 0; i < 3; i++) {
  var enemy = new Enemy();
  allEnemies.push(enemy);
}

var selector = new  Selector();
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };

    if (selector.charSelected) {
        player.handleInput(allowedKeys[e.keyCode]);
    }
    else {
        selector.handleInput(allowedKeys[e.keyCode]);
    }   
    
});
