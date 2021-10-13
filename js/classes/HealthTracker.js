import c from './Constants.js';

function HealthTracker(x, y, startingHealth, endingHealth) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.startingHealth = startingHealth;
    this.endingHealth = endingHealth;
    
    this.setup();
}
var p = createjs.extend(HealthTracker, createjs.Container);


p.setup = function() {
    // Health Background
    var rectangle = new createjs.Shape();
    rectangle.graphics.beginFill(c.COLORS.LIGHT_BG).drawRect(0, 0, c.cardWidth, c.healthBackgroundHeight);
    this.addChild(rectangle);

    var txt = c.createText(c.FONTS.SUBHEADER, "HEALTH");
    let b = txt.getBounds();
    txt.rotation = -90;
    txt.regX = b.width / 2;
    txt.regY = b.height / 2;
    txt.x = c.mmToPix(5);
    txt.y = c.healthBackgroundHeight / 2;
    this.addChild(txt);

    var damageContainer = new createjs.Container();
    for(var i = this.startingHealth; i >= this.endingHealth; i--) {
        var txt = c.createText(c.FONTS.SUPERNUMBER, i);
        b = txt.getBounds();
        txt.regX = b.width / 2;
        txt.regY = b.height / 2;
        txt.x = (this.startingHealth - i) * c.mmToPix(17);
        txt.y = c.healthBackgroundHeight / 2 + c.mmToPix(1);
        damageContainer.addChild(txt);
    }
    var txt = c.createText(c.FONTS.SUPERNUMBER, "-");
    b = txt.getBounds();
    txt.regX = b.width / 2;
    txt.regY = b.height / 2;
    txt.x = (this.startingHealth - this.endingHealth + 1) * c.mmToPix(17);
    txt.y = c.healthBackgroundHeight / 2 + c.mmToPix(1);
    damageContainer.addChild(txt);

    b = damageContainer.getBounds();
    damageContainer.x = c.cardWidth - c.mmToPix(11) - b.width;
    this.addChild(damageContainer);
};

HealthTracker = createjs.promote(HealthTracker, "Container");

export default HealthTracker