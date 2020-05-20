window.onload = () => {
    let canvas = document.getElementById('hello-world-canvas')
    let context = canvas.getContext('2d')

    //Draw line steps
    context.beginPath(); //reset the context state
    context.strokeStyle = "red"; //line color
    context.lineWidth = 10; //line width
    context.moveTo(30, 70); //moveTo(x,y)->starting point of line
    context.lineTo(130, 70); //line(x,y) end point of the line
    context.stroke() //drawe line
}