// FOOTER ___ EVENTO SUSCRIPCION DE USUARIOS A NEWSLETTER
                //ALERTA DE SWEETALERT2
const eventoNewsLetter = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (eventoNewsLetter) => {
        eventoNewsLetter.addEventListener('mouseenter', Swal.stopTimer)
        eventoNewsLetter.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
const newsLetterError = ()=> {  
    eventoNewsLetter.fire({
    icon: 'error',
    title: 'Suscripción no enviada'
  })
}
const newsLetterSuccess = ()=> {  
    eventoNewsLetter.fire({
      icon: 'success',
      title: 'Suscripción enviada'
    }).then(()=>{
      inputNewsletter.value = ""
    })
}
                //EVENTO SIMULA SUSCRIPCIÓN A NEWSLETTER
const suscripcionNewsletter = () => {
    let param = inputNewsletter.value
    param !== "" ? newsLetterSuccess() : newsLetterError()
}
enviarNewsLetter.addEventListener("click", suscripcionNewsletter)
inputNewsletter.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      event.preventDefault();
      suscripcionNewsletter()
    }
  });

//RECUPERAR EL CARRITO
const recuperarCarrito = () => localStorage.getItem("carritos") ? carritos = JSON.parse(localStorage.getItem("carritos")) : console.log("No se encontró nada")

/* const recuperarCarrito = () =>{
  if(localStorage.getItem("carritos")){
    let chequeo=()=>{
      if(carritos.length !== 0 ){
        carritos = JSON.parse(localStorage.getItem("carritos")) 
      }else{
        //localStorage.removeItem('carritos')
        console.log("el carrito tiene 0 elementos")
      }
    }
    chequeo()
  }else{
    console.log("No se encontró nada en el carrito")
  }
} */
recuperarCarrito()
//NUMERO DE LOGO DE CARRITO
let totalDeCarrito = carritos.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);
const cargarNumero = (param) => {
  fila = `${param}`
  navNumCarrito.innerHTML += fila
}
cargarNumero(totalDeCarrito)