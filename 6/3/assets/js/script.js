window.onload = () => {
    let canvas = document.querySelector('canvas')
    let context = canvas.getContext('2d')


    let image = new Image();
    image.src = "assets/img/amsterdam.jpg"
    image.onload = () => {
        context.drawImage(image, 180, 35)


        let imageData = context.getImageData(180, 35, 550, 366)
        console.log(imageData)
        for (let i = 0; i < imageData.data.length; i += 4) {




            let average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;

            imageData.data[i] = average; // Red
            imageData.data[i + 1] = average; // Green
            imageData.data[i + 2] = average; //Blue
            //  imageData.data[i + 3] = 50; //Alpha

            // imageData.data[i] = 255 - imageData.data[i]; // Red
            // imageData.data[i + 1] = 255 - imageData.data[i + 1]; // Green
            // imageData.data[i + 2] = 255 - imageData.data[i + 2]; //Blue
            //  imageData.data[i + 3] = 50; //Alpha




        }

        context.putImageData(imageData, 180, 35)

    }


}