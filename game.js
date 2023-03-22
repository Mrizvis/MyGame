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

function preload() {
  // Background
  this.load.image('background', 'assets/images/background.png');
}

function create() {
    // Add background image
    var bg = this.add.image(0, 0, 'background').setOrigin(0, 0);

    // Resize background image to fit game canvas
    bg.displayWidth = this.sys.game.config.width;
    bg.displayHeight = this.sys.game.config.height;

  // Add mana bar
  var bar = this.add.graphics();
  var barWidth = 200;
  var barHeight = 20;
  var barX = 10;
  var barY = 10;
  var barBorderSize = 4;
  var barBorderColor = 0xFFFFFF;
  var barColor = 0x0000FF;
  var mana = 0;
  var manaText = this.add.text(barX + barWidth/2, barY + barHeight/2, '0/100', { fontFamily: 'Arial', fontSize: 16, color: '#FFFFFF' }).setOrigin(0.5);

  function updateBar() {
    bar.clear();
    bar.lineStyle(barBorderSize, barBorderColor, 1);
    bar.fillStyle(barColor, 1);
    bar.fillRect(barX, barY, barWidth * (mana/100), barHeight);
    manaText.setText(mana + '/100');
  }

  updateBar();

  // Increase mana button
  var increaseManaButton = this.add.text(400, 100, 'Increase Mana', { fontFamily: 'Arial', fontSize: 24, color: '#FFFFFF' });
  increaseManaButton.setInteractive();
  increaseManaButton.on('pointerdown', function() {
    if (mana < 100) {
      mana += 10;
      updateBar();
    }
      // Add manaflow text
  var manaflowText = this.add.text(10, 70, '0 mana/s', {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#ffffff'
  });
}
                        function update() {
  // Calculate mana per second
  var manaPerSecond = manaCirculationLevel * 1; // Update this formula as necessary

  // Update mana and manaflow
  mana += manaPerSecond * delta;
  mana = Math.min(mana, maxMana);
  manaText.setText(mana + '/' + maxMana);
  manaBar.displayWidth = (mana / maxMana) * barWidth;
  manaflowText.setText(manaPerSecond + ' mana/s');
  });
var energyChannelsButton;
var manaCirculationButton;
var energyChannelsCost = 1;
var manaCirculationCost = 1;
var manaPerSecond = 0;

function create() {
  // Add buttons
  energyChannelsButton = this.add.text(100, 300, 'Open energy channels', {
    fontSize: '32px',
    fill: '#ffffff',
    backgroundColor: '#008CBA',
    padding: {
      x: 20,
      y: 10
    }
  });
  manaCirculationButton = this.add.text(100, 400, 'Mana circulation', {
    fontSize: '32px',
    fill: '#ffffff',
    backgroundColor: '#008CBA',
    padding: {
      x: 20,
      y: 10
    }
  });

  // Add button events
  energyChannelsButton.setInteractive();
  energyChannelsButton.on('pointerdown', function() {
    if (mana >= energyChannelsCost) {
      mana -= energyChannelsCost;
      energyChannelsCost += 10;
      maxMana += 10;
      manaBar.width = maxMana * 3;
      manaText.text = 'Mana: ' + mana + '/' + maxMana;
      energyChannelsButton.text = 'Open energy channels (' + energyChannelsCost + ')';
    }
  });

  manaCirculationButton.setInteractive();
  manaCirculationButton.on('pointerdown', function() {
    if (mana >= manaCirculationCost) {
      mana -= manaCirculationCost;
      manaCirculationCost *= 2;
      manaPerSecond += 1;
      manaText.text = 'Mana: ' + mana + '/' + maxMana;
      manaCirculationButton.text = 'Mana circulation (' + manaCirculationCost + ')';
    }
  });

  // ...
}

function update() {
  // Add mana per second from mana circulation
  if (manaPerSecond > 0) {
    mana += manaPerSecond;
    if (mana > maxMana) {
      mana = maxMana;
    }
    manaText.text = 'Mana: ' + mana + '/' + maxMana;
  }
}


function update () {
    // Define game logic and update game state here
}
