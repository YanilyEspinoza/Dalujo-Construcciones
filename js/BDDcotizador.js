// Clase constructora de producto                   AQUI ESTOY CONSTRUYENDO LOS OBJETOS PARA EL ARRAY PRODUCTO
class Producto {
    constructor(id, nombre, medida, precio, precioFinal, descripcion, imagenVivienda, cantidad) {
        this.id = id
        this.nombre = nombre
        this.medida = medida
        this.precio = precio
        this.precioFinal = precioFinal
        this.descripcion = descripcion
        this.imagenVivienda = imagenVivienda
        this.cantidad = cantidad
    }
}

//Base de Datos                                 AQUI ESTOY ESTABLECIENDO OBJETOS PARA EL ARRAY
const dataBase =()=> {
    Productos.push(new Producto(955875, "CORDOBA", 500, 5000, 5500, "Excelente modelo de vivienda.", "7.jpg", 0))
    Productos.push(new Producto(955876, "BUENOS AIRES", 400, 3000, 3630, "Excelente modelo de vivienda.", "7.jpg", 0))
    Productos.push(new Producto(955877, "MENDOZA", 300, 3500, 4235, "Excelente modelo de vivienda.", "7.jpg", 0))
    Productos.push(new Producto(955878, "TUCUMAN", 350, 3500, 4235, "Excelente modelo de vivienda.", "7.jpg", 0))
    Productos.push(new Producto(955879, "JUJUY", 400, 4000, 4840, "Excelente modelo de vivienda.", "7.jpg", 0))
    Productos.push(new Producto(955880, "MALVINAS", 420, 4000, 4840, "Excelente modelo de vivienda.", "7.jpg", 0))
    Productos.push(new Producto(955881, "CORRIENTES", 450, 4000, 4840, "Excelente modelo de vivienda.", "7.jpg", 0))
    Productos.push(new Producto(955882, "MISIONES", 410, 4000, 4840, "Excelente modelo de vivienda.", "7.jpg", 0))
}
dataBase()