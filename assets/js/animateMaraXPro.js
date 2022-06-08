document.addEventListener('DOMContentLoaded',function(){
    const maraXProIntroItems = document.querySelectorAll('.maraxpro_intro--item')
    let i = 0
    let timer = setInterval(function() {
        maraXProIntroItems[i].classList.add('active')
        i++ 
        if (i === maraXProIntroItems.length) {
            document.querySelector('.maraxpro_intro--content').classList.add('active')
            clearInterval(timer)
        }
    },100)

})

