let btnList = document.querySelectorAll('.modal_block--form--models--mara')
const modalWindow = document.querySelector('.modal')
document.addEventListener('click', (item) => {
    if (item.target.classList.contains('modal_block--form--models--mara')) {
        if (item.target.classList.contains('active')) {
            btnList.forEach((i) => {
                i.classList.remove('active')
            })
        } else {
            btnList.forEach((i) => {
                i.classList.remove('active')
            })
            item.target.classList.add('active')
        }
    } else if (item.target.classList.contains('modal_block--form--btn')) {
        modalWindow.classList.remove('active')
        document.body.style.overflow = 'auto'
        btnList.forEach((i) => {
            i.classList.remove('active')
        })
    } else if (item.target.classList.contains('header_nav--link') && item.target.getAttribute('data-open') === 'modal') {
        modalWindow.classList.add('active')
        document.body.style.overflow = 'hidden'
    } else if (item.target.classList.contains('overlay')) {
        modalWindow.classList.remove('active')
        document.body.style.overflow = 'auto'
        btnList.forEach((i) => {
            i.classList.remove('active')
        })
    }
})