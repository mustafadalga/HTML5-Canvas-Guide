window.onload = function() {

    // Canvas Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext('2d');
    var boundings = canvas.getBoundingClientRect();


    //Specifications
    var mouseX = 0;
    var mouseY = 0;
    context.strokeStyle = "black"; //initial brush color
    context.lineWidth = 1; //initial brush width
    var isDrawing = false;



    //Handle Colors
    var colors = document.querySelector('.colors');
    colors.addEventListener('click', (color) => {
        context.strokeStyle = color.target.value || 'black';
    })


    //Handle Brushes
    var brushes = document.querySelector('.brushes');
    brushes.addEventListener('click', (brushe) => {
        context.lineWidth = brushe.target.value || 1;
    })


    //Mouse Down Event  
    canvas.addEventListener('mousedown', (event) => {
        setMouseCoordinates(event)
        isDrawing = true;
        //Start Drawing
        context.beginPath();
        context.moveTo(mouseX, mouseY);



    })

    //Mouse Move Event  
    canvas.addEventListener('mousemove', (event) => {
        setMouseCoordinates(event)

        if (isDrawing) {
            context.lineTo(mouseX, mouseY)
            context.stroke();
        }
    })

    //Mouse Up Event  
    canvas.addEventListener('mouseup', (event) => {
        setMouseCoordinates(event)
        isDrawing = false;
    })


    //Handle Mouse Coordinates
    function setMouseCoordinates(event) {

        mouseX = event.clientX - boundings.left;
        mouseY = event.clientY - boundings.top;

    }


    //Handle Clear Button
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    })

    //Save Clear Button
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', () => {
        var imageName = prompt("Please enter image name")
        var canvasDataURL = canvas.toDataURL();
        var a = this.document.createElement('a');
        a.href = canvasDataURL;
        a.download = imageName || 'drawing';
        a.click();
    })
};