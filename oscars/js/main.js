const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')
        })
      }

      /*Remove Menu Mobile*/

    
const navLink = document.querySelectorAll('.nav_link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))


      /*Swiper Homes*/

      const swiperHome = new Swiper('.home_swiper', {
        // Optional parameters
        
        loop: true,
        speed: 800,
        parallax: true,
        effect: 'fade',
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',

          formatFractionCurrent: (number) => {return '0' + number},
          formatFractionTotal: (number) => {return '0' + number}
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      })