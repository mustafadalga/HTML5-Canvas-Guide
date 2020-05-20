window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    var start = new Date();
    window.requestAnimationFrame(drawRandomColoredRectangle);

    function drawRandomColoredRectangle() {

        var now = new Date();
        if (now - start >= 500) {
            start = now;


            //Clear Canvas
            context.clearRect(0, 0, canvas.width, canvas.height)

            let color = createRandomRGBColor();
            let fillOpacity = Math.random();
            let fillColor = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + fillOpacity + ')';
            let borderColor = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ')';

            let x = getRandomInt(0, canvas.width);
            let y = getRandomInt(0, canvas.height);
            let w = getRandomInt(0, canvas.width - x);
            let h = getRandomInt(0, canvas.height - y);

            // Draw Reactangle
            context.beginPath()
            context.fillStyle = fillColor;
            context.strokeStyle = borderColor;
            context.rect(x, y, w, h);
            context.stroke();
            context.fill();
        }

        //Animate
        window.requestAnimationFrame(drawRandomColoredRectangle);

    }


    function createRandomRGBColor() {
        var red = getRandomInt(0, 257);
        var green = getRandomInt(0, 257);
        var blue = getRandomInt(0, 257);
        return { r: red, g: green, b: blue };
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

}