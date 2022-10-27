//SUMAR TOTALES DEL CARRITO


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
                                        <p>Válido: 30 días</p>
                                    </div>
                                    </section>
                                    <section class="col-md-3 d-flex justify-content-center align-items-center p-2">
                                        <p><b>$ ${prod.precioFinal}</b></p>
                                    </section>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <span class="material-symbols-outlined mx-2 mb-1" onclick="eliminarProducto(${prod.id})" id="eliminar${prod.id}">delete</span>
                                <a href="./cotizador.html#producto${prod.id}"><span class="material-symbols-outlined mx-2 mb-1">visibility</span></a>
                                
                            </div>
                        </article>`
            listaDeCarrito.innerHTML += articulosCarrito
        });
    const cargaGeneralCarrito = () => {
        if(carritos.length == 0){
            carritoVacio()
        }else{
            let totalFinal = carritos.reduce((acumulador, prod) => acumulador + prod.precioFinal, 0)
            let totalCompra = `<p><b>$ ${totalFinal}</b></p>`
            let vaciarCarrito = `<button class="btn btn-danger">Vaciar Carrito</button>`
            let finalizarCompra = `<button class="btn btn-danger">Continuar Compra</button>`
            datosTotales.innerHTML += totalCompra
            btnVaciar.innerHTML += vaciarCarrito
            btnComprar.innerHTML += finalizarCompra
        }
    }
    cargaGeneralCarrito()
    }else{
        carritoVacio()
    }   
}
recuperoCarrito()

//CARRITO VACIO
const carritoVacio = () => {     
    let listaVacia = `<h3>Tu carrito está vacío.</h3>
                    <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>`
    listaDeCarrito.innerHTML += listaVacia
    }

//VACIAR EL CARRITO
const vaciarElCarrito =()=>{
    localStorage.removeItem('carritos')
    listaDeCarrito.innerHTML = ""
    datosTotales.innerHTML = ""
    btnVaciar.innerHTML = ""
    btnComprar.innerHTML = ""
    navNumCarrito.innerHTML = ""
    recuperoCarrito()
}
btnVaciar.addEventListener("click", vaciarElCarrito)

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
            vaciarElCarrito()
          Swal.fire({
            text: "Listo! compra realizada",
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.isConfirmed) {
                redireccionarIndex()}})
        }
      })
}
btnComprar.addEventListener("click", compraFinalizada)

//DIRECCIONAR AL INDEX DESDE OTRA PAGINA
const redireccionarIndex=()=>location.href="../index.html" 

//BOTON ELIMINAR POR PRODUCTO
const BotonEliminar =()=> {
    carritos.forEach(prod => {
        const btnEliminar = document.querySelector(`#eliminar${prod.id}`)
        btnEliminar.addEventListener("click", () => {
        recuperarCarrito()
        totalDeCarrito = carritos.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);
        cargarNumero(totalDeCarrito)
    })
    })
}
BotonEliminar()

const eliminarProducto =(id)=> { 
    let indice = carritos.find ( prod => prod.id == id)
    let aEliminar = carritos.indexOf(indice,0)
    carritos.splice(aEliminar,1)
    localStorage.setItem("carritos", JSON.stringify(carritos));
    navNumCarrito.innerHTML = ""
    listaDeCarrito.innerHTML = ""
    datosTotales.innerHTML = ""
    btnVaciar.innerHTML = ""
    btnComprar.innerHTML = ""
    let totalFinal = carritos.reduce((acumulador, prod) => acumulador + prod.precioFinal, 0)
    recuperarCarrito()
    recuperoCarrito()
}