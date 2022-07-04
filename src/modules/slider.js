const slider = () => {
    // слайды
    const slide1 = document.querySelector('.slider-wrapper__slide-1')
    const slide2 = document.querySelector('.slider-wrapper__slide-2')
    const slide3 = document.querySelector('.slider-wrapper__slide-3')
    const slide4 = document.querySelector('.slider-wrapper__slide-4')

    // кнопки переключения
    const sliderPagBtn1 = document.querySelector('.slider-pagination__btn--1')
    const sliderPagBtn2 = document.querySelector('.slider-pagination__btn--2')
    const sliderPagBtn3 = document.querySelector('.slider-pagination__btn--3')
    const sliderPagBtn4 = document.querySelector('.slider-pagination__btn--4')

    // левая кнопка
    const sliderBtnLeft1 = document.querySelector('.slider-btn__left--1')
    const sliderBtnLeft2 = document.querySelector('.slider-btn__left--2')
    const sliderBtnLeft3 = document.querySelector('.slider-btn__left--3')
    const sliderBtnLeft4 = document.querySelector('.slider-btn__left--4')

    // функция левой кнопки

    sliderBtnLeft1.addEventListener('click', () => {
        slide1.style = 'transform: translateX(0)'
        slide2.style = ''

        sliderBtnRight1.classList.add('active')

        sliderBtnRight2.classList.remove('active')   
        sliderBtnLeft1.classList.remove('active')
    })

    sliderBtnLeft2.addEventListener('click', () => {
        slide2.style = 'transform: translateX(0)'
        slide3.style = ''

        sliderBtnRight2.classList.add('active')

        sliderBtnRight3.classList.remove('active')   
        sliderBtnLeft2.classList.remove('active')
    })

    sliderBtnLeft3.addEventListener('click', () => {
        slide3.style = 'transform: translateX(0)'
        slide4.style = ''

        sliderBtnRight3.classList.add('active')

        sliderBtnRight4.classList.remove('active')   
        sliderBtnLeft3.classList.remove('active')
    })

    // правая кнопка
    const sliderBtnRight1 = document.querySelector('.slider-btn__right--1')
    const sliderBtnRight2 = document.querySelector('.slider-btn__right--2')
    const sliderBtnRight3 = document.querySelector('.slider-btn__right--3')
    const sliderBtnRight4 = document.querySelector('.slider-btn__right--4')

    // функция правой кнопки
    sliderBtnRight1.addEventListener('click', () => {
        slide1.style = 'transform: translateX(-100%)'
        slide2.style = 'transform: translateX(0)'

        sliderBtnRight1.classList.remove('active')

        sliderBtnLeft1.classList.add('active')
        sliderBtnRight2.classList.add('active')  
    })

    sliderBtnRight2.addEventListener('click', () => {
        slide2.style = 'transform: translateX(-100%)'
        slide3.style = 'transform: translateX(0)'

        sliderBtnRight2.classList.remove('active')

        sliderBtnLeft2.classList.add('active')
        sliderBtnRight3.classList.add('active')
    })

    sliderBtnRight3.addEventListener('click', () => {
        slide3.style = 'transform: translateX(-100%)'
        slide4.style = 'transform: translateX(0)'

        sliderBtnRight3.classList.remove('active')

        sliderBtnLeft3.classList.add('active')
        sliderBtnRight4.classList.remove('active')
    })
}

export default slider