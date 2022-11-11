/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      //* menu Show *//
/* validate if constant exitst */ 
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */
/* Validate if constant exist */
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu.
navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/

let swiper = new Swiper(".projects__container",{
    loop:true,
    spaceBetween:24,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination",
    },
    breakpoints:{
        1200:{
            slidesPerView:2,
            spaceBetween:-56,
        },
        // 760:{
        //     slidesPerView: 4,
        //     spaceBetween:40,
        // },
        // 1024:{
        //     slidesPerView: 5,
        //     spaceBetween:50,
        // },
    },
    
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*=============== EMAIL JS ===============*/
 const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-message') 

const sendEmail = (e) => {
    e.preventDefault()
    //Check if the field has a value 
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value == ''){
        //Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //Show message 
        contactMessage.textContent = 'Write all the input fields'
    }else{
        //serviceId templateid #form -publickey
        emailjs.sendForm('service_tfbeu48','template_x1ycylk','#contact-form','2xLemulWJXGxgRvCt')
        .then(() =>{
            //Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ' '
            },5000)
        },(error) =>{
            alert('OOPS! SOMETHING HAS FAILED ... ',error)
        
        })
        
        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    } 
}
contactForm.addEventListener('submit',sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop = 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')

        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
 

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectdeIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
     themeButton.classList[selectdeIcon == 'ri-moon-line' ? 'add' : 'remove'](iconTheme) 
}
themeButton.addEventListener('click',() => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')

}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    //reset:true /*Animation repeat */
})
sr.reveal('.home__data, .projects__container, .testimonial__container, .footer__container')
sr.reveal('.home__info div',{delay: 600, origin:'bottom', interval:100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)',{ origin:'left'})
sr.reveal('.skills__content:nth-child(2), .contact__content:nth-child(2)',{ origin:'right'})
sr.reveal('.qualificaation__content,.services__card',{ interval: 100})
