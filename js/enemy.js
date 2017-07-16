var Enemy = function() {
    Entity.call(this, 'images/enemy-bug.png', -1, levelManager.randomRow());
    this.speed = levelManager.randomSpeed();
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.incrementX(dt);
};

Enemy.prototype.incrementX = function(dt) {
    this.x = this.x + (dt * this.speed);

    if (this.x > 5) {
        this.x = -1;
        this.y = levelManager.randomRow();
        this.speed = levelManager.randomSpeed(); 
    }
};