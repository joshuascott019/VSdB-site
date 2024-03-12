const flipElement = document.querySelectorAll('.flip-element')
const altEl = document.querySelectorAll('.alternate-element')
const initialEl = document.querySelectorAll('.initial-element')

flipElement.forEach((element)=>{
    element.addEventListener('mouseenter', ()=>{
        element.firstElementChild.style.display = 'flex'
    })
    element.addEventListener('mouseleave', ()=>{
        element.firstElementChild.style.display = 'none'
    })
})