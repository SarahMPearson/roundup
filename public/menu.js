var menu = (function(){
  var o = {
    preload: preload,
    create: create,
    update: update
  };

  function preload(){
    game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
    game.load.image('sky', '/assets/sky.png');
    game.load.spritesheet('cloud', '/assets/cloud-platform.png', 16, 15)
  }

  var button;

  function create(){
    game.add.sprite(0, 0, 'sky');
    var cloud = game.add.sprite(0,0, 'cloud');

    button = game.add.button(game.world.centerX - 95, 400, 'button', startClick, this, 2, 1, 0);

  }

  function update(){

  }


  function startClick () {
    this.game.state.start('level');
  }
  
  return o;
})();
