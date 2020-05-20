window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')




    context.beginPath();
    context.lineWidth = 20;
    context.lineJoin = "miter" //bevel,miter,
    context.moveTo(30, 30);
    context.lineTo(130, 30);
    context.lineTo(130, 130);
    context.lineTo(30, 130);
    context.lineTo(30, 230);
    context.stroke();


    context.beginPath();
    context.lineWidth = 20;
    context.strokeStyle = "red"
    context.lineJoin = "bevel" //bevel,miter,
    context.moveTo(60, 60);
    context.lineTo(160, 60);
    context.lineTo(160, 160);
    context.lineTo(60, 160);
    context.lineTo(60, 260);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "blue"
    context.lineWidth = 20;
    context.lineJoin = "round" //bevel,miter,
    context.moveTo(90, 90);
    context.lineTo(190, 90);
    context.lineTo(190, 190);
    context.lineTo(90, 190);
    context.lineTo(90, 290);
    context.stroke();
}