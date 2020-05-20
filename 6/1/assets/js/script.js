window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let image = new Image();
    image.src = "assets/img/regularshow.png";
    image.onload = () => {
        //  context.drawImage(image, 250, 150)
        //  context.drawImage(image, 250, 50, 200, 200)
        context.drawImage(image, 40, 100, 150, 250, 250, 50, 250, 400)

    }

}