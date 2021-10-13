import c from './Constants.js';

function CardBackground(x, y, stage) {
    this.Container_constructor();
    
    this.x = x;
    this.y = y;
    this.stageText = stage;
    
    this.setup();
}
var p = createjs.extend(CardBackground, createjs.Container);


p.setup = function() {
    // Top Background
    var rectangle = new createjs.Shape();
    rectangle.graphics.beginFill(c.COLORS.DARK_BG).drawRect(0, 0, c.cardWidth, c.cardHeight);
    rectangle.x = 0;
    rectangle.y = 0;
    this.addChild(rectangle);

    // grid
    var gridLineWidth = c.mmToPix(0.05);
    for(var x = c.mmToPix(3); x < c.cardWidth; x += c.mmToPix(3)) {
      var line = new createjs.Shape();
      line.graphics.setStrokeStyle(gridLineWidth)
        .beginStroke(c.COLORS.BORDER_COLOR)
        .moveTo(x, 0)
        .lineTo(x, c.cardHeight)
        .endStroke();
      this.addChild(line);
    }
    for(var y = c.mmToPix(3); y < c.cardHeight; y += c.mmToPix(3)) {
      var line = new createjs.Shape();
      line.graphics.setStrokeStyle(gridLineWidth)
        .beginStroke(c.COLORS.BORDER_COLOR)
        .moveTo(0, y)
        .lineTo(c.cardWidth, y)
        .endStroke();
      this.addChild(line);
    }

    // fancy corners
    var smallLineThickness = 0.85;
    var thickLineThickness = 1.7;
    var corner = new createjs.Shape();
    corner.graphics.beginFill(c.COLORS.BORDER_COLOR)
    .moveTo(0, 0)
    .lineTo(c.mmToPix(47), 0)
    .lineTo(c.mmToPix(46), c.mmToPix(smallLineThickness)) // angle
    .lineTo(c.mmToPix(32), c.mmToPix(smallLineThickness))
    .lineTo(c.mmToPix(32), c.mmToPix(thickLineThickness))  // vertical line
    .lineTo(c.mmToPix(thickLineThickness), c.mmToPix(thickLineThickness))
    .lineTo(c.mmToPix(thickLineThickness), c.mmToPix(22))
    .lineTo(c.mmToPix(smallLineThickness), c.mmToPix(22))
    .lineTo(c.mmToPix(smallLineThickness), c.mmToPix(30))
    .lineTo(0, c.mmToPix(31))
    .lineTo(0, 0)
    .endStroke();
    this.addChild(corner);

    var topRight = corner.clone(true);
    topRight.x = c.cardWidth;
    topRight.scaleX = -1;
    this.addChild(topRight);

    var triangle = new createjs.Shape();
    var angledSquareHeight = c.mmToPix(5.65);
    triangle.graphics.beginFill(c.COLORS.BORDER_COLOR)
    .moveTo(c.cardWidth - angledSquareHeight, 0)
    .lineTo(c.cardWidth, 0)
    .lineTo(c.cardWidth, angledSquareHeight)
    .lineTo(c.cardWidth - angledSquareHeight, 0)
    .endStroke();
    this.addChild(triangle);

    var bottomLeft = corner.clone(true);
    bottomLeft.y = c.mmToPix(81);
    bottomLeft.scaleY = -1;
    this.addChild(bottomLeft);
    triangle = triangle.clone(true);
    triangle.scaleY = -1;
    triangle.y = c.cardHeight - c.healthBackgroundHeight;
    this.addChild(triangle);

    var bottomRight = corner.clone(true);
    bottomRight.x = c.cardWidth;
    bottomRight.y = c.mmToPix(81);
    bottomRight.scaleX = -1;
    bottomRight.scaleY = -1;
    this.addChild(bottomRight);
    triangle = triangle.clone(true);
    triangle.scaleY = -1;
    triangle.scaleX = -1;
    triangle.y = c.cardHeight - c.healthBackgroundHeight;
    triangle.x = c.cardWidth;
    this.addChild(triangle);
};

CardBackground = createjs.promote(CardBackground, "Container");

export default CardBackground