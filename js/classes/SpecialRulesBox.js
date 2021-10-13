import c from './Constants.js';
import InfoBox from './InfoBox.js';

function SpecialRulesBox(x, y, specialRules) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.specialRules = specialRules;
    
    this.setup();
}
var p = createjs.extend(SpecialRulesBox, createjs.Container);

p.setup = function() {
    var boxWidth = c.mmToPix(42);
    var boxHeight = c.mmToPix(54);    

    var specialRulesContainer = new createjs.Container();
    var txt = c.createText(c.FONTS.SUBHEADER, "SPECIAL RULES");
    var b = txt.getBounds();
    txt.regX = b.width / 2;
    txt.regY = b.height / 2;
    txt.x = boxWidth / 2;
    txt.y = c.mmToPix(2);
    specialRulesContainer.addChild(txt);

    var lineYValue = c.mmToPix(4);
    this.specialRules.forEach(function(item, index) {
        txt = c.createText(c.FONTS.SUBHEADER, item);
        txt.lineWidth = c.mmToPix(40);
        txt.lineHeight = 24;
        b = txt.getBounds();
        txt.x = c.mmToPix(1);
        txt.y = lineYValue;
        specialRulesContainer.addChild(txt);
        lineYValue = txt.y + b.height + c.mmToPix(1);
    });

    var b = specialRulesContainer.getBounds();
    var theBox = new InfoBox(0, 0, boxWidth, b.height + c.mmToPix(1.5));
    this.addChild(theBox);
    this.addChild(specialRulesContainer);
};

SpecialRulesBox = createjs.promote(SpecialRulesBox, "Container");

export default SpecialRulesBox