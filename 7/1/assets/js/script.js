window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')



    context.fillStyle = "red";
    context.fillRect(240, 100, 120, 120);
    context.save();



    context.fillStyle = "green";
    context.fillRect(380, 100, 120, 120);
    context.save();



    context.fillStyle = "blue";
    context.fillRect(540, 100, 120, 120);
    context.save();

    context.restore()
    context.fillRect(240, 300, 120, 120);

    context.restore()
    context.fillRect(380, 300, 120, 120);

    context.restore()
    context.fillRect(540, 300, 120, 120);
}