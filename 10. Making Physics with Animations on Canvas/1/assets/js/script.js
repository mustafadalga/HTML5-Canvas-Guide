window.onload = function() {

    // Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");


    var ball = new Ball(30, 'purple');
    ball.x = 400;
    ball.y = 320;
    ball.context = context;
    ball.draw();



    //window.requestAnimationFrame(animationLoop);

    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update

        // Draw

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