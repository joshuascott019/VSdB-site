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
const whatsappBtn = document.getElementById('whatsapp-widget-button')
const whatsappCloseBtn = document.getElementById('whatsapp-close-btn')
const whatsappWidget = document.getElementById('whatsapp-widget')

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
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "novo":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        novoEl.classList.remove("hidden");
        e.target.classList.add("active");
        break;
      case "início":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        heroEl.classList.remove("hidden");
        inicioEl.classList.remove("hidden");
        e.target.classList.add("active");
        break;
        case "contato":
          pages.forEach((page)=> page.classList.add('hidden'))
          navItems.forEach((item) => item.classList.remove("active"));
          contatoEl.classList.remove('hidden')
          e.target.classList.add("active");
          break;
      case "sobre":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        sobreEl.classList.remove("hidden");
        e.target.classList.add("active");
        break;
      case "FAQ":
        pages.forEach((page) => page.classList.add("hidden"));
        navItems.forEach((item) => item.classList.remove("active"));
        faqsEl.classList.remove("hidden");
        e.target.classList.add("active");
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

whatsappBtn.addEventListener('click', ()=>{
  whatsappWidget.classList.add('active')
  whatsappBtn.classList.toggle('active')
})
whatsappCloseBtn.addEventListener('click', ()=>{
  whatsappWidget.classList.remove('active')
  whatsappBtn.classList.remove('active')
})



