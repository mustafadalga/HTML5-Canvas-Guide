var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;
var KEY_CODE = {
    R: 82
}

function FlappyMonster(canvas) {
    //Base
    var game = this;


    //Global Attribute
    game.canvas = canvas;
    game.context = game.canvas.getContext('2d');

    //Game State
    game.currentState = INITIAL;


    // Game Speed
    game.velocity = 5;


    //Bind Events
    game.bindEvents();


    //Create Game Objects
    game.createObjects();
}

FlappyMonster.prototype.createObjects = function() {
    //Base
    var game = this;

    //Background
    game.background1 = new GameBackground('assets/img/back.png', game.canvas)
    game.background2 = new GameBackground('assets/img/back.png', game.canvas)
    game.background2.x = game.canvas.width;


    //Score
    game.gameScore = new GameScore(game.canvas);
    game.gameScore.x = game.canvas.width - 150;
    game.gameScore.y = 80;

    //Wall Factory
    game.wallFactory = new WallFactor(game.canvas);


    //Monster
    game.monster = new Monster('assets/img/monster.png', game.canvas);


}

FlappyMonster.prototype.checkCollisions = function() {

    //Base
    var game = this;

    var walls = game.wallFactory.walls;
    for (let index = 0; index < walls.length; index++) {

        if (game.isCollided(game.monster, walls[index])) {
            game.currentState = GAME_OVER;
        }

    }

}

FlappyMonster.prototype.isCollided = function(monster, wall) {


    var isCollided = true;

    //Monster Coordinates
    var monsterTop = monster.y;
    var monsterBottom = monster.y + monster.h;
    var monsterRight = monster.x + monster.w;
    var monsterLeft = monster.x;


    //Wall Coordinates
    var wallTop = wall.y + wall.h + wall.gap; //top of lower wall
    var wallBottom = wall.y + wall.h; //bottom of upper wall
    var wallRight = wall.x + wall.w;
    var wallLeft = wall.x;


    if ((monsterBottom < wallTop && monsterTop > wallBottom) || (monsterLeft > wallRight) || (monsterRight < wallLeft)) {
        isCollided = false;
    }

    return isCollided;
}

FlappyMonster.prototype.bindEvents = function() {
    //Base
    var game = this;

    //Mouse Listener
    game.canvas.addEventListener('click', (event) => {

        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                game.wallFactory.generateWalls();

                break;
            case GAME_PLAYING:
                game.monster.vy = -1 * (game.velocity / 1.5);

                break;
        }
    })


    //Key Listener
    window.addEventListener('keydown', (event) => {
        switch (game.currentState) {
            case GAME_OVER:
                if (event.keyCode === KEY_CODE.R) {
                    game.reset();
                    game.currentState = GAME_PLAYING;
                }
                break;
        }
    })

}

FlappyMonster.prototype.reset = function() {

    //Base
    var game = this;


    //Reset States
    game.gameScore.start = new Date();
    game.gameScore.score = 0;
    game.wallFactory.walls = [];
    game.monster.x = 115;
    game.monster.y = 115;

}

FlappyMonster.prototype.start = function() {

    //Base
    var game = this;

    //Start Game
    window.requestAnimationFrame(() => {
        game.runGameLoop();
    });
}


FlappyMonster.prototype.runGameLoop = function() {

    //Base
    var game = this;


    //Game State
    switch (game.currentState) {
        case INITIAL:
            //DRAW INITIAL SCREEN
            game.drawInitialScreen();
            break;
        case GAME_PLAYING:
            //DRAW GAME PLAYING SCREEN
            game.drawGamePlayingScreen();
            break;
        case GAME_OVER:
            //DRAW GAME OVER SCREEN
            game.drawGameOverScreen();
            break;
    }


    //Start Game
    window.requestAnimationFrame(() => {
        game.runGameLoop();
    });
};

FlappyMonster.prototype.drawInitialScreen = function() {
    //Base
    var game = this;


    //Draw

    //Background
    game.context.fillStyle = "black";
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);


    //Text 
    game.context.fillStyle = "white";
    game.context.font = "36px Arial";
    game.context.fillText("Click to Start!", game.canvas.width / 2 - 100, game.canvas.height / 2);

}


FlappyMonster.prototype.drawGamePlayingScreen = function() {
    //Base
    var game = this;


    //Clear Canvas
    game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);


    //Draw Background
    game.animateBackground();

    //Draw Score
    game.gameScore.draw();


    //Draw Walls
    game.drawWalls();


    //Draw Monster
    game.monster.draw();


    //Check Collision
    game.checkCollisions();

}

FlappyMonster.prototype.drawWalls = function() {
    var game = this;


    var walls = game.wallFactory.walls;
    for (let index = 0; index < walls.length; index++) {

        walls[index].draw();
        walls[index].x = walls[index].x - game.velocity;

    }
    game.removeExtraWalls();
}

FlappyMonster.prototype.removeExtraWalls = function() {
    var game = this;


    var walls = game.wallFactory.walls;
    for (let index = 0; index < walls.length; index++) {

        if (walls[index].x + walls[index].w < 0) {
            walls.shift();
        }

    }
}

FlappyMonster.prototype.animateBackground = function() {

    //Base
    var game = this;


    // Background 1
    game.background1.draw();


    if (Math.abs(game.background1.x) > game.canvas.width) {
        game.background1.x = game.canvas.width - game.velocity;
    }
    game.background1.x = game.background1.x - game.velocity;

    // Background 2
    game.background2.draw();

    if (Math.abs(game.background2.x) > game.canvas.width) {

        game.background2.x = game.canvas.width - game.velocity;
    }
    game.background2.x = game.background2.x - game.velocity;
}

FlappyMonster.prototype.drawGameOverScreen = function() {
    //Base
    var game = this;


    //Draw

    //Background
    game.context.fillStyle = "black";
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);


    //Text 
    game.context.fillStyle = "white";
    game.context.font = "54px Arial";
    game.context.fillText("Your Score : " + game.gameScore.score, game.canvas.width / 2 - 200, game.canvas.height / 2 - 100);

    game.context.font = "36px Arial";
    game.context.fillText("GAME OVER :(", game.canvas.width / 2 - 120, game.canvas.height / 2);



    game.context.font = "24px Arial";
    game.context.fillText("Press R to Restart!", game.canvas.width / 2 - 100, game.canvas.height / 2 + 50);

}