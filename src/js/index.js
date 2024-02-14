var elementosDuvidas = document.querySelectorAll('.duvida')

elementosDuvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
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


// observando os elementos para dar animação

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('princ')
        } else {
            entry.target.classList.remove('princ')
        }
    })
})

const elemets = document.querySelectorAll('.duvida2')

elemets.forEach((element) => myObserver.observe(element))




const myObserver2 = new IntersectionObserver((ent) => {
    ent.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('teste-efeito')
        } else {
            entry.target.classList.remove('teste-efeito')
        }
    })
})

const elemets2 = document.querySelectorAll('#teste')

elemets2.forEach((element) => myObserver2.observe(element))
