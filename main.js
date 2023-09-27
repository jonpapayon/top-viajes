// navbar
const menu = document.querySelector('#menu')
const open = document.querySelector('#open')
const close = document.querySelector('#close')
open.addEventListener('click', () => {
    menu.classList.add('visible')
})
close.addEventListener('click', () => {
    menu.classList.remove('visible')
})
// form
const formuario = document.querySelector('#miFormulario')
const buttonMailto = document.querySelector('#trucazo')
formuario.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('nombre'))
    buttonMailto.setAttribute('href', `mailto:whyjonpapayon@gmail.com?subject=nombre: ${form.get('nombre')} correo: ${form.get('email')} ceular: ${form.get('telefono')}&body=${form.get('mensaje')}`)
    buttonMailto.click()
}

