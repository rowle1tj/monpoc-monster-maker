let constants = {
    COLORS: {
        DARK_BG: "#010310",
        LIGHT_BG: "#094a50",
        BORDER_COLOR: "#4ddcec",
        WHITE: "#FFFFFF",
        BLACK: "#000000"
    },
    FONTS: {
        HEADER: "44px Teko",
        SUBHEADER: "20px Roboto",
        SUPERNUMBER: "100px Roboto"
    },
    scaleMultiplier: 10,
    BOX_BORDER_STROKE: 4,
    mainContentAreaHeight: 810
};

constants.mmToPix = function(mm) {
    return mm * constants.scaleMultiplier;
}
constants.createText = function (font, text) {
    var txt = new createjs.Text();
    txt.font = font;
    txt.color = "#ffffff";
    txt.text = text;
    return txt;
};
constants.cardWidth = constants.mmToPix(139);
constants.cardHeight = constants.mmToPix(107);
constants.healthBackgroundHeight = constants.cardHeight - constants.mainContentAreaHeight;

export default constants;