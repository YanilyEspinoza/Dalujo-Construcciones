// ARRAYS DEL PROYECTO
const Productos = [] 
let carritos = []

// VARIABLES 
    // MODELOS.JS
let documentoGrandes = ""
let documentoMedianos = ""
let documentoPequenos = ""

//CONSTANTES
    // COTIZADOR.JS
const NUEVOID = ()=> parseInt(Math.random() * 1000000)
const IVA = 1.21
    // MODELOS.JS
const URL = "../dataBase/modelos.json"
    // CONTACTO.JS
const nombreContacto = localStorage.getItem("nombre")
const apellidoContacto = localStorage.getItem("apellido")
const emailContacto = localStorage.getItem("email")
const dateContacto = localStorage.getItem("fechaEvento")
const commentContacto = localStorage.getItem("comentarios")