const pageBody = document.getElementById('main-body')
const navItems = document.querySelectorAll(".nav-item");
const heroEl = document.getElementById('hero')
const novoEl = document.getElementById("novo");
const inicioEl = document.getElementById("inicio");
const contatoEl = document.getElementById('contato')
const sobreEl = document.getElementById("sobre");
const faqsEl = document.getElementById("faqs");
const faqToggle = document.querySelectorAll('.faq-toggle')
const cookieToggle = document.querySelectorAll('.cookie-toggle')
const flipCard = document.querySelectorAll(".flip");
const cardBack = document.querySelectorAll(".feat-card-back");
const cardFront = document.querySelectorAll(".feat-card-front");
const whatsappWidget = document.getElementById('whatsapp-widget')
const whatsappCloseBtn = document.getElementById('whatsapp-close-btn')
const whatsappWidgetBtn = document.getElementById('whatsapp-widget-button')
const openWidgetBtn = document.getElementById('open-widget-button')
const openChatBtn = document.getElementById('open-chat-button')
const mobileNav = document.getElementById('mobile-nav')
const mobileNavMenu = document.getElementById('mobile-nav-items')
const mobileMenuBtn = document.getElementById('menu-button')
const reviewConsentBtn = document.getElementById('review-consent-btn')
const useCookiesAlert = document.getElementById('website-uses-cookies-alert')
const cookiesLearnMoreBtn = document.getElementById('cookies-learn-more')
const cookiesPolicyPage = document.getElementById('cookies-policy-page')

const cookiesConfigBtn = document.getElementById('cookies-configure-btn')
const cookiesAcceptBtn = document.getElementById('cookies-accept-btn')

const cookiesConfigMenu = document.getElementById('cookies-config')
const cookieSaveAcceptBtn = document.getElementById('cookie-save-accept-btn')
const cookieShowMoreBtn = document.getElementById('show-more-btn')
const cookieShowLessBtn = document.getElementById('show-less-btn')
const cookieTextContinue = document.getElementById('cookie-text-continuation')
const cookieMoreInfo = document.getElementById('cookie-more-info')

cookiesLearnMoreBtn.addEventListener('click', ()=>{
  useCookiesAlert.classList.add('hidden')
  pages.forEach((page)=>{
    page.classList.remove('hidden')
    page.classList.add('hidden')
    cookiesPolicyPage.classList.remove('hidden')
  })
})

cookiesConfigBtn.addEventListener('click', ()=>{
  useCookiesAlert.classList.add('hidden')
  cookiesConfigMenu.classList.remove('hidden')
})

cookiesAcceptBtn.addEventListener('click', ()=>{
  useCookiesAlert.classList.add('hidden')
  reviewConsentBtn.classList.remove('hidden')
})
reviewConsentBtn.addEventListener('click', ()=>{
  reviewConsentBtn.classList.add('hidden')
  useCookiesAlert.classList.remove('hidden')
})

cookieSaveAcceptBtn.addEventListener('click', ()=>{
  cookiesConfigMenu.classList.add('hidden')
  reviewConsentBtn.classList.remove('hidden')
})


cookieShowMoreBtn.addEventListener('click', ()=>{
  cookieTextContinue.classList.add('hidden')
  cookieShowMoreBtn.classList.add('hidden')
  cookieMoreInfo.classList.remove('hidden')
  cookieShowLessBtn.classList.remove('hidden')
})
cookieShowLessBtn.addEventListener('click', ()=>{
  cookieTextContinue.classList.remove('hidden')
  cookieShowMoreBtn.classList.remove('hidden')
  cookieMoreInfo.classList.add('hidden')
  cookieShowLessBtn.classList.add('hidden')
})


const pages = [
  heroEl, 
  novoEl, 
  inicioEl, 
  contatoEl, 
  sobreEl, 
  faqsEl,
  cookiesPolicyPage
];

// window.addEventListener('resize', ()=> {
//   const windowWidth = window.innerWidth
//   // console.log(windowWidth);
//   if(windowWidth === 1024 || windowWidth === 1025){
//     location.reload()
//     console.log('page reloaded');
//   }
// })


flipCard.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.firstElementChild.style.display = "flex";
  });
  card.addEventListener("mouseleave", () => {
    card.firstElementChild.style.display = "none";
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "novo":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        novoEl.classList.remove("hidden");
        e.target.classList.add("active");
        if(mobileMenuBtn.classList.value === 'active'){
          mobileNav.classList.remove('active')
          mobileNavMenu.classList.remove('active')
          mobileMenuBtn.classList.remove('active')
          pageBody.classList.remove('lock-scroll')
        }
        break;
      case "início":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        heroEl.classList.remove("hidden");
        inicioEl.classList.remove("hidden");
        e.target.classList.add("active");
        if(mobileMenuBtn.classList.value === 'active'){
          mobileNav.classList.remove('active')
          mobileNavMenu.classList.remove('active')
          mobileMenuBtn.classList.remove('active')
          pageBody.classList.remove('lock-scroll')
        }
        break;
        case "contato":
          pages.forEach((page)=> page.classList.add('hidden'))
          navItems.forEach((item) => item.classList.remove("active"));
          contatoEl.classList.remove('hidden')
          e.target.classList.add("active");
          if(mobileMenuBtn.classList.value === 'active'){
            mobileNav.classList.remove('active')
            mobileNavMenu.classList.remove('active')
            mobileMenuBtn.classList.remove('active')
            pageBody.classList.remove('lock-scroll')
          }
          break;
      case "sobre":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        sobreEl.classList.remove("hidden");
        e.target.classList.add("active");
        if(mobileMenuBtn.classList.value === 'active'){
          mobileNav.classList.remove('active')
          mobileNavMenu.classList.remove('active')
          mobileMenuBtn.classList.remove('active')
          pageBody.classList.remove('lock-scroll')
        }
        break;
      case "FAQ":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        faqsEl.classList.remove("hidden");
        e.target.classList.add("active");
        if(mobileMenuBtn.classList.value === 'active'){
          mobileNav.classList.remove('active')
          mobileNavMenu.classList.remove('active')
          mobileMenuBtn.classList.remove('active')
          pageBody.classList.remove('lock-scroll')
        }
        break;
      default:
        console.log("ERROR");
    }
  });
});

faqToggle.forEach((toggle)=>{
  toggle.addEventListener('click', (e)=>{
    e.target.parentElement.classList.toggle('active')
    let text = e.target.parentElement.parentElement.children[1]
    text.classList.toggle('active')
    if (text.style.maxHeight) {
      text.style.maxHeight = null;
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
    }
  })
})

cookieToggle.forEach((toggle)=>{
  toggle.addEventListener('click', (e)=>{
    e.target.parentElement.classList.toggle('active')
    console.log(e.target.parentElement);
    // let text = e.target.parentElement.parentElement.children[1]
    text.classList.toggle('active')
    if (text.style.maxHeight) {
      text.style.maxHeight = null;
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
    }
  })
})


whatsappWidgetBtn.addEventListener('click', ()=>{
  whatsappWidgetBtn.classList.add('active')
  openWidgetBtn.classList.remove('active')
  whatsappWidget.classList.add('active')
  openChatBtn.classList.add('active')
})
whatsappCloseBtn.addEventListener('click', ()=>{
  whatsappWidgetBtn.classList.remove('active')
  openWidgetBtn.classList.add('active')
  whatsappWidget.classList.remove('active')
  openChatBtn.classList.remove('active')
})

mobileMenuBtn.addEventListener('click', ()=>{
  if(mobileMenuBtn.classList.value === 'active'){
    mobileNav.classList.remove('active')
    mobileNavMenu.classList.remove('active')
    mobileMenuBtn.classList.remove('active')
    pageBody.classList.remove('lock-scroll')
  } else {
    mobileNav.classList.add('active')
    mobileNavMenu.classList.add('active')
    mobileMenuBtn.classList.add('active')
    pageBody.classList.add('lock-scroll')
  }
})



