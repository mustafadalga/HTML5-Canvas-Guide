window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    //Original
    context.fillStyle = "red";
    context.fillRect(50, 50, 160, 160);
    context.fill();

    context.translate(300, 200);


    //Translated 
    context.fillStyle = "red";
    context.fillRect(0, 0, 160, 160);
    context.fill();

}