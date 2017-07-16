var Entity = function(sprite, x, y) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
}

Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, (this.y * 75) - (15/ this.y));
}