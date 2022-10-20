import c from './Constants.js';
import InfoBox from './InfoBox.js';

function NameBox(x, y, name, faction) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.name = name;
    this.faction = faction;
    this.boxWidth = c.mmToPix(41);

    this.nameTextObject = null;
    
    this.setup();

    var _this = this;
    this.addEventListener("click", function(event) { 
        var newName = prompt("New Value?");
        _this.name = newName;
        _this.removeChild(_this.nameTextObject);
        _this.addNameTextObject();
        _this.stage.update();
    });
}
var p = createjs.extend(NameBox, createjs.Container);


p.setup = function() {
    var theBox = new InfoBox(0, 0, this.boxWidth, c.mmToPix(9));
    this.addChild(theBox);
    this.addNameTextObject();
    var txt = c.createText(c.FONTS.SUBHEADER, this.faction + " / MONSTER");
    var b = txt.getBounds();
    txt.x = (this.boxWidth / 2) - (b.width / 2);
    txt.y = c.mmToPix(5.5);
    this.addChild(txt);
};

p.addNameTextObject = function() {
    this.nameTextObject = c.createText(c.FONTS.HEADER, this.name);
    var b = this.nameTextObject.getBounds();
    this.nameTextObject.x = (this.boxWidth / 2) - (b.width / 2);
    this.nameTextObject.y = c.mmToPix(1);
    this.addChild(this.nameTextObject);
}

NameBox = createjs.promote(NameBox, "Container");

export default NameBox