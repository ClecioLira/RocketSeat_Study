const buttonOpenModal = document.getElementById("openModal")

const modalWrapper = document.querySelector(".modal-wrapper")

buttonOpenModal.onClick = function() {
    modalWrapper.classList.remove("invisible")
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === "escape"

    if (isEscKey) {
        modalWrapper.classList.add("invisible")
    }
})