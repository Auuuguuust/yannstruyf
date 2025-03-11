const randomImageElement = document.querySelector("#random-image");

let imageArray = [
    "/yannstruyf/images/kat.jpeg",
    "/yannstruyf/images/koeien 50 x 50.jpeg",
    "/yannstruyf/images/lege stippen. 40 x 40 cm.jpeg",
    "/yannstruyf/images/ongespannen 40 x 74.jpeg",
    "/yannstruyf/images/opus 1 - 140 x 130 cm.jpeg",
    "/yannstruyf/images/schaduwbeeldje 2.jpeg"
];

function displayImage() {
    let num = Math.floor(Math.random() * imageArray.length);
    randomImageElement.src = imageArray[num];
}

document.addEventListener("DOMContentLoaded", displayImage);