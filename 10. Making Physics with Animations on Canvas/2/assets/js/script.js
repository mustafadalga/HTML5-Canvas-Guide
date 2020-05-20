window.onload = function() {

    // Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    // What is velocity?
    // Velocity is the rate of change in an object's position.
    // Velocity has a magnitude (speed) and a direction.
    // Velocity is a vector quantity.
    // Velocity is represented by the formula:
    // Velocity = Δx/Δt



    var ball = new Ball(30, 'purple');
    ball.x = 100;
    ball.y = 150;
    ball.context = context;
    ball.draw();



    window.requestAnimationFrame(animationLoop);


    // Velocity
    ball.vx = 1;
    ball.vy = 1;

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        ball.x = ball.x + ball.vx;
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