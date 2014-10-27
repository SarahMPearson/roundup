var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('menu', menu);
game.state.add('level', level);
// game.state.start('menu');
game.state.start('level');
