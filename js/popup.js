var link = document.querySelector(".login");
var popup_login = document.querySelector(".modal-user-block");
var close = popup_login.querySelector(".modal-block-close");
var overlay = document.querySelector(".modal-overlay");
var map = document.querySelector(".modal-map")

// Начало Блок ввода логина и пароля
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup_login.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup_login.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});
// Конец Блок ввода логина и пароля

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup_login.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup_login.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});