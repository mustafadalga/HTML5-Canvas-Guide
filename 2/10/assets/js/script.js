window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    // drawQuadraticCurve(500, 250, 600, 50, 700, 250)
    //   drawBezierCurve(200, 250, 100, 100, 500, 100, 400, 250)


    // drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180)
    // drawQuadraticCurve(670, 180, 670, 300, 430, 520);
    // drawBezierCurve(430, 130, 390, 10, 190, 10, 190, 180)
    // drawQuadraticCurve(190, 180, 190, 300, 430, 520);


    function drawQuadraticCurve(startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth) {
        context.beginPath();
        context.strokeStyle = curveColor || "red";
        context.lineWidth = curveWidth || 5;
        context.moveTo(startX, startY);
        context.quadraticCurveTo(controlX, controlY, endX, endY);
        context.stroke();
    }

    function drawBezierCurve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, curveColor, curveWidth) {
        context.beginPath();
        context.strokeStyle = curveColor || "red";
        context.lineWidth = curveWidth || 5;
        context.moveTo(startX, startY);
        context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY, );
        context.stroke();
    }

    // drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180)
    // drawQuadraticCurve(670, 180, 670, 380, 430, 520);
    // drawBezierCurve(430, 130, 390, 10, 190, 10, 190, 180)
    // drawQuadraticCurve(190, 180, 190, 380, 430, 520);

    context.beginPath();

    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.moveTo(430, 130);
    context.bezierCurveTo(470, 10, 670, 10, 670, 180);
    context.quadraticCurveTo(670, 380, 430, 520);
    context.quadraticCurveTo(190, 380, 190, 180);
    context.bezierCurveTo(190, 10, 380, 10, 430, 130);
    context.stroke();
}