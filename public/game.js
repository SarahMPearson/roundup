var level = (function(){
  var o = {
    preload: preload,
    create: create,
    update: update
  };

  var platforms;

  function preload(){
    game.load.image('ground', 'assets/platform.png');
    // game.load.spritesheet('platform', 'assets/cloud-platform.png', 16, 15);

    game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);


    game.load.image('sky', '/assets/sky.png');
  }

  function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, 'sky');

    //cloud platform
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // platforms.angle = 180
    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2,2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;



    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(250, 350, 'ground');

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

  }

  return o;
})();
