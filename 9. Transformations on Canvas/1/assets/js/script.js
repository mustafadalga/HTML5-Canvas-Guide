window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    //Red RectAngle
    context.fillStyle = "red"
    context.fillRect(250, 250, 400, 160);
    context.fill();

    //Scale
    context.scale(0.5, 0.5);

    //Blue RectAngle
    context.fillStyle = "blue"
    context.fillRect(250, 250, 400, 160);
    context.fill();


    context.scale(0.5, 0.5);

    //Green RectAngle
    context.fillStyle = "green"
    context.fillRect(250, 250, 400, 160);
    context.fill();


    context.scale(0.5, 0.5);

    //Green RectAngle
    context.fillStyle = "black"
    context.fillRect(250, 250, 400, 160);
    context.fill();
}