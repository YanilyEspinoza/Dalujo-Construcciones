// EVENTO ENVIO DE FORMULARIO
const eventoContacto = () => {
    Swal.fire({
    title: '¡Gracias por elegirnos, Pronto te contactaremos!',
    width: 600,
    padding: '3em',
    color: 'hsl(300, 89%, 24%)',
    background: '#fff url(../assets/images/1.jpg)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("../assets/images/Dalujo Construcciones.png")   
      left top
      repeat
    `
    }).then((result) => {
      result.isConfirmed ? location.href = "../index.html" : swalWithBootstrapButtons.fire('¡Error al enviar!','success')
    })
  }
  btnEnviar.addEventListener("click", eventoContacto)

  // ELIMINAR DATOS DE LOCALSTORE
const eliminarDatos = () =>{
  event.preventDefault()
  localStorage.removeItem("nombre",inputNombre.value)
  localStorage.removeItem("apellido",inputApellido.value)
  localStorage.removeItem("email",inputEmail.value)
  localStorage.removeItem("fechaEvento",inputDate.value)
  localStorage.removeItem("comentarios",inputComentarios.value)
  inputNombre.value = ""
  inputApellido.value = ""
  inputEmail.value = ""
  inputDate.value = ""
  inputComentarios.value = ""
}
btnEnviar.addEventListener("click",eliminarDatos)

// GUARDAR DATOS EN LOCALSTORE
const guardarDatos = () =>{
localStorage.setItem("nombre",inputNombre.value)
localStorage.setItem("apellido",inputApellido.value)
localStorage.setItem("email",inputEmail.value)
localStorage.setItem("fechaEvento",inputDate.value)
localStorage.setItem("comentarios",inputComentarios.value)
}
inputNombre.addEventListener("input",guardarDatos)
inputApellido.addEventListener("input",guardarDatos)
inputEmail.addEventListener("input",guardarDatos)
inputDate.addEventListener("input",guardarDatos)
inputComentarios.addEventListener("input",guardarDatos)

// RECUPERAR DATOS EN LOCALSTORE
const recuperarDatos = () =>{
  nombreContacto == null ? inputNombre.value = "Yani" : inputNombre.value = localStorage.getItem("nombre") 
  apellidoContacto == null ? inputApellido.value = "Espinoza" : inputApellido.value = localStorage.getItem("apellido") 
  emailContacto == null ? inputEmail.value = "yani@gmail.com" : inputEmail.value = localStorage.getItem("email")
  dateContacto == null ? inputDate.value = "2022-12-10" : inputDate.value = localStorage.getItem("fechaEvento") 
  commentContacto == null ? inputComentarios.value = "Quiero la casa mas grande" : inputComentarios.value = localStorage.getItem("comentarios")
}
document.addEventListener("DOMContentLoaded", recuperarDatos)