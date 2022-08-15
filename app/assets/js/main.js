const iconHamburger = document.querySelector('.icon-hamburger')
const iconClose = document.querySelector('.icon-close')
const navBar = document.querySelector('.nav')

iconHamburger.addEventListener('click', function() {
    navBar.classList.add('nav--active')
})

iconClose.addEventListener('click', function() {
    navBar.classList.remove('nav--active')
})