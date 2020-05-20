window.onload = function() {

    // Canvas Definitions
    var canvas = document.querySelector("canvas");


    // Game Object
    var flappyMonster = new FlappyMonster(canvas);
    flappyMonster.start();
};