window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')
    let radian = Math.PI / 180;

    //First Way

    // Body
    context.beginPath();
    context.strokeStyle = "orange";
    context.fillStyle = "orange";
    context.moveTo(250, 250);
    context.lineTo(330, 310);
    context.arc(250, 250, 100, 37 * radian, 323 * radian, false);
    context.lineTo(250, 250);
    context.stroke();
    context.fill();


    // Eye
    context.beginPath()
    context.fillStyle = "black"
    context.arc(250, 200, 10, radian * 0, radian * 360, false);
    context.stroke();
    context.fill();




    // Second Way


    // Object 1
    context.beginPath();
    context.strokeStyle = "orange";
    context.fillStyle = "orange";
    context.arc(600, 250, 100, 143 * radian, 323 * radian, false);
    context.stroke();
    context.fill();


    // Object 1
    context.beginPath();
    context.strokeStyle = "orange";
    context.fillStyle = "orange";
    context.arc(600, 250, 100, 37 * radian, 217 * radian, false);
    context.stroke();
    context.fill();


    // Eye
    context.beginPath()
    context.fillStyle = "black"
    context.arc(600, 200, 10, radian * 0, radian * 360, false);
    context.stroke();
    context.fill();




}