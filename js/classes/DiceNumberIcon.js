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
    
    this.setup();
}
var p = createjs.extend(DiceNumberIcon, createjs.Container);


p.setup = function() {
    var background = new createjs.Shape();
    background.graphics
        .beginFill(this.bgColor)
        .setStrokeStyle(c.BOX_BORDER_STROKE)
        .beginStroke(c.COLORS.BLACK)
        .drawPolyStar(0, 0, this.height, 6, 0, -90);
    this.addChild(background);

    var txt = c.createText("38px Teko", this.number);
    var b = txt.getBounds();
    txt.color = this.txtColor;
    txt.regX = b.width / 2;
    txt.regY = b.height / 2;
    this.addChild(txt);
};

DiceNumberIcon = createjs.promote(DiceNumberIcon, "Container");

export default DiceNumberIcon