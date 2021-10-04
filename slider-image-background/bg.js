const bg = document.querySelector('.bg');
const img = document.getElementById('image');


images=[
    "./assets/bg-1.jpg",
    "./assets/bg-2.jpg",
    "./assets/bg-3.jpg",
    "./assets/bg-4.jpg",
    "./assets/bg-5.jpg",
    "./assets/bg-6.jpg"
]

function changeImage(){
    random = Math.floor(Math.random() * images.length);

    img.src = images[random];
}
changeImage();

setInterval(() => changeImage(), 2500);