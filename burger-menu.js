// Получаем элементы
const burger = document.getElementById("burger-menu");
const navbar = document.getElementById("navbar");

// Добавляем обработчик клика
burger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
