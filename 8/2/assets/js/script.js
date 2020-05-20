window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    let ballX = 400;
    let ballY = 300;
    let ballRadius = 30;
    let ballColor = "orange";
    let changeX = 4;
    let changeY = 4;




    window.requestAnimationFrame(animationLoop);


    function animationLoop() {


        //Clear Canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        //Update
        if (ballY + ballRadius > canvas.height) {
            changeY *= -1;
        }
        if (ballX + ballRadius > canvas.width) {
            changeX *= -1;
        }
        if (ballY - ballRadius < 0) {
            changeY *= -1;
        }
        if (ballX - ballRadius < 0) {
            changeX *= -1;
        }


        ballX += changeX;
        ballY += changeY;

        //Draw
        drawBall(ballX, ballY, ballRadius, ballColor)

        //Animate
        window.requestAnimationFrame(animationLoop);


    }

    function drawBall(x, y, radius, color) {
        var radian = Math.PI / 100;

        context.beginPath();
        context.strokeStyle = color;
        context.fillStyle = color;
        context.arc(x, y, radius, 0, 360 * radian, false)
        context.stroke();
        context.fill();
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

}