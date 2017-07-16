var Selector = function() {
    Entity.call(this, 'images/Selector.png', 0, 5);
    this.charSelected = false;
};

Selector.prototype = Object.create(Entity.prototype);
Selector.prototype.constructor = Selector;

Selector.prototype.handleInput = function(key) {
    switch(key) {
        case "left":
            this.decrementX();        
            break;
        case "right":
            this.incrementX();
            break;
        case "space":
            this.selectCharacter();
            break;
    }
};

Selector.prototype.decrementX = function() {
    this.x--;
    if (this.x < 0) {
        this.x = 0;
    }
};

Selector.prototype.incrementX = function() {
    this.x++;
    if (this.x > 4) {
        this.x = 4;
    }
};

Selector.prototype.selectCharacter = function() {
    this.charSelected = true;
    switch (this.x) {
        case 0:
            player.sprite = 'images/char-boy.png';
            break;
        case 1:
            player.sprite = 'images/char-cat-girl.png';
            break;
        case 2:
            player.sprite = 'images/char-horn-girl.png';
            break;
        case 3:
            player.sprite = 'images/char-pink-girl.png';
            break;
        case 4:
            player.sprite = 'images/char-princess-girl.png';
            break;
        default:
            player.sprite = 'images/char-boy.png';           
    }
};