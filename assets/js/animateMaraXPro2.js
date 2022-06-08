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
