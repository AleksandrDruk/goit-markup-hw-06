(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-modal-open-mobile]"),
    closeMenuBtn: document.querySelector("[data-modal-close-mobile]"),
    menu: document.querySelector("[data-modal-mobile]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();
