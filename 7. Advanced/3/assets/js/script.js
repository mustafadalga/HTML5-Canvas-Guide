window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    let patternImage = new Image();
    patternImage.src = "assets/img/apple.png";

    patternImage.onload = () => {
        let pattern = context.createPattern(patternImage, 'repeat');
        context.fillStyle = pattern;
        context.fillRect(0, 0, 900, 400);
    }


}