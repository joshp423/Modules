const container = document.getElementById("container");
const images = [
  {
    name: "image1",
    src: "./360_F_123522471_XZe5ebqil1DFJRgOUJ6taDP4DnmHjtL7.jpg",
  },
  { name: "image2", src: "./im-54002859.avif" },
  { name: "image3", src: "./images.jpeg" },
];

function createCarousel(images, locationDiv) {
  //set up divs
  const carouselContainer = document.createElement("div");
  const outerDiv = document.createElement("div");
  outerDiv.style.display = "grid";
  outerDiv.style.gridTemplateColumns = "1fr 20fr 1fr";

  const innerDiv = document.createElement("div");

  const buttonDiv = document.createElement("div");
  buttonDiv.style.display = "flex";
  buttonDiv.style.justifyContent = "center";
  buttonDiv.id = "circleButtons";

  //set up buttons
  const leftButton = document.createElement("button");
  leftButton.style.height = "100%";
  leftButton.innerText = "<";
  const rightButton = document.createElement("button");
  rightButton.style.height = "100%";
  rightButton.innerText = ">";

  //append elements
  locationDiv.append(carouselContainer);
  carouselContainer.append(outerDiv, buttonDiv);
  outerDiv.append(leftButton, innerDiv, rightButton);

  //loop through images and add each image as well as corresponding buttons
  let buttonCounter = 0;
  images.forEach((image) => {
    let currentImage = document.createElement("img");
    currentImage.src = image.src;
    currentImage.id = image.name;
    currentImage.style.height = "1080px";
    currentImage.style.width = "100%";

    //buttons
    let button = document.createElement("button");
    button.style.border = "1px solid black";
    button.style.borderRadius = "180px";
    button.style.height = "20px";
    button.style.width = "20px";
    button.style.backgroundColor = "white";
    button.id = buttonCounter;
    buttonCounter++;

    if (image === images[0]) {
      currentImage.classList.add("active");
      button.classList.add("active");
    }

    innerDiv.append(currentImage);
    buttonDiv.append(button);
  });

  //attach event listeners to buttons
  let activeImage = 0;
  const onPageImages = document.querySelectorAll("#container>div>div>div>img");
  const buttons = document.querySelectorAll("#circleButtons>button");
  console.log(activeImage);

  //depending on activeImage change display settings
  onPageImages.forEach((image) => {
    if (image === onPageImages[activeImage]) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
    if (image.classList.contains("active")) {
      image.style.display = "";
    } else {
      image.style.display = "none";
    }
  });

  //depending on activeimage change button background
  buttons.forEach((button) => {
    if (button === buttons[activeImage]) {
      console.log(button.id, activeImage);
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
    if (button.classList.contains("active")) {
      button.style.backgroundColor = "black";
    } else {
      button.style.backgroundColor = "white";
    }
  });

  leftButton.addEventListener("click", () => {
    if (activeImage <= 0) {
      activeImage = onPageImages.length - 1;
    } else {
      activeImage--;
    }
    console.log(activeImage);

    //depending on activeImage change display settings
    onPageImages.forEach((image) => {
      if (image === onPageImages[activeImage]) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
      if (image.classList.contains("active")) {
        image.style.display = "";
      } else {
        image.style.display = "none";
      }
    });
    //depending on activeimage change button background
    buttons.forEach((button) => {
      if (button === buttons[activeImage]) {
        console.log(activeImage);
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
      if (button.classList.contains("active")) {
        button.style.backgroundColor = "black";
      } else {
        button.style.backgroundColor = "white";
      }
    });
  });

  rightButton.addEventListener("click", () => {
    if (activeImage >= onPageImages.length - 1) {
      activeImage = 0;
    } else {
      activeImage++;
    }
    console.log(activeImage);

    //depending on activeImage change display settings
    onPageImages.forEach((image) => {
      if (image === onPageImages[activeImage]) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
      if (image.classList.contains("active")) {
        image.style.display = "";
      } else {
        image.style.display = "none";
      }
    });

    //depending on activeimage change button background
    buttons.forEach((button) => {
      if (button === buttons[activeImage]) {
        console.log(activeImage);
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
      if (button.classList.contains("active")) {
        button.style.backgroundColor = "black";
      } else {
        button.style.backgroundColor = "white";
      }
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeImage = button.id;
      console.log(activeImage);

      //depending on activeImage change display settings
      onPageImages.forEach((image) => {
        if (image === onPageImages[activeImage]) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
        if (image.classList.contains("active")) {
          image.style.display = "";
        } else {
          image.style.display = "none";
        }
      });
      //depending on activeimage change button background
      buttons.forEach((button) => {
        if (button === buttons[activeImage]) {
          console.log(activeImage);
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
        if (button.classList.contains("active")) {
          button.style.backgroundColor = "black";
        } else {
          button.style.backgroundColor = "white";
        }
      });
    });
  });

  setInterval(() => {
    if (activeImage >= onPageImages.length - 1) {
      activeImage = 0;
    } else {
      activeImage++;
    }
    console.log(activeImage);

    //depending on activeImage change display settings
    onPageImages.forEach((image) => {
      if (image === onPageImages[activeImage]) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
      if (image.classList.contains("active")) {
        image.style.display = "";
      } else {
        image.style.display = "none";
      }
    });
    //depending on activeimage change button background
    buttons.forEach((button) => {
      if (button === buttons[activeImage]) {
        console.log(activeImage);
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
      if (button.classList.contains("active")) {
        button.style.backgroundColor = "black";
      } else {
        button.style.backgroundColor = "white";
      }
    });
  }, 5000);
}
createCarousel(images, container);
