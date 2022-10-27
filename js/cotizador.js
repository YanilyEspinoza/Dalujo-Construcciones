//IMPORTANDO AL DOCUMENTO ARRAY PRODUCTOS
const cargarProductos = (param1) => {
    let fila = ""
    param1.forEach(Producto => {
        fila = `<div class="col" id="producto${Producto.id}">
                    <div class="card h-100">
                        <img src="../assets/images/${Producto.imagenVivienda}" class="card-img-top" alt="${Producto.descripcion}">
                        <div class="card-body">
                            <h5 class="card-title">${Producto.nombre}</h5>
                            <p class="card-text">${Producto.descripcion}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Tamaño: <b>${Producto.medida}</b> Color: <b>${Producto.color}</b></li>
                            <li class="list-group-item"></li>
                            <li class="list-group-item">Precio: ${Producto.precio} + IVA = <b>${Producto.precioFinal}</b></li>
                        </ul>
                        <div class="card-body">
                            <button id="btn${Producto.id}" type="button" class="btn btn-warning">
                            Agregar</button>
                            <div id="demanda${Producto.id}" class="demandaEstilos position-absolute top-0 start-100 translate-middle badge"></div>
                            <div id="eliminarProd${Producto.id}"></div>
                        </div>
                    </div>
                </div>`
        ListaDeProductos.innerHTML += fila
    })
}
cargarProductos(Productos)

//  EVENTO BUSCAR PRODUCTOS
const filtrarproductos = ()=>{
    let inputf =inputFiltrar.value.toUpperCase()
    if (inputf !== ""){
                    const Resultado = Productos.filter ((Producto)=> Producto.nombre.includes(inputf))
                        Resultado.length === 0 ? ListaDeProductos.innerHTML="" : ListaDeProductos.innerHTML=""
                        cargarProductos (Resultado)
                    } else {
                        ListaDeProductos.innerHTML=""
                        cargarProductos (Productos)
                    }   
}
inputFiltrar.addEventListener("input", filtrarproductos)

// AGREGAR PRODUCTOS 
const agregarProducto =() =>{
    let id = NUEVOID()
    let nombre = prompt("Ingresa el nombre del producto:").toUpperCase()
    let medida = prompt("Ingresa la medida del producto:").toUpperCase() 
    let precio = prompt("Ingresa el precio del producto:")
    let precioFinal = Number((precio * IVA).toFixed(2))
    let descripcion = prompt("Ingresa la descripción del producto:").toUpperCase()
    let imagenGlobo = prompt("Ingresa el nombre del archivo del producto:").toUpperCase()
    let cantidad = 0
    Productos.push(new Producto (id, nombre, medida, precio, precioFinal, descripcion, imagenGlobo, cantidad))
    ListaDeProductos.innerHTML=""
    cargarProductos(Productos)
    eventoBtnAgregar()
}
btnAgregarProd.addEventListener("click", agregarProducto)

//LIBRERIA  sweetalert2
const proAgregadoCarrito = ()=> {
    Swal.fire({
        toast: true,
        title: 'Producto agregado al carrito',
        timer: 2500,
        position: 'center',
        timerProgressBar: true,
        showConfirmButton: false,
        background:  'green',
        color: 'white'
    })
}

// EVENTO BOTON DE AGREGAR PRODUCTOS
const eventoBtnAgregar = () => {
    Productos.forEach(Producto => {
        const btn = document.querySelector(`#btn${Producto.id}`)
        btn.addEventListener("click", ()=> {
            proAgregadoCarrito()
            agregarAlCarrito(Producto.id)
            navNumCarrito.innerHTML = "";
            recuperarCarrito()
            totalDeCarrito = carritos.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);
            cargarNumero(totalDeCarrito)
        })
    })
}
eventoBtnAgregar()

// AGREGAR PRODUCTOS AL ARRAY CARRITO
const agregarAlCarrito =(id)=> {
    debugger
    const Producto = Productos.find(Producto => Producto.id == id)
    Producto.cantidad ++
    carritos.push(Producto)
    localStorage.setItem("carritos", JSON.stringify(carritos))
    document.querySelector(`#demanda${id}`).innerText = Producto.cantidad
}

//ELIMINAR PRODUCTOS AL ARRAY CARRITO
const botonEliminar = () => {
    Productos.forEach(Producto => {
        const btnPres = document.querySelector(`#eliminarProd${Producto.id}`)
        btnPres.addEventListener("click", () => eliminarProd(Producto.id))
    })
}
const eliminarProd = (id) => { 
    let indice = carritos.find ( p => p.id == id)
    let aEliminar = carritos.indexOf(indice,0)
    carritos.splice(aEliminar,1)
    localStorage.setItem("carritos", JSON.stringify(carritos));
    let fila = document.getElementById(`row${id}`)
}
const remover =()=>{
    console.log("remover no disponible")
}
// ORDENAR PRODUCTOS ALFABETICAMENTE
const ordenarA_Z = () => {
    let fila = ""
    ListaDeProductos.innerHTML = fila
    Productos.sort((a,b)=>{
        if (a.nombre > b.nombre) {
            return 1
        }
        if (a.nombre < b.nombre) {
            return -1
        }
        return 0
    })
    cargarProductos(Productos)
    eventoBtnAgregar()
}
btnAZ.addEventListener("click", () => ordenarA_Z())
const ordenarZ_A = () => {
    let fila = ""
    ListaDeProductos.innerHTML = fila
    Productos.sort((a,b)=>{
        if (a.nombre < b.nombre) {
            return 1
        }
        if (a.nombre > b.nombre) {
            return -1
        }
        return 0
    })
    cargarProductos(Productos)
    eventoBtnAgregar()
}
btnZA.addEventListener("click", () => ordenarZ_A())