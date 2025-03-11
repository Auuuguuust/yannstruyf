const randomImageElement = document.querySelector("#random-image");

let imageArray = [
    "/images/kat.jpeg",
    "/images/koeien 50 x 50.jpeg",
    "/images/lege stippen. 40 x 40 cm.jpeg",
    "/images/ongespannen 40 x 74.jpeg",
    "/images/opus 1 - 140 x 130 cm.jpeg",
    "/images/schaduwbeeldje 2.jpeg"
];

function displayImage() {
    let num = Math.floor(Math.random() * imageArray.length);
    randomImageElement.src = imageArray[num];
}

document.addEventListener("DOMContentLoaded", displayImage);