import c from './Constants.js';
import InfoBox from './InfoBox.js';

function StatBox(x, y, statLabel, stat) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.statLabel = statLabel;
    this.stat = stat;
    
    this.setup();
}
var p = createjs.extend(StatBox, createjs.Container);


p.setup = function() {
    var boxWidth = c.mmToPix(11);
    var boxHeight = c.mmToPix(14);
    var theBox = new InfoBox(0, 0, boxWidth, boxHeight); // speed
    this.addChild(theBox);
    var txt = c.createText(c.FONTS.SUBHEADER, this.statLabel);
    let b = txt.getBounds();
    txt.rotation = -90;
    txt.regX = b.width / 2;
    txt.regY = b.height / 2;
    txt.x = c.mmToPix(2);
    txt.y = boxHeight / 2;
    this.addChild(txt);

    var txt = c.createText(c.FONTS.SUPERNUMBER, this.stat);
    b = txt.getBounds();
    txt.regX = b.width / 2;
    txt.regY = b.height / 2;
    txt.x = (boxWidth / 2) + c.mmToPix(1);
    txt.y = boxHeight / 2 + c.mmToPix(1);
    this.addChild(txt);
};

window.StatBox = createjs.promote(StatBox, "Container");

export default StatBox