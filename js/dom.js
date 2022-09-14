////////////////////             DOM                ////////////////////////////

function cargarProductos() {
    let fila = ""
        Productos.forEach(Producto => {
            fila = `<tr>
                        <td>${Producto.id}</td>
                        <td class="nombre">${Producto.nombre}</td>
                        <td>${Producto.medida}</td>
                        <td>${Producto.precio}</td>
                        <td>${Producto.precioFinal}</td>
                    </tr>`
                    listaDeProductos.innerHTML += fila
        })
    } 
cargarProductos()

function agregarProducto() {
    let id = NUEVOID()
    let nombre = prompt("Ingresa nombre del modelo:")
    let medida = prompt("Ingresa la medida del modelo:")
    let precio = prompt("Ingresa el precio del modelo:")
    let precioFinal = parseFloat((precio * IVA).toFixed(2))
    NProductos.push(new Producto(id, nombre, medida, precio, precioFinal))
    function cargarProductos() {
        let fila = ""
            NProductos.forEach(Producto => {
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
    cargarProductos()    
}
///////////////BUSCAR OTRO METODO PARA CARGAR PRODUCTOS, PARA QUE SEA EN LA MISMA ARRAY//////////////
/////////////// si preciono cancelar se carga como null ///////////////////////////////


//EVENTOS JAVASCRIPT//// NO LOGRO HACER FUNCIONAR EL BUSCADOR

const inputFiltrar = document.getElementById("#filtroProducto")

function filtrarProductos() {
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const Resultado = Productos.filter(Producto => Producto.nombre.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarProductos(Productos)
              } else {
                cargarProductos(Resultado)
              }
    } else {
        cargarProductos(Productos)
    }
}

//inputFiltrar.addEventListener("#filtroProducto", filtrarProductos) 


const filtroProducto = document.getElementById("filtroProducto")


// OTRO MÉTODO, NO LOGRO DESAPARECER TODA LA FILA /////////////////////////////////

/* function buscarPorNombre() {
    let input = document.getElementById('filtroProducto').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('nombre');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="text-primary";                 
        }
    }
}
 */