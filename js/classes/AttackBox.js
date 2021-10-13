import c from './Constants.js';
import DiceNumberIcon from './DiceNumberIcon.js';
import InfoBox from './InfoBox.js';

function AttackBox(x, y, attackInfo) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.attackInfo = attackInfo;
    
    this.setup();
}
var p = createjs.extend(AttackBox, createjs.Container);


p.setup = function() {
    var attackBoxWidth = c.mmToPix(43);
    var attackContainer = new createjs.Container();
    var txt = c.createText(c.FONTS.HEADER, this.attackInfo.label);
    txt.x = c.mmToPix(1);
    txt.y = c.mmToPix(1.25);
    attackContainer.addChild(txt);
    var b = attackContainer.getBounds();
    var txtB = txt.getBounds();

    var whiteDiceNumber = new DiceNumberIcon(this.attackInfo.whiteDice, txtB.height - c.mmToPix(1));
    whiteDiceNumber.x = c.mmToPix(34);
    whiteDiceNumber.y = c.mmToPix(2.5);
    attackContainer.addChild(whiteDiceNumber);

    var blueDiceNumber = new DiceNumberIcon(this.attackInfo.blueDice, txtB.height - c.mmToPix(1), "#3f8cc4", c.COLORS.WHITE);
    blueDiceNumber.x = c.mmToPix(39);
    blueDiceNumber.y = c.mmToPix(2.5);
    attackContainer.addChild(blueDiceNumber);

    if (this.attackInfo.rules) {
        var line = new createjs.Shape();
        line.graphics.setStrokeStyle(c.BOX_BORDER_STROKE)
          .beginStroke(c.COLORS.BORDER_COLOR)
          .moveTo(0, b.height + c.mmToPix(2.5))
          .lineTo(attackBoxWidth, b.height + c.mmToPix(2.5))
          .endStroke();
        attackContainer.addChild(line);

        var rulesYValue = b.height + c.mmToPix(4);
        this.attackInfo.rules.forEach(function(r) {
            txt = c.createText(c.FONTS.SUBHEADER, r);
            txt.lineWidth = c.mmToPix(40);
            txt.lineHeight = 24;
            var b = txt.getBounds();
            txt.x = c.mmToPix(1);
            txt.y = rulesYValue;
            attackContainer.addChild(txt);
            rulesYValue = txt.y + b.height + c.mmToPix(1);
        });
    }

    var attackContainerBounds = attackContainer.getBounds();
    var boxHeight = attackContainerBounds.height + c.mmToPix(2);
    if (!this.attackInfo.rules) {
        boxHeight += c.mmToPix(0.5);
    }
    var theBox = new InfoBox(0, 0, attackBoxWidth, boxHeight); // brawl
    this.addChild(theBox);
    this.addChild(attackContainer);
};

AttackBox = createjs.promote(AttackBox, "Container");

export default AttackBox