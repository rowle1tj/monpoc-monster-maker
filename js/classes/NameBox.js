import c from './Constants.js';
import InfoBox from './InfoBox.js';

function NameBox(x, y, name, faction) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.name = name;
    this.faction = faction;
    
    this.setup();
}
var p = createjs.extend(NameBox, createjs.Container);


p.setup = function() {
    var boxWidth = c.mmToPix(41);
    var theBox = new InfoBox(0, 0, boxWidth, c.mmToPix(9));
    this.addChild(theBox);
    var txt = c.createText(c.FONTS.HEADER, this.name);
    var b = txt.getBounds();
    txt.x = (boxWidth / 2) - (b.width / 2);
    txt.y = c.mmToPix(1);
    this.addChild(txt);

    var txt = c.createText(c.FONTS.SUBHEADER, this.faction + " / MONSTER");
    b = txt.getBounds();
    txt.x = (boxWidth / 2) - (b.width / 2);
    txt.y = c.mmToPix(5.5);
    this.addChild(txt);
};

NameBox = createjs.promote(NameBox, "Container");

export default NameBox