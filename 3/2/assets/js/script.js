window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let lightCellColor = "#ddb180";
    let darkCellColor = "#7c330c";


    //Frame
    context.strokeStyle = "black";
    context.strokeRect(250, 100, 400, 400);

    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            if ((row + col) % 2 === 0) {
                context.fillStyle = lightCellColor;
            } else {
                context.fillStyle = darkCellColor;
            }
            context.fillRect(200 + row * 50, 50 + col * 50, 50, 50);
        }
    }
}