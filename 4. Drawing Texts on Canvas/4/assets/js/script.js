window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    //Vertical
    context.strokeStyle = "red"
    context.moveTo(300, 20);
    context.lineTo(300, 430);
    context.stroke();


    context.font = "italic 400 18px monospace";


    context.textAlign = "start";
    context.fillText("start", 300, 20);


    context.textAlign = "center";
    context.fillText("center", 300, 50);


    context.textAlign = "left";
    context.fillText("left", 300, 80);


    context.textAlign = "end";
    context.fillText("end", 300, 110);


    context.textAlign = "right";
    context.fillText("right", 300, 140);



    //Horizontal
    context.strokeStyle = "red"
    context.moveTo(20, 300);
    context.lineTo(800, 300);
    context.stroke();


    //Text Baseline align

    context.textBaseline = "alphabetic";
    context.fillText("alphabetic", 120, 300)

    context.textBaseline = "top";
    context.fillText("top", 220, 300)


    context.textBaseline = "hanging";
    context.fillText("hanging", 320, 300)


    context.textBaseline = "middle";
    context.fillText("middle", 420, 300)

    context.textBaseline = "bottom";
    context.fillText("bottom", 520, 300)

    context.textBaseline = "ideographic";
    context.fillText("ideographic", 720, 300)


}