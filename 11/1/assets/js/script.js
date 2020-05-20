window.onload = function() {

    // Definitions
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    let KEY_CODE = {
        LEFT: 37,
        UP: 38,
        RİGHT: 39,
        DOWN: 40,
    }

    window.addEventListener('keydown', (event) => {

        switch (event.keyCode) {
            case KEY_CODE.LEFT:
                console.log("LEFT ARROW PRESSED")
                break;
            case KEY_CODE.UP:
                console.log("UP ARROW PRESSED")
                break;
            case KEY_CODE.RİGHT:
                console.log("RİGHT ARROW PRESSED")
                break;
            case KEY_CODE.DOWN:
                console.log("DOWN ARROW PRESSED")
                break;
        }
    })
};