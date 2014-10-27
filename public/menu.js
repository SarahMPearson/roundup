var menu = (function(){
  var o = {
    preload: preload,
    create: create,
    update: update
  };

  function preload(){

    game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);


  }

var button;

  function create(){


    button = game.add.button(game.world.centerX - 95, 400, 'button', startClick, this, 2, 1, 0);


  }

  function update(){

  }

  return o;
})();

function startClick () {

    this.game.state.start('level');

}
