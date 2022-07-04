const burger = () => {
    let burgerBtn = document.querySelector('.navbar-nav__burger'),
    burgerModal = document.querySelector('.navbar-nav__burger--modal')

    burgerBtn.addEventListener('click', () => {
        if (burgerModal.classList.contains('active')) {
            burgerModal.classList.remove('active')
            burgerModal.style = 'transform: translateY(-100%)'
            burgerBtn.classList.remove('active')
        } else {
            burgerModal.classList.add('active')
            burgerModal.style = 'transform: translateY(0)'
            burgerBtn.classList.add('active')
        }
    })
}

export default burger