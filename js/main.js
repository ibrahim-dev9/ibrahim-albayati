const myNav = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("#main-menu");

    burger.addEventListener('click', () => {
        nav.classList.toggle("show");
        burger.classList.toggle("toggle");
        
    })
}

myNav();