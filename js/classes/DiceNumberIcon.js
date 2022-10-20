import c from './Constants.js';
import InfoBox from './InfoBox.js';

function DiceNumberIcon(number, height, bgColor, txtColor) {
    this.Container_constructor();
    
    this.number = number;
    this.height = height;
    if (bgColor) {
        this.bgColor = bgColor;
    } else {
        this.bgColor = c.COLORS.WHITE;
    }
    if (txtColor) {
        this.txtColor = txtColor;
    } else {
        this.txtColor = c.COLORS.BLACK;
    }

    this.backgroundShape = null;
    this.textObject = null;
    
    this.setup();
    var _this = this;
    this.addEventListener("click", function(event) { 
        var newNumber = prompt("New Value?");
        _this.number = newNumber;
        _this.removeChild(_this.backgroundShape);
        _this.removeChild(_this.textObject);
        _this.setup();
        _this.stage.update();
    });
}
var p = createjs.extend(DiceNumberIcon, createjs.Container);


p.setup = function() {
    this.backgroundShape = new createjs.Shape();
    this.backgroundShape.graphics
        .beginFill(this.bgColor)
        .setStrokeStyle(c.BOX_BORDER_STROKE)
        .beginStroke(c.COLORS.BLACK)
        .drawPolyStar(0, 0, this.height, 6, 0, -90);
    this.addChild(this.backgroundShape);

    this.textObject = c.createText("38px Teko", this.number);
    var b = this.textObject.getBounds();
    this.textObject.color = this.txtColor;
    this.textObject.regX = b.width / 2;
    this.textObject.regY = b.height / 2;
    this.addChild(this.textObject);
};

DiceNumberIcon = createjs.promote(DiceNumberIcon, "Container");

export default DiceNumberIcon