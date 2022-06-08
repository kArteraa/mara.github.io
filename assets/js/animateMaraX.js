const introContent = document.querySelectorAll('.marax_intro--content--item')
let i = 0
let timer = setInterval(function(){
    introContent[i].classList.add('active')
    i++
    if (i === 3) {
        document.querySelector('.marax_intro--footer').classList.add('active')
        clearInterval(timer)
    }
},700)

document.addEventListener('DOMContentLoaded',function(){
    animateClass()
})

document.addEventListener('scroll', function() {
    animateClass()
})


function animateClass() {
    let windowOffsetBot = window.pageYOffset + window.innerHeight
    const animateItems = document.querySelectorAll('.animateItem')
    animateItems.forEach(function(item){
        (item.offsetTop < windowOffsetBot && item.offsetTop+300 > window.pageYOffset) ? item.classList.add('animate') : item.classList.remove('animate')
        
    })
}
