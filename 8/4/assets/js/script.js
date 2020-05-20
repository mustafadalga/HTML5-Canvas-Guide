window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let isBackgroundLoaded = false;
    let isHeroLoaded = false;

    //Cell Specifications
    let cellWidth = 256,
        cellHeight = 256,
        currentCell = 0;

    // Time Specifications
    let animationStart = new Date();

    //// Move Specifications
    let moveAmount = 15;
    let moveX = 100;


    let background = new Image();
    background.src = "assets/img/back.png";
    background.onload = () => {
        isBackgroundLoaded = true;
    }

    let hero = new Image();
    hero.src = "assets/img/sprite.png";
    hero.onload = () => {
        isHeroLoaded = true;
    }

    window.requestAnimationFrame(animationLoop)

    function animationLoop() {

        let animationNow = new Date();
        if (animationNow - animationStart >= 100) {
            animationStart = animationNow;

            //Clear
            context.clearRect(0, 0, canvas.width, canvas.height);

            //Update
            currentCell++;
            currentCell %= 6;
            if (moveX >= canvas.width) {
                moveX = -1 * cellWidth;
            } else {
                moveX += moveAmount;

            }

            //Draw
            if (isBackgroundLoaded) {
                context.drawImage(background, 0, 0, canvas.width, canvas.height);
            }
            if (isHeroLoaded) {
                context.drawImage(hero, currentCell * cellWidth, 0, cellWidth, cellHeight, moveX, 320, 100, 100);
            }
        }


        //Animate
        window.requestAnimationFrame(animationLoop)
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