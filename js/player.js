// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    Entity.call(this, 'images/char-boy.png', 2, 5);
};

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.decrementX = function() {
    this.x--;
    if (this.x < 0) {
        this.x = 0;
    }
};

Player.prototype.incrementX = function() {
    this.x++;
    if (this.x > 4) {
        this.x = 4;
    }
};

Player.prototype.decrementY = function() {
    this.y--;
    if (this.y < 1) {
        this.score();
    }
};

Player.prototype.incrementY = function() {
    this.y++;
    if (this.y > 5) {
        this.y = 5;
    }
};

Player.prototype.die = function() {
    this.reset();    
};

Player.prototype.score = function() {
    this.reset();   
};

Player.prototype.reset = function() {
    this.x = 2;
    this.y = 5;    
};

Player.prototype.update = function() {
    for(var i = 0; i < allEnemies.length; i++) {        
        var enemy = allEnemies[i];
        if ((Math.trunc(enemy.x) === this.x) && (Math.trunc(enemy.y) === this.y)) {            
            this.die();
            break;
        }
    }
};

Player.prototype.handleInput = function(key) {
    switch(key) {
        case "left":
            this.decrementX();        
            break;
        case "right":
            this.incrementX();
            break;
        case "up":
            this.decrementY();
            break;
        case "down":
            this.incrementY();
            break;
    }
};