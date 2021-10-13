import c from './Constants.js';

function InfoBox(x, y, w, h) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.setup();
}
var p = createjs.extend(InfoBox, createjs.Container);

p.setup = function() {
    var rectangle = new createjs.Shape();
    rectangle.graphics
        .beginFill(c.COLORS.LIGHT_BG)
        .setStrokeStyle(c.BOX_BORDER_STROKE)
        .beginStroke(c.COLORS.BORDER_COLOR)
        .drawRect(0, 0, this.w, this.h);
    this.addChild(rectangle);
};

InfoBox = createjs.promote(InfoBox, "Container");

export default InfoBox