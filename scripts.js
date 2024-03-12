const flipCard = document.querySelectorAll('.flip')
const cardBack = document.querySelectorAll('.feat-card-back')
const cardFront = document.querySelectorAll('.feat-card-front')

flipCard.forEach((card)=>{
    card.addEventListener('mouseenter', ()=>{
        card.firstElementChild.style.display = 'flex'
    })
    card.addEventListener('mouseleave', ()=>{
        card.firstElementChild.style.display = 'none'
    })
})