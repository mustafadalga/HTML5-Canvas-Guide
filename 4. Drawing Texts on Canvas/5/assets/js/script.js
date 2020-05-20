window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    let text = "Example Text Shadow"

    context.font = "normal 700 24px times";
    context.shadowColor = "red";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 4;
    context.fillText(text, 100, 100);


    context.font = "italic 400 48px monospace";
    context.shadowColor = "green";
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 1;
    context.strokeText(text, 100, 300);


}