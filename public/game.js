var level = (function(){
  var o = {
    l: {},
    preload: preload,
    create: create,
    update: update
  };

  function preload(){
    game.load.image('sky', '/assets/sky.png');
    game.load.spritesheet('dog', '/assets/baddie.png', 32, 32);
  }

  function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    o.l.bg = game.add.sprite(0, 0, 'sky');
    o.l.dog = game.add.sprite(30, 30, 'dog', 2);

    game.physics.arcade.enable(o.l.dog);

    o.l.dog.body.bounce.y = 0.2;
    o.l.dog.body.gravity.y = 300;
    o.l.dog.body.collideWorldBounds = true;

    o.l.dog.animations.add('left', [1, 0, 1], 10, false);
    o.l.dog.animations.add('right', [2, 3, 2], 10, false);

    o.l.cursors = game.input.keyboard.createCursorKeys();
  }

  function update(){
    o.l.dog.body.velocity.x = 0;

    if(o.l.cursors.left.isDown){
      o.l.dog.body.velocity.x = -150;
      o.l.dog.animations.play('left');
    }else if(o.l.cursors.right.isDown){
      o.l.dog.body.velocity.x = 150;
      o.l.dog.animations.play('right');
    }

    if(o.l.cursors.up.isDown && o.l.dog.body.touching.down){
      o.l.dog.body.velocity.y = -350;
    }
  }

  return o;
})();
