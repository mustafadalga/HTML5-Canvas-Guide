function Ball(radius, color) {
    // Base
    var ball = this;

    // Specifications
    ball.r = radius || 10; // ball radius
    ball.c = color || 'red'; // ball color
    ball.x = 0; // center x
    ball.y = 0; // center y
    ball.m = 0; // mass
    ball.vx = 0; // velocity of x direction of ball
    ball.vy = 0; // velocity of y direction of ball
    ball.context = null // the drawing context of ball
}

Ball.prototype.draw = function() {
    // Base
    var ball = this;

    // Check Context
    if (!ball.context) { return }

    // Draw Ball
    ball.context.beginPath();
    ball.context.fillStyle = ball.c;
    ball.context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    ball.context.fill();
};