const imageContainer = document.querySelector(".image-container");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let x = 0;
let timer;
prev.addEventListener("click", () => {
    x = x + 45;
    clearInterval(timer);
    updateGallery();
})
next.addEventListener("click", () => {
    x = x - 45;
    clearInterval(timer);
    updateGallery();
})

function updateGallery() {
    imageContainer.style.transform = `perspective(1700px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    }, 3000)
}

updateGallery();