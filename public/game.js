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
    game.load.image('star', '/assets/star.png');
    game.load.image('diamond', '/assets/diamond.png');
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

    o.l.platforms = game.add.group();
    o.l.platforms.enableBody = true;

    var ground = o.l.platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2,2);
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = o.l.platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = o.l.platforms.create(-100, 250, 'ground');
    ledge.body.immovable = true;

    o.l.stars = game.add.group();
    o.l.stars.enableBody = true;
    o.l.stars.createMultiple(10, 'star');

    o.l.diamonds = game.add.group();
    o.l.diamonds.enableBody = true;
    o.l.diamonds.createMultiple(10, 'star');

    o.l.stars.forEach(function(s){
      var x = Math.floor(Math.random() * 801 - 32),
          y = Math.floor(Math.random() * 601 - 90);
      s.reset(x, y);
      s.body.gravity.y = 100;
      var tween = game.add.tween(s).to({ x: s.x + 100 }, 1000, Phaser.Easing.Linear.None)
      .to({ x: s.x - 100 }, 1000, Phaser.Easing.Linear.None)
      .loop()
      .start();

    });

    o.l.emitter = game.add.emitter(0, 0, 100);
    o.l.emitter.makeParticles('diamond');
  }

  function update(){
    game.physics.arcade.collide(o.l.dog, o.l.platforms);
    game.physics.arcade.collide(o.l.stars, o.l.platforms);
    game.physics.arcade.overlap(o.l.dog, o.l.stars, collectStar, null, this);
    game.physics.arcade.overlap(o.l.dog, o.l.emitter, collecDiamond, null, this);

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

  function collectStar(dog, star){
    star.kill();
    var x = Math.floor(Math.random() * 801 - 32),
        y = Math.floor(Math.random() * 601 - 90);
    o.l.emitter.x = x;
    o.l.emitter.y = y;
    o.l.emitter.start(true, 2000, null, 10);
  }

  function collecDiamond(dog, diamond){
    diamond.kill();
  }
  return o;
})();
