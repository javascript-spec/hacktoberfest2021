const bg = document.querySelector('.bg');
const img = document.getElementById('image');
const right = document.querySelector('.right');
const left = document.querySelector('.left');


images=[
    "./assets/bg-1.jpg",
    "./assets/bg-2.jpg",
    "./assets/bg-3.jpg",
    "./assets/bg-4.jpg",
    "./assets/bg-5.jpg",
    "./assets/bg-6.jpg"
]

let index = 0

right.addEventListener('click', () => {
     index++
     img.src = images[index]

     if(index >= images.length - 1){
        index = -1
     }
})


left.addEventListener('click', () => {
    index--

    if(index <= 0){
       index = images.length - 1
    }
    img.src = images[index]
})