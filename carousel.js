const container = document.getElementById('container');
const images = [{name:"image1", src:"./360_F_123522471_XZe5ebqil1DFJRgOUJ6taDP4DnmHjtL7.jpg"}, {name:"image2", src:"./im-54002859.avif"}, {name:"image3", src:"./images.jpeg"}];

export function createCarousel(images, locationDiv){
    //set up divs
    const outerDiv = document.createElement('div');
    outerDiv.style.display = 'grid';
    outerDiv.style.gridTemplateColumns = "1fr 8fr 1fr";


    const innerDiv = document.createElement('div');
    
    
    //set up buttons
    const leftButton = document.createElement('button');
    leftButton.style.height = "100%";
    leftButton.innerText = "<";
    const rightButton = document.createElement('button');
    rightButton.style.height = "100%";
    rightButton.innerText = ">";

    //append elements
    locationDiv.append(outerDiv);
    outerDiv.append(leftButton, innerDiv, rightButton);

    //loop through images and add each image
    images.forEach((image) => {
        let currentImage = document.createElement('img')
        currentImage.src = image.src;
        currentImage.id = image.name;
        currentImage.style.height = "1080px";
        currentImage.style.width = "1080px";
        
        if (image === images[0]) {
            currentImage.classList.add("active");
        }
        if (currentImage.classList.contains("inactive")) {
            currentImage.style.display = "none";
        }
        else {
            currentImage.style.display = "";
        }
        innerDiv.append(currentImage);
    })

    //attach event listeners to buttons
    let activeImage = 0;
    const onPageImages = document.querySelectorAll('#container>div>div>img');

    //depending on activeImage change display settings
        onPageImages.forEach((image) => {
            if (image === onPageImages[activeImage]) {
                image.classList.add("active");
            }
            else {
                image.classList.remove("active")
            }
            if (image.classList.contains("active")) {
                image.style.display = "";
            }
            else {
                image.style.display = "none";
            }
        })
        
    leftButton.addEventListener('click', () => {
        if (activeImage === 0) {
            activeImage = onPageImages.length-1;
        }
        else {
            activeImage --;
        }
        console.log(activeImage);

        //depending on activeImage change display settings
        onPageImages.forEach((image) => {
            if (image === onPageImages[activeImage]) {
                image.classList.add("active");
            }
            else {
                image.classList.remove("active")
            }
            if (image.classList.contains("active")) {
                image.style.display = "";
            }
            else {
                image.style.display = "none";
            }
        })
    });

    rightButton.addEventListener('click', () => {
        if (activeImage === onPageImages.length-1) {
            activeImage = 0;
        }
        else {
            activeImage ++;
        }
        console.log(activeImage);

        //depending on activeImage change display settings
        onPageImages.forEach((image) => {
            if (image === onPageImages[activeImage]) {
                image.classList.add("active");
            }
            else {
                image.classList.remove("active")
            }
            if (image.classList.contains("active")) {
                image.style.display = "";
            }
            else {
                image.style.display = "none";
            }
        })
    });

    
        
}
