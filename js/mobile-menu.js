const refs = {
  openModalBtn: document.querySelectorAll("[data-menu-open]"),
  closeModalBtn: document.querySelector("[data-menu-close]"),
  modal: document.querySelector("[data-menu]"),
};

refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-open");
}