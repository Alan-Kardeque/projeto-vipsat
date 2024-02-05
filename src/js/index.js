var elementosDuvidas = document.querySelectorAll('.duvida')

elementosDuvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
})

class MobileNavbar {
    constructor(mobileMemu, navList, navLinks) {
        this.mobileMemu = document.querySelector(mobileMemu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMemu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMemu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMemu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
".mobile-menu",
".nav-list",
".nav-list li",
);
mobileNavbar.init();
