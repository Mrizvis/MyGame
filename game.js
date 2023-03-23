var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var maxMana = 100;
var mana = 0;
var manaText;
var EBcost = 5;
var MPSBcost = 5;
var energychannelsButton;
var mpsButton;
var mps = 0; // current mana per second
var mpsText; // text to display current mana per second
var mpsInterval; // setInterval ID for the mana per second function

function preload () {
    // Load game assets here
this.load.image('background', 'assets/images/background.png');
}

function create () {
    // Set up game objects and state here
    // Add background image
    this.add.image(0, 0, 'background').setOrigin(0.5, 0.5);
    
    // Add mana text
    manaText = this.add.text(10, 10, 'Mana: 0/100', { fontSize: '24px', fill: '#fff' });
    // Add mps text
mpsText = this.add.text(10, 40, 'MPS: 0', { fontSize: '24px', fill: '#fff' });
    // Add meditate button, plus mana
    var meditateButton = this.add.text(250, 10, 'Meditate', { fontSize: '24px', fill: '#fff', backgroundColor: '#000' });
    meditateButton.setInteractive();
    meditateButton.on('pointerdown', function () {
        mana += 1;
    });
// Add energy channels button, plus max mana
    energychannelsButton = this.add.text(250, 40, 'Open energy channels /('+ EBcost +')', { fontSize: '24px', fill: '#fff', backgroundColor: '#000' });
    energychannelsButton.setInteractive();
    energychannelsButton.on('pointerdown', function () { 
    if (mana >= EBcost) {
        maxMana += 10;
        mana -= EBcost;
        EBcost += 5;
        updateEBCostText();
    }
    // call updateEBCostText() here to update the button text
    updateEBCostText();
});
// Add mana per second button, plus mps
mpsButton = this.add.text(250, 70, 'Circulate mana /('+ MPSBcost +')', { fontSize: '24px', fill: '#fff', backgroundColor: '#000' });
mpsButton.setInteractive();
mpsButton.on('pointerdown', function () { 
    if (mana >= MPSBcost) {
        mps += 1;
        mana -= MPSBcost;
        MPSBcost += 5;
        updateMPSBcostText();
        updateMPS();
    }
});

}

function update () {
    // Define game logic and update game state here
    
    // Update mana text
    manaText.setText('Mana: '+ mana +' / '+ maxMana +'');
// Update mps text
    mana += mps;
    updateMPS();
}
function updateEBCostText() {
    // Update the text of the increase max mana button to show the current cost
    energychannelsButton.setText('Open energy channels /(' + EBcost  + ')');
}
function updateMPSBcostText() {
    // Update the text of the increase max mana button to show the current cost
    mpsButton.setText('Circulate mana /('+ MPSBcost + ')');
}
function updateMPS() {
    // Update the text of the mps text to show the current mana per second
    mpsText.setText('MPS: ' + mps);
}
function startMPSInterval() {
    mpsInterval = setInterval(function() {
        if (mana < maxMana) {
            mana += mps;
            if (mana > maxMana) {
                mana = maxMana;
            }
        }
    }, 100000000);
}

startMPSInterval();

