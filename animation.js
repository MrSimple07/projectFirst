const aboutText = document.querySelector('.about__text')
const aboutInfo = document.querySelector('.about__info')



window.addEventListener('scroll', ()=>{
    const scrolled= window.scrollY;

    if(scrolled>700 && scrolled< 1500){
        aboutText.classList.add('active')
    }else{
        aboutText.classList.remove('active')
    }
});


window.addEventListener('scroll', ()=>{
    const scrolled= window.scrollY;

    if(scrolled>1200 && scrolled< 2250){
        aboutInfo.classList.add('active')
    }else{
        aboutInfo.classList.remove('active')
    }
});
