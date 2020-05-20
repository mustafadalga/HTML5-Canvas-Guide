function WallFactor(canvas) {
    //Base 
    var factory = this;

    //Global Attribute
    factory.canvas = canvas;
    factory.context = factory.canvas.getContext('2d');

    factory.gap = 200;
    factory.maxGap = 300;
    factory.freq = 2000;
    factory.walls = [];
}


WallFactor.prototype.generateWalls = function() {
    //Base 
    var factor = this;


    //Generate
    setInterval(() => {

        var gap = getRandomInt(factor.gap, factor.maxGap);
        var height = getRandomInt(0, factor.maxGap);

        var wall = new Wall(factor.canvas);
        wall.gap = gap;
        wall.h = height;

        factor.walls.push(wall);

    }, factor.freq)
}