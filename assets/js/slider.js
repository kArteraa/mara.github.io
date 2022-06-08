let photos = ["assets/images/MaraX/Black2.png","assets/images/MaraX/Blue2.png","assets/images/MaraX/Green2.png"]
document.querySelector('.marax_show--rightside--images').innerHTML = `<img class="marax_show--rightside--images--image" src=${photos[0]} alt="">`
const sliderBtn = document.querySelectorAll('.marax_slider--btns--btn')
const rightSideBar = document.querySelector('.marax_show--rightside')
const sliderImage = document.querySelector('.marax_slider--track--item')
const sliderImages = document.querySelectorAll('.marax_slider--track--item')
let curTrack = 0
let activeSliderBtn = document.getElementById('1')
let currentId = 1
window.addEventListener('click' , function(item){
    const sliderItem = item.target
    sliderBtn.forEach(function(i){
        if (i === sliderItem && sliderItem != activeSliderBtn) {

            activeSliderBtn.classList.remove('active')
            sliderItem.classList.add('active')
            activeSliderBtn = sliderItem
            let itemDataId = sliderItem.id
            if (itemDataId != currentId) {
                let sliderImageWidth = sliderImage.width
                if (itemDataId > currentId) {
                    sliderImages.forEach(function(j){
                        j.style.transform = `translateX(${curTrack-sliderImageWidth*(itemDataId-currentId)}px)`
                    })
                    curTrack -= sliderImageWidth*(itemDataId-currentId)
                    currentId = itemDataId
                } else {
                    sliderImages.forEach(function(j){
                        j.style.transform = `translateX(${curTrack + sliderImageWidth*(currentId-itemDataId)}px)`
                    })
                    curTrack += sliderImageWidth*(currentId-itemDataId)
                    currentId = itemDataId
                }
            }
            let data = sliderItem.getAttribute('data-color')
            rightSideBar.style.backgroundColor = `${data}`
            document.querySelector('.marax_show--rightside--images').innerHTML = `<img class="marax_show--rightside--images--image" src=${photos[itemDataId-1]} alt="">`
        }
    })

})
