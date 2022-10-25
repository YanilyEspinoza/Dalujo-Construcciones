//SUMAR TOTALES DEL CARRITO
let totalFinal = carritos.reduce((acumulador, prod) => acumulador + prod.precioFinal, 0)

// RECUPERAR PRODUCTOS DEL ARRAY CARRITO
const recuperoCarrito = () => {
    if (localStorage.getItem("carritos") !== null){
    let carrito = JSON.parse(localStorage.getItem("carritos"))
        carrito.forEach(prod => {
            let articulosCarrito = `<article class="card p-3" id="cajaProducto${prod.id}">
                            <div class="row g-0">
                                <section class="col-md-3">
                                    <img src="../assets/images/${prod.imagenVivienda}" class="img-fluid rounded-start imagenCarrito" alt="...">
                                </section>
                                <div class="col-md-9 row g-0">
                                    <section class="col-md-6 d-flex justify-content-center align-items-center p-2">
                                        <div class="card-body ">
                                            <h5 class="card-title">${prod.nombre}</h5>
                                            <p class="card-text"><small class="text-muted">ID: ${prod.id}</small></p>
                                        </div>
                                    </section>
                                    <section class="col-md-3 d-flex justify-content-center align-items-center p-2">
                                    <div class="cantidad d-flex justify-content-center">
                                        <button id="disminuir"> - </button>
                                        <input type="number" min="1" max="100" step="1" value="${prod.cantidad}" id="inputCantidad" readonly>
                                        <button id="aumentar" > + </button>
                                    </div>
                                    </section>
                                    <section class="col-md-3 d-flex justify-content-center align-items-center p-2">
                                        <p><b>${prod.precioFinal}</b></p>
                                    </section>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <span class="material-symbols-outlined mx-2 mb-1" id="eliminar${prod.id}">delete</span>
                                <a href="./tienda.html#producto${prod.id}"><span class="material-symbols-outlined mx-2 mb-1">visibility</span></a>
                                
                            </div>
                        </article>`
            listaDeCarrito.innerHTML += articulosCarrito
        });
    const cargaGeneralCarrito = () => {
    let totalCompra = `<p><b>$ ${totalFinal}</b></p>`
    let finalizarCompra = `<button class="btn btn-danger">Continuar Compra</button>`
        datosTotales.innerHTML += totalCompra
        btnComprar.innerHTML += finalizarCompra
    }
    cargaGeneralCarrito()
    }else{const carritoVacio = () => {
        let listaVacia = `<h3>Tu carrito está vacío.</h3>
                        <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>`
        listaDeCarrito.innerHTML += listaVacia
        }
        carritoVacio()
    }   
}
recuperoCarrito()

//EVENTO COMPRA FINALIZADA
const compraFinalizada = () => {
    Swal.fire({
        title: '¿Quieres completar la compra?',
        text: "Se te enviará un detalle por mail.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ff545452',
        cancelButtonColor: '#a52a2a',
        confirmButtonText: 'Comprar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'Compra Realizada',
            'success'
          )
        }
      })
}
btnComprar.addEventListener("click", compraFinalizada)

function BotonEliminar() {
    carritos.forEach(prod => {
        const btnEliminar = document.querySelector(`#eliminar${prod.id}`)
        btnEliminar.addEventListener("click", () => eliminarProducto(`${prod.id}`))
    })
}
BotonEliminar()

function eliminarProducto(id) { 
    let indice = carritos.find ( prod => prod.id == id)
    let aEliminar = carritos.indexOf(indice,0)
    carritos.splice(aEliminar,1)
    localStorage.setItem("carritos", JSON.stringify(carritos));
    listaDeCarrito.innerHTML = ""
    datosTotales.innerHTML = ""
    btnComprar.innerHTML = ""
    let totalFinal = carritos.reduce((acumulador, prod) => acumulador + prod.precioFinal, 0)
    //cargaGeneralCarrito()
    recuperoCarrito()
    
    //cargaGeneralCarrito()
    //cajaProducto == ""
    
    
    //fila.remove()
    //calcularTotal()
}