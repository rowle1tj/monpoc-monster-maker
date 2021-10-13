import c from './Constants.js';
import InfoBox from './InfoBox.js';

function StageBox(x, y, stage) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.stageText = stage;
    
    this.setup();
}
var p = createjs.extend(StageBox, createjs.Container);


p.setup = function() {
    var boxWidth = c.mmToPix(41);
    var theBox = new InfoBox(0, 0, boxWidth, c.mmToPix(3));
    this.addChild(theBox);
    var txt = c.createText(c.FONTS.SUBHEADER, this.stageText);
    var b = txt.getBounds();
    txt.x = (boxWidth / 2) - (b.width / 2);
    txt.y = c.mmToPix(0.6);
    this.addChild(txt);
};

StageBox = createjs.promote(StageBox, "Container");

export default StageBox