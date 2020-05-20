window.onload = function() {

    // Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    // What is acceleration?
    // Acceleration is the rate of change of velocity of an object with respect to time
    // Acceleration is a vector quantity.
    // Acceleration is represented by the formula:
    // Acceleration = Δv/Δt




    var ball = new Ball(30, 'purple');
    ball.x = 100;
    ball.y = 150;
    ball.context = context;
    ball.draw();



    window.requestAnimationFrame(animationLoop);


    // Velocity
    ball.vx = 1;
    ball.vy = 0.05;


    //Acceleration
    var ax = 1;
    var ay = 0.5;

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update

        // X
        //  ball.vx = ball.vx + ax; //ivme
        //   ball.x = ball.x + ball.vx; //hız artma


        // Y
        ball.vy = ball.vy + ay; //ivme
        ball.y = ball.y + ball.vy;



        // Draw
        ball.draw()

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