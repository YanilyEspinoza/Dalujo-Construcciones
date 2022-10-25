// ERROR AL CARGAR LAS IMAGENES
const mostrarError = ()=> {
    return `<div class="card d-flex align-items-center">
                <h2>¡Ups... lo sentimos!</h2>
                <img class="errorDeCarga" src="../assets/images/hombrePensando.jpg">
                <p>No pudimos cargar la información.</p>
                <p>Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}
//CONSTRUCION DE LAS TARJETAS DE IMAGENES
const mostrarCard = (contenido)=> {
    const {id,nombre, ruta, imagen, descripcion,} = contenido
    return `<article id="${id}" class="ubicacion_modelos">
                <a class="ubicacion_titulos" href="${ruta}">
                "${nombre}"</a>
                <div class="ubicacion_img">
                    <a href="${ruta}">
                        <img class="imgmodelos" src="../assets/images/${imagen}" title="${nombre}" alt="${descripcion}"
                    </a>
                </div>
            </article>`
}

//CARGA DE CONTENIDO DEL JSON
const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        modelos = data//CAMBIAR
        const arrayGrandes = modelos.filter(e => e.categoria == "GRANDE")
        const arrayMedianos = modelos.filter(e => e.categoria == "MEDIANO")
        const arrayPequenos = modelos.filter(e => e.categoria == "PEQUENO")
        arrayGrandes.forEach(param => documentoGrandes += mostrarCard(param))
        arrayMedianos.forEach(param => documentoMedianos += mostrarCard(param))
        arrayPequenos.forEach(param => documentoPequenos += mostrarCard(param))
    }
    catch (error) {
        documentoModelos += mostrarError()
    }
    finally {
        modelosGrandes.innerHTML = documentoGrandes
        modelosMedianos.innerHTML = documentoMedianos
        modelosPequenos.innerHTML = documentoPequenos
    }
}
document.addEventListener("DOMContentLoaded", async ()=> {
    const espero = await cargarContenido()
})