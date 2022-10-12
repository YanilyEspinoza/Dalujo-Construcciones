//CONSTANTES

const NUEVOID = ()=> parseInt(Math.random() * 1000000)
const Productos = [] 
const Carrito = []
const IVA = 1.21
const ListaDeProductos = document.querySelector("#listaDeProductos")

const contenedor = document.querySelector(".contenedor")
//VARIABLES 
let modelos = []
let documentoModelos = ""

// CONSTANTE DE RUTA A NUESTRA BASE DE DATOS EN FORMATO JSON
const URL = "../dataBase/modelos.json"

const mostrarError = ()=> {
    return `<div class="card d-flex align-items-center">
                <h2>¡Ups... lo sentimos!</h2>
                <img class="errorDeCarga" src="../assets/images/hombrePensando.jpg">
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const mostrarCard = (contenido)=> {
    const {id, nombre, precio, precioFinal, imagen, descripcion, medida} = contenido
    return `<div class="card">
                <img id="${id}" class="errorDeCarga" src="../assets/images/${imagen}" title="${nombre}" alt="${descripcion}">
                <div>
                <p title="${nombre}">${nombre} - ${medida}</p>
                <p >${precio}</p>
                <p >${precioFinal}</p>
                </div>
                <div class="align-btn">
                    <button class="btn btn-warning m-1" id="${id}">AGREGAR</button>
                </div>
            </div>`
}

const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        modelos = data
        modelos.forEach(param => documentoModelos += mostrarCard(param))
    }
    catch (error) {
        documentoModelos += mostrarError()
    }
    finally {
        contenedor.innerHTML = documentoModelos
    }
}

document.addEventListener("DOMContentLoaded", async ()=> {
    const espero = await cargarContenido()
          //activarClicks()
          console.log("Hola Hola Perinola")
})