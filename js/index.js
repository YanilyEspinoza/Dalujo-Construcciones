// Clase constructora de producto
class Producto {
    constructor(id, nombre, medida, precio, precioFinal) {
        this.id = id
        this.nombre = nombre
        this.medida = medida
        this.precio = "$ " + precio
        this.precioFinal = "$ " + precioFinal
    }
}

//Base de Datos
function dataBase() {
    Productos.push(new Producto(955875, "Cordoba", "5", "5000", "5500"))
    Productos.push(new Producto(955876, "Buenos Aires", "4", "3000", "3630"))
    Productos.push(new Producto(955877, "Mendoza", "3", "3500", "4235"))
    Productos.push(new Producto(955878, "Tucuman", "3", "3500", "4235"))
    Productos.push(new Producto(955879, "Jujuy", "4", "4000", "4840"))
    Productos.push(new Producto(955880, "Malvinas", "4", "4000", "4840"))
    Productos.push(new Producto(955880, "Corrientes", "4", "4000", "4840"))
    return console.log
}
dataBase()