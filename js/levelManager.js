var LevelManager = function() {
    this.minSpeed = 1;
    this.maxSpeed = 3;
    this.level = 1;
};

LevelManager.prototype.increaseSpeed = function() {
    this.minSpeed++;
    this.maxSpeed++;
};

LevelManager.prototype.increaseLevel = function() {
    this.increaseSpeed();        
    this.level++;
    this.render();
};

LevelManager.prototype.randomRow = function() {
    return Math.floor(Math.random()*(3 - 1 + 1) + 1);
};

LevelManager.prototype.randomSpeed = function() {
    return Math.floor(Math.random()*(this.maxSpeed - this.minSpeed + 1) + this.minSpeed);
}

LevelManager.prototype.render = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000"; 
    ctx.fillText("Level: " + this.level, 0, 45);
}
