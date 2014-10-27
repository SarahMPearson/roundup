var menu = (function(){
  var o = {
    preload: preload,
    create: create,
    update: update
  };

  function preload(){
    game.load.image('sky', '/assets/sky.png');
    game.load.spritesheet('cloud', '/assets/cloud-platform.png', 16, 15)
  }

  function create(){
    game.add.sprite(0, 0, 'sky');
    var cloud = game.add.sprite(0,0, 'cloud');

  }

  function update(){

  }

  return o;
})();
