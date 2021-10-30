// ALERT
const alertStorage = sessionStorage.getItem('alert');
const alertClose = document.getElementById("alert_close");
const alert = document.getElementById("alert");

if (alertStorage === "closed") {
    alert.classList.add("closed");
}

alertClose.addEventListener("click", () => {
    sessionStorage.setItem('alert', 'closed');
    alert.classList.add("close");
})

// MENU
const menuToggle = document.getElementById("menu_toggle");
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("menu__toggle--close");
})

// SCROLL SMOOTH for hash links
const hashLinks = document.querySelectorAll("a[href*='#']");
hashLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        let hash = e.target.getAttribute("href");
        let element = document.querySelector(hash);
        let offset = element.offsetTop - 110;

        window.scroll({ 
            top: offset, 
            behavior: "smooth" 
        });
    })
})