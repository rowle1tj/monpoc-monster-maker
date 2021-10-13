import AttackBox from './classes/AttackBox.js';
import CardBackground from './classes/CardBackground.js';
import InfoBox from './classes/InfoBox.js';
import HealthTracker from './classes/HealthTracker.js';
import NameBox from './classes/NameBox.js';
import StageBox from './classes/StageBox.js';
import StatBox from './classes/StatBox.js';
import SpecialRulesBox from './classes/SpecialRulesBox.js';
import c from './classes/Constants.js';

var stage;
var container;
var inputsContainer;
var scaleMultiplier = 10;
var cardWidth = c.mmToPix(139);
var cardHeight = c.mmToPix(107);
var canvasId = "cardCanvas";

var BOX_BORDER_STROKE = 4;
var mainContentAreaHeight = 810;
var healthBackgroundHeight = cardHeight - mainContentAreaHeight;


window.onload = function() {
  var canvas = document.getElementById(canvasId);
  canvas.setAttribute("width", cardWidth);
  canvas.setAttribute("height", cardHeight);

  stage = new createjs.Stage(canvasId);
  container = new createjs.Container();
  inputsContainer = new createjs.Container();

  let specialRules = [
    "GRAPPLER - Enemy models cannot move throught this model or models adjacent to it.  Enemy models are not immune to hazards adjacent to this model.",
    "LIGHTNING ATTACK - This model can make a brawl attack in addition to any other attack it makes during each of your Monster Activations",
    "REACH - This model can make a brawl attack targeting any model within two spaces.  This model can participate in combined brawl attacks against models within two spaces.",
    "WATERLOGGED - This model is immune to hazards while advancing. When this model advances onto a debris tile that is a hazard, flip it to the rubble side."
  ];

  let attacks = [
    {
        label: "BRAWL",
        whiteDice: 8,
        blueDice: 4,
        rules: [
            "FLING - When this attack hits a unit, choose a building or enemy model within five spaces of the unit hit. Roll the dice in play. If the chosen model's DEF is equal to or less than the number of strikes rolled, it takes 1 damage point."
        ]
    },
    {
        label: "POWER",
        whiteDice: 7,
        blueDice: 4
    }
  ];

  let cardBackground = new CardBackground();
  container.addChild(cardBackground);

  let specialRulesBox = new SpecialRulesBox(c.mmToPix(3), c.mmToPix(3), specialRules);
  let nameBox = new NameBox(c.mmToPix(49), c.mmToPix(3), "KRAKENOCTUS", "TRITONS");
  let stageBox = new StageBox(c.mmToPix(49), c.mmToPix(14), "ALPHA");
  let speedBox = new StatBox(c.mmToPix(93), c.mmToPix(3), "SPD", 5);
  let defenceBox = new StatBox(c.mmToPix(107), c.mmToPix(3), "DEF", 9);
  container.addChild(specialRulesBox);
  container.addChild(nameBox);
  container.addChild(stageBox);
  container.addChild(speedBox, defenceBox);
  drawAttackBoxes(attacks);
  let healthTracker = new HealthTracker(0, mainContentAreaHeight, 12, 7);
  container.addChild(healthTracker);

  stage.addChild(container);
  stage.addChild(inputsContainer);
  stage.update();
}

function createText(font, text) {
    var txt = new createjs.Text();
    txt.font = font;
    txt.color = "#ffffff";
    txt.text = text;
    return txt;
}

function drawAttackBoxes(attacks) {
    var attackBoxX = c.mmToPix(93);
    var attackBoxY = c.mmToPix(19);
    var attackBoxWidth = c.mmToPix(43);

    attacks.forEach(function(v) {
        var attackBox = new AttackBox(attackBoxX, attackBoxY, v);
        var b = attackBox.getBounds();
        container.addChild(attackBox);
        attackBoxY += b.height + c.mmToPix(3);
    });
}