window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let radian = Math.PI / 180;

    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 15;
    context.fillStyle = "orange"
    context.arc(200, 300, 150, radian * 130, 360 * radian, false);
    context.stroke();
    context.fill();



    context.beginPath();
    context.strokeStyle = "orange";
    context.lineWidth = 15;
    context.fillStyle = "orange"
    context.arc(650, 300, 150, radian * 130, 360 * radian, false);
    context.stroke();
    context.fill();

}