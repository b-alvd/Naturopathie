document.addEventListener("DOMContentLoaded", function() {
    const IMAGES = [
        {
            url: "./src/assets/img.jpg",
            alt: "Singe Nasique"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Colibri"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Chouette"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Bébé Iguane"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Singe Catharriny"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Singe Nasique"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Colibri"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Chouette"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Bébé Iguane"
        },
        {
            url: "./src/assets/img.jpg",
            alt: "Singe Catharriny"
        }
    ];
    
    const DISPLAYED_IMAGE = document.getElementById("main");
    const IMAGES_CONTAINER = document.getElementById("imagesContainer");
    const PREVIOUS_BUTTON = document.getElementById("previous");
    const NEXT_BUTTON = document.getElementById("next");
    let imageGallery;
    let currentIndex = 0;
    
    function gallery() {
        for (const img of IMAGES) {
            const IMAGE_TAG = document.createElement("img");
            IMAGE_TAG.src = img.url;
            IMAGE_TAG.alt = img.alt;
            
            IMAGES_CONTAINER.appendChild(IMAGE_TAG);
        }
        imageGallery = document.querySelectorAll("#imagesContainer img");
        imageGallery[0].classList.add("selected");
    };

    function changeDisplayedImage() {
        DISPLAYED_IMAGE.src = imageGallery[currentIndex].src;
        DISPLAYED_IMAGE.alt = imageGallery[currentIndex].alt;
    };
    
    PREVIOUS_BUTTON.addEventListener("click", function() {
        imageGallery[currentIndex].classList.toggle("selected");
        currentIndex = currentIndex === 0 ? IMAGES.length -1 : currentIndex -1;
        imageGallery[currentIndex].classList.toggle("selected");

        changeDisplayedImage()
    });
    NEXT_BUTTON.addEventListener("click", function() {
        imageGallery[currentIndex].classList.toggle("selected");
        currentIndex = currentIndex === IMAGES.length-1 ? 0 : currentIndex + 1;
        imageGallery[currentIndex].classList.toggle("selected");

        changeDisplayedImage()
    });

    gallery()
})
