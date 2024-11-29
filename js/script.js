// Відкриття міфів
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link");
    const boxes = document.querySelectorAll(".myth-box");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Запобігаємо переходу по посиланню

            const targetId = link.getAttribute("data-target"); // Отримуємо ID блоку
            const targetBox = document.getElementById(targetId);

            // Закриваємо всі блоки
            boxes.forEach(box => {
                if (box !== targetBox) {
                    box.style.display = "none";
                }
            });

            // Перемикаємо видимість обраного блоку
            if (targetBox.style.display === "block") {
                targetBox.style.display = "none"; // Закриваємо, якщо вже відкрите
            } else {
                targetBox.style.display = "block"; // Відкриваємо
            }
        });
    });
});


// Меню
const closeButton = document.querySelector('.menu-close-btn');
const menuCheckbox = document.querySelector('.menu-btn');

closeButton.addEventListener('click', () => {
    menuCheckbox.checked = false; 
});


// Підсвітка секцій
const menuLinks = document.querySelectorAll('.menu-link');

function highlightSection(event) {
    const hash = event.target.getAttribute('href'); 
    const section = document.querySelector(hash); 

    if (section) {
        section.classList.add('highlight'); 
        
        setTimeout(() => {
            section.classList.remove('highlight');
        }, 5000); 
    }
}

menuLinks.forEach(link => {
    link.addEventListener('click', highlightSection); 
});