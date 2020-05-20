window.onload = function() {

    // Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    var boundings = canvas.getBoundingClientRect();
    var g = 0.098;
    var mouseX = 0,
        mouseY = 0;

    //BALL
    var ball = new Ball(25, 'purple');
    ball.x = 400;
    ball.y = 80;
    ball.context = context;

    //Listener
    canvas.addEventListener('mousemove', (event) => {

        mouseX = event.clientX - boundings.left;
        mouseY = event.clientY - boundings.top;
    })



    window.requestAnimationFrame(animationLoop);



    function animationLoop() {

        // Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update
        // Y
        ball.vy = ball.vy + g; //ivme
        ball.y = ball.y + ball.vy;

        // Mouse Collision
        if (Math.sqrt(Math.pow((ball.x - mouseX), 2) + 2 + Math.pow((ball.y - mouseY), 2)) < ball.r) {
            console.log("boundings")
            ball.vy *= -1;
        }

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