var menu = (function(){
  var o = {
    preload: preload,
    create: create,
    update: update
  };

  function preload(){
    game.load.image('sky', '/assets/sky.png');
  }

  function create(){
    game.add.sprite(0, 0, 'sky');
  }

  function update(){

  }

  return o;
})();
