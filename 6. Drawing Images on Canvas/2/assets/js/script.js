window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')

    let pokemonTile = new Image();
    pokemonTile.src = "assets/img/pokemons.png"

    pokemonTile.onload = () => {
        //Pikachu
        context.drawImage(pokemonTile, 0, 0, 200, 200, 0, 0, 200, 200)

        //Squirtile
        context.drawImage(pokemonTile, 400, 180, 200, 200, 200, 0, 200, 200)


        context.drawImage(pokemonTile, 1000, 0, 200, 200, 400, 0, 200, 200)

    }


}