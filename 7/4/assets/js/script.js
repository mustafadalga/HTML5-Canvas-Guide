window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    /*
        let gradient = context.createLinearGradient(240, 40, 660, 680);
        gradient.addColorStop(0, "red")
        gradient.addColorStop(0.25, "brown")
        gradient.addColorStop(0.5, "yellow")
        gradient.addColorStop(0.75, "green")
        gradient.addColorStop(1, "blue")

        */


    let gradient = context.createRadialGradient(570, 380, 300, 570, 300, 20);
    gradient.addColorStop(0, "red")
    gradient.addColorStop(0.25, "brown")
    gradient.addColorStop(0.5, "yellow")
    gradient.addColorStop(0.75, "green")
    gradient.addColorStop(1, "blue")

    context.strokeStyle = "blue";
    context.lineWidth = 4;
    context.fillStyle = gradient;
    context.rect(240, 40, 420, 420);
    context.stroke();
    context.fill();
}