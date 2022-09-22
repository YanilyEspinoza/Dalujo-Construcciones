////////////////////             DOM                ////////////////////////////

const cargarProductos = (param1) => {
    let fila = ""
        param1.forEach(Producto => {
            fila = `<tr>
                        <td>${Producto.id}</td>
                        <td class="nombre">${Producto.nombre}</td>
                        <td>${Producto.medida}</td>
                        <td>${Producto.precio}</td>
                        <td>${Producto.precioFinal}</td>
                    </tr>`
            ListaDeProductos.innerHTML += fila
        })
} 
cargarProductos(Productos)

const agregarProducto = () => {
    let id = NUEVOID()
    let nombre = prompt("Ingresa nombre del modelo:")
    let medida = Number(prompt("Ingresa la medida del modelo:"))
    let precio = Number(prompt("Ingresa el precio del modelo:"))
    let precioFinal = Number((precio * IVA).toFixed(2))
    Productos.push(new Producto(id, nombre, medida, precio, precioFinal))
    cargarProductos()
}

//EVENTOS JAVASCRIPT//// NO LOGRO HACER FUNCIONAR EL BUSCADOR

const inputFiltrar = document.querySelector("#filtroProducto")

const filtrarproductos = ()=>{
    let inputf =inputFiltrar.value.toUpperCase()
    if (inputf !== ""){
                    const Resultado = Productos.filter ((Producto)=> Producto.nombre.includes(inputf))
                        if (Resultado.length === 0) {
                        ListaDeProductos.innerHTML=""
                        }else{
                            ListaDeProductos.innerHTML=""
                            cargarProductos (Resultado)
                            console.table(Resultado)
                        }
                    } else {
                        ListaDeProductos.innerHTML=""
                        cargarProductos (Productos)
                    }  
}
inputFiltrar.addEventListener("keyup", filtrarproductos)