const navItems = document.querySelectorAll(".nav-item");
const heroEl = document.getElementById('hero')
const novoEl = document.getElementById("novo");
const inicioEl = document.getElementById("inicio");
const contatoEl = document.getElementById('contato')
const sobreEl = document.getElementById("sobre");
const faqsEl = document.getElementById("faqs");
const faqToggle = document.querySelectorAll('.faq-toggle')
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

const pages = [
  heroEl, 
  novoEl, 
  inicioEl, 
  contatoEl, 
  sobreEl, 
  faqsEl
];


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
        }
        break;
      default:
        // console.log("ERROR");
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
  } else {
    mobileNav.classList.add('active')
    mobileNavMenu.classList.add('active')
    mobileMenuBtn.classList.add('active')
  }
})



