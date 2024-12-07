
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");


document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = item.src;
        captionText.innerHTML = item.alt;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
