const navbar = () => {
    const navbar = document.querySelector('.navbar')

    document.addEventListener('scroll', (e) => {
        if(document.documentElement.scrollTop >= 1){
            navbar.style = 'background: rgba(0, 0, 0, 0.3); padding: 10px 0;';
        } else {
            navbar.removeAttribute('style')
        }
    })
}

export default navbar