window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let text = "This text will be in 3D";


    /*
    context.font = "normal 600 54px monospace";


    context.fillStyle = "black";



    context.fillText(text, 99, 299);


    context.fillText(text, 98, 298);


    context.fillText(text, 97, 297);


    context.fillText(text, 96, 296);



    // Original Text
    context.fillStyle = "violet";
    context.fillText(text, 100, 300);

    */

    draw3DText(text, 100, 300, "normal 600 54px monospace", "red", 5)


    function draw3DText(text, x, y, style, color, size) {
        context.font = style;
        context.fillStyle = "black";
        for (let i = 0; i < size; i++) {
            context.fillText(text, x - i, y - i);
        }
        context.fillStyle = color;
        context.fillText(text, x, y)

    }

}