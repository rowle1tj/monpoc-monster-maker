import c from './Constants.js';
import InfoBox from './InfoBox.js';

function StatBox(x, y, statLabel, stat) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.statLabel = statLabel;
    this.stat = stat;
    this.boxWidth = c.mmToPix(11);
    this.boxHeight = c.mmToPix(14);
    
    this.numberTextObject = null;

    this.setup();
    
    var _this = this;
    this.addEventListener("click", function(event) { 
        var newNumber = prompt("New Value?");
        _this.stat = newNumber;
        _this.removeChild(_this.numberTextObject);
        _this.addSuperNumber();
        _this.stage.update();
    });
}
var p = createjs.extend(StatBox, createjs.Container);


p.setup = function() {
    var theBox = new InfoBox(0, 0, this.boxWidth, this.boxHeight); // speed
    this.addChild(theBox);
    var txt = c.createText(c.FONTS.SUBHEADER, this.statLabel);
    let b = txt.getBounds();
    txt.rotation = -90;
    txt.regX = b.width / 2;
    txt.regY = b.height / 2;
    txt.x = c.mmToPix(2);
    txt.y = this.boxHeight / 2;
    this.addSuperNumber();
    this.addChild(txt);
};

p.addSuperNumber = function() {
    this.numberTextObject = c.createText(c.FONTS.SUPERNUMBER, this.stat);
    let b = this.numberTextObject.getBounds();
    this.numberTextObject.regX = b.width / 2;
    this.numberTextObject.regY = b.height / 2;
    this.numberTextObject.x = (this.boxWidth / 2) + c.mmToPix(1);
    this.numberTextObject.y = this.boxHeight / 2 + c.mmToPix(1);
    this.addChild(this.numberTextObject);
};

window.StatBox = createjs.promote(StatBox, "Container");

export default StatBox