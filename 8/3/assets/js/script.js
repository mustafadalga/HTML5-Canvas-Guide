window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let cellWidth = 192;
    let cellHeight = 200;

    let tile = new Image()
    tile.src = "assets/img/tile.png";
    tile.onload = () => {
        context.drawImage(tile, 0, 0, 768, 200, 60, 0, 768, 200);
        drawTileCell(3)


    }

    window.requestAnimationFrame(animationLoop)

    let cell = 0;
    let start = new Date();


    function animationLoop() {

        let now = new Date();
        if (now - start >= 100) {
            start = now;

            //Clear 
            context.clearRect(0, 200, canvas.width, canvas.height - 200);

            //Update 
            cell++;
            cell %= 4;
            drawTileCell(cell);
        }

        //Animate
        window.requestAnimationFrame(animationLoop)
    }



    function drawTileCell(index) {
        context.drawImage(tile, index * cellWidth, 0, cellWidth, cellHeight, 360, 200, cellWidth, cellHeight);
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