var link = document.querySelector(".login");
var popup_login = document.querySelector(".modal-user-block");
var close_login = popup_login.querySelector(".modal-block-close");

var link_map = document.querySelector(".popup_map");
var popap_map = document.querySelector(".modal-map");
var close_map = popap_map.querySelector(".modal-block-close");

var overlay = document.querySelector(".modal-overlay");

// Начало Блок ввода логина и пароля
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup_login.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

close_login.addEventListener("click", function(event) {
  event.preventDefault();
  popup_login.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});
// Конец Блок ввода логина и пароля

// Начало Блок карта
link_map.addEventListener("click", function(event) {
  event.preventDefault();
  popap_map.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

close_map.addEventListener("click", function(event) {
  event.preventDefault();
  popap_map.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});
// Конец Блок карта