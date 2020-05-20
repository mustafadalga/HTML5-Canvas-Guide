window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    context.beginPath();
    context.lineCap = "butt"
    context.lineJoin = "miter"
    context.strokeStyle = "red";
    context.lineWidth = 15;
    context.shadowBlur = 10
    context.shadowColor = "black"
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.moveTo(30, 30);
    context.lineTo(150, 30);
    context.lineTo(30, 150);
    context.lineTo(150, 150);
    context.stroke();


    context.beginPath();
    context.lineCap = "round"
    context.lineJoin = "round"
    context.strokeStyle = "blue";
    context.lineWidth = 15;
    context.shadowBlur = 10
    context.shadowColor = "black"
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.moveTo(320, 30);
    context.lineTo(200, 30);
    context.lineTo(320, 150);
    context.lineTo(200, 150);
    context.stroke();






    context.beginPath();
    context.lineCap = "square"
    context.lineJoin = "bevel"
    context.strokeStyle = "green";
    context.lineWidth = 15;
    context.shadowBlur = 10
    context.shadowColor = "black"
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.moveTo(400, 30);
    context.lineTo(520, 30);
    context.lineTo(400, 150);
    context.lineTo(520, 150);
    context.stroke();

}