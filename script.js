//  
const $form = document.querySelector('#form')
const $botonMailto = document.querySelector('#envio-mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  console.log(form.get('name'))
  $botonMailto.setAttribute('href', `mailto:enelmercho_escuchandofercho@email.com?subject=${form.get('name')} [ ${form.get('email')} ]&body=${form.get('message')}`)
  $botonMailto.click()
}
