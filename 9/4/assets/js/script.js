window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    /*

    // Red RectAngle

    context.fillStyle = "red";
    context.fillRect(50, 150, 200, 100);
    context.fill();

    //Scale Transform
    context.transform(1.5, 0, 0, 1.5, 0, 0)


    // Blue RectAngle

    context.fillStyle = "blue";
    context.fillRect(50, 150, 200, 100);
    context.fill();

    //Scale Transform
    context.transform(1.5, 0, 0, 1.5, 0, 0)


    // Green RectAngle

    context.fillStyle = "green";
    context.fillRect(50, 150, 200, 100);
    context.fill();

    */


    /*

        // Red RectAngle
        context.fillStyle = "red";
        context.fillRect(150, 150, 200, 100);
        context.fill();

        //Scale Transform
        context.setTransform(1.5, 0, 0, 1.5, 0, 0)


        // Blue RectAngle
        context.fillStyle = "blue";
        context.fillRect(150, 150, 200, 100);
        context.fill();

        //Scale Transform
        context.setTransform(1.5, 0, 0, 1.5, 0, 0)


        // Green RectAngle
        context.fillStyle = "green";
        context.fillRect(150, 150, 200, 100);
        context.fill();


        //Scale Transform
        context.setTransform(1.5, 0, 0, 1.5, 0, 0)


        // Purple RectAngle

        context.fillStyle = "purple";
        context.fillRect(150, 150, 200, 100);
        context.fill();
    */




    // Red RectAngle
    context.fillStyle = "red";
    context.fillRect(150, 150, 200, 100);
    context.fill();

    //Scale Transform
    context.resetTransform()


    // Blue RectAngle
    context.fillStyle = "blue";
    context.fillRect(150, 150, 200, 100);
    context.fill();

    //Scale Transform
    context.transform(1.5, 0, 0, 1.5, 0, 0)


    // Green RectAngle
    context.fillStyle = "green";
    context.fillRect(150, 150, 200, 100);
    context.fill();

    //Scale Transform
    context.resetTransform()

    // Purple RectAngle

    context.fillStyle = "purple";
    context.fillRect(150, 150, 200, 100);
    context.fill();

}