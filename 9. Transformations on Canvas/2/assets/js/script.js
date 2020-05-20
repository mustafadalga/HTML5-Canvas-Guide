window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    let radian = Math.PI / 180;
    context.rotate(50 * radian);

    context.fillStyle = "red";
    context.fillRect(250, 250, 400, 160);
    context.fill();


}