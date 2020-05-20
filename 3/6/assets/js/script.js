window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')
    let radian = Math.PI / 180;


    context.beginPath();
    context.strokeStyle = "green";
    context.fillStyle = "green";
    context.shadowColor = "blue";
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 5;
    context.rect(150, 100, 150, 400);
    context.stroke();
    context.fill();


    context.beginPath();
    context.strokeStyle = "red"
    context.fillStyle = "red";
    context.shadowColor = "black";
    context.shadowOffsetX = -10;
    context.shadowOffsetY = -10;
    context.shadowBlur = 5;
    context.arc(650, 300, 100, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();
}