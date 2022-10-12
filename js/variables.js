//CONSTANTES

const NUEVOID = ()=> parseInt(Math.random() * 1000000)
const Productos = [] 
const Carrito = []
const IVA = 1.21
const ListaDeProductos = document.querySelector("#listaDeProductos")

// CONSTANTE DE RUTA A NUESTRA BASE DE DATOS EN FORMATO JSON
const URL = "../dataBase/modelos.json"

const mostrarError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <img src="../assets/images/hombrePensando.jpg">
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const mostrarCard = (contenido)=> {
    const {id, nombre, precio, precioFinal, imagen, descripcion, medida} = contenido
    return `<div class="card">
                <img id="${id}" src="../assets/images/${imagen}" title="${nombre} - ${categoria}" alt="${descripcion}">
                <div>
                <p title="${nombre}">${nombre} - ${medida}</p>
                <p >${precio}</p>
                <p >${precioFinal}</p>
                </div>
                <div class="align-btn">
                    <button class="card-button" id="${id}">AGREGAR</button>
                </div>
            </div>`
}

const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        Productos = data
        console.table(Productos)
        Productosx.forEach(param => contenidoHTML += mostrarCard(param))
    }
    catch (error) {
        contenidoHTML += mostrarError()
    }
    finally {
        contenedor.innerHTML = contenidoHTML
    }
}