window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let text = "This text will be styled";
    context.font = "normal 800 xx-large times";
    context.fillText(text, 100, 100);

    context.font = "italic 400 48px monospace";
    context.strokeText(text, 100, 150);


}