window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    context.font = "45px Verdana";

    let fText = "Fill Text on Canvas"
        //context.fillText(fText, 80, 100, 100);(text,x,y,width)
    context.fillText(fText, 80, 100);


    let sText = "Stroke Text on Canvas";
    context.strokeText(sText, 80, 200, 400);

}