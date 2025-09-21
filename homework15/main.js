const closeBtn = document.querySelector('.modal__close-btn')
const openBtn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body=document.body



openBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    body.style.overflow='hidden'
})
modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeBtn) {
        modal.style.display = 'none'
    }
})

document.addEventListener('keydown',event=>{
    if (event.code==='Escape'){
        modal.style.display = 'none'
    }
})