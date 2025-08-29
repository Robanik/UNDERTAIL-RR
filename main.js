const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('player', 'assets/sprites/frisk.png');
  this.load.image('background', 'assets/sprites/background.png');
}

function create() {
  this.add.image(400, 300, 'background');
  this.player = this.physics.add.sprite(400, 300, 'player');
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  this.player.setVelocity(0);
  if (this.cursors.left.isDown) this.player.setVelocityX(-200);
  if (this.cursors.right.isDown) this.player.setVelocityX(200);
  if (this.cursors.up.isDown) this.player.setVelocityY(-200);
  if (this.cursors.down.isDown) this.player.setVelocityY(200);
    }
