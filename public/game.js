var level = (function(){
  var o = {
    l: {},
    preload: preload,
    create: create,
    update: update
  };

  var platforms;

  function preload(){
    game.load.image('ground', 'assets/platform.png');
    // game.load.spritesheet('platform', 'assets/cloud-platform.png', 16, 15);
    game.load.image('sky', '/assets/sky.png');
    game.load.image('cloud', '/assets/snow.png');
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

    //cloud platform
    //  The platforms group contains the ground and the 2 ledges we can jump on
    o.l.platforms = game.add.group();
    o.l.platforms.enableBody = true;

    // platforms.angle = 180
    // Here we create the ground.
    var ground = o.l.platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2,2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = o.l.platforms.create(300, 300, 'ground');

    ledge.body.immovable = true;

    ledge = o.l.platforms.create(-150, 250, 'ground');

    ledge.body.immovable = true;

    // ledge.scale.setTo();
    ledge.angle = 180

    // platforms = game.add.sprite(400,540, 'platform');
    // platforms.scale.setTo(0.3);
    // platforms.angle = 180
    // platforms.enableBody = true;

    // Here we create the ground.
    // var ground = platforms.create(0, game.world.height - 64, 'platform');

  }

  function update(){
    game.physics.arcade.collide(o.l.dog, o.l.platforms);
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
