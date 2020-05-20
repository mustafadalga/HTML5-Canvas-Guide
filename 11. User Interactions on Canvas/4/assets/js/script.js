window.onload = function() {

    // Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    var boundings = canvas.getBoundingClientRect();
    this.console.log(boundings)

    //Specs
    var balls = 5;
    var ballsArr = [];
    var currentBall = null;

    //Create Balls
    for (let index = 0; index < balls; index++) {
        var radius = getRandomInt(25, 50);
        var randColor = this.createRandomRGBColor();
        var ballColor = 'rgb(' + randColor.r + ', ' + randColor.g + ', ' + randColor.b + ')';
        var ball = new Ball(radius, ballColor);
        ball.context = context;
        ball.x = getRandomInt(radius, canvas.width - radius);
        ball.y = getRandomInt(radius, canvas.height - radius);
        ballsArr.push(ball);
    }

    drawBalls();



    function drawBalls() {
        //Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        //Draws Balls
        for (let index = 0; index < balls; index++) {
            ballsArr[index].draw();
        }
    }

    function isMitOnBall(mx, my) {
        for (let index = balls - 1; index >= 0; index--) {
            if (Math.sqrt(Math.pow((mx - ballsArr[index].x), 2) + Math.pow((my - ballsArr[index].y), 2)) < ballsArr[index].r) {
                currentBall = ballsArr[index];
                break;
            }
        }
    }

    //Mouse Event Handlers
    canvas.addEventListener('mousedown', (event) => {
        var mouseDownX = event.clientX - boundings.left;
        var mouseDownY = event.clientY - boundings.top;

        isMitOnBall(mouseDownX, mouseDownY)

    })

    canvas.addEventListener('mousemove', (event) => {
        var mouseMoveX = event.clientX - boundings.left;
        var mouseMoveY = event.clientY - boundings.top;

        if (currentBall) {
            currentBall.x = mouseMoveX;
            currentBall.y = mouseMoveY;
            drawBalls();
        }
    })
    canvas.addEventListener('mouseup', (event) => {
        var mouseUpX = event.clientX - boundings.left;
        var mouseUpY = event.clientY - boundings.top;
        currentBall = null;
    })


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


function createRandomRGBColor() {
    var red = getRandomInt(0, 257);
    var green = getRandomInt(0, 257);
    var blue = getRandomInt(0, 257);
    return { r: red, g: green, b: blue };
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}