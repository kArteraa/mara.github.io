let modalPhotoList = ["assets/images/main1.png","assets/images/main2.png","assets/images/main3.png","assets/images/main4.png","assets/images/main5.png"]
const modalPhotoWindow = document.querySelector('.modal_photo')
document.addEventListener('click', (item) => { 
    if (item.target.classList.contains('main_about--item--photo_block--photo')) {
        let photoId = item.target.getAttribute('data-photo')
        document.querySelector('.modal_photo_block').innerHTML = `<img class="modal_photo_block--photo" src=${modalPhotoList[photoId-1]} alt="">`
        modalPhotoWindow.classList.add('active')
    } else {
        if (modalPhotoWindow.classList.contains('active')) {
            modalPhotoWindow.classList.remove('active')
            document.body.style.overflow = 'auto'
        }
    }
})