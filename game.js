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
  this.load.image('background', 'assets/images/backgroundtwo.jpg');
}

function create() {
    // Add background image
    var bg = this.add.image(0, 0, 'background').setOrigin(0.5, 0.5);

    // Resize background image to fit game canvas
    bg.displayWidth = this.sys.game.config.width;
    bg.displayHeight = this.sys.game.config.height;

    // ...
}

function update () {
    // Define game logic and update game state here
}