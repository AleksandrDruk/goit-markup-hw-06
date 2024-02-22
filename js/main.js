document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Удаляем класс active у всех ссылок
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Добавляем класс active к текущей ссылке
      link.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".mobile-menu-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Удаляем класс active у всех ссылок
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Добавляем класс active к текущей ссылке
      link.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".mobile-contacts-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Удаляем класс active у всех ссылок
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Добавляем класс active к текущей ссылке
      link.classList.add("active");
    });
  });
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
