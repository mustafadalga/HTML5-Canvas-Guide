window.onload = function() {

    // Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");



    var g = 0.098; //gravity

    //Ball 1
    var ball1 = new Ball(20, 'purple');
    ball1.x = 200;
    ball1.y = 80;
    ball1.context = context;
    ball1.draw();



    //Ball 2
    var ball2 = new Ball(20, 'red');
    ball2.x = 300;
    ball2.y = 80;
    ball2.context = context;
    ball2.draw();


    //Ball 3
    var ball3 = new Ball(20, 'red');
    ball3.x = 500;
    ball3.y = 500;
    ball3.context = context;
    ball3.draw();

    window.requestAnimationFrame(animationLoop);


    //Velocity
    ball1.vy = 0;
    ball2.vy = 5;
    ball3.vy = -10;



    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update

        //Ball 1
        ball1.vy = ball1.vy + g;
        ball1.y = ball1.y + ball1.vy;

        //Ball 2
        ball2.vy = ball2.vy + g;
        ball2.y = ball2.y + ball2.vy;

        //Ball 3
        ball3.vy = ball3.vy + g;
        ball3.y = ball3.y + ball3.vy;

        // Draw
        ball1.draw()
        ball2.draw()
        ball3.draw()

        // Animate
        window.requestAnimationFrame(animationLoop);
    }


    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
};