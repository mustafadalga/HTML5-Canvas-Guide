window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    // Polygon Variables
    let sides = 7,
        radius = 100,
        centerX = 400,
        centerY = 300,
        startAngle = 200,
        angle = (2 * Math.PI) / sides;


    //Start Drawing
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.lineJoin = "round"

    //Beiging Point Coordinates
    let beginX = centerX + radius * Math.cos(startAngle);
    let beginY = centerY - radius * Math.sin(startAngle);

    context.moveTo(beginX, beginY);

    //Draw Lines
    for (let i = 1; i <= sides; i++) {
        let currentAngle = startAngle + i * angle;
        let currentPointX = centerX + radius * Math.cos(currentAngle);
        let currentPointY = centerY - radius * Math.sin(currentAngle);

        context.lineTo(currentPointX, currentPointY);
    }
    context.closePath();
    context.stroke();

}