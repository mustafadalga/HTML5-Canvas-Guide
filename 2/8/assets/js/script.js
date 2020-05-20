window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.moveTo(200, 250);
    context.quadraticCurveTo(600, 10, 400, 250);
    context.stroke();



}