/*var elemento = document.querySelectorAll('div.elemento')


elemento.forEach(function(elemento){
    elemento.addEventListener('click', function(){
        var imagen = elemento.querySelector('img')
        
        var padre= document.querySelector('div.container_img_compra')
        var compra = padre.querySelector('img.imagen_compra')

        var imagen_compra_clon = compra.cloneNode(true)
        var imagen_clon = imagen.cloneNode(true)
        
        padre.replaceChild(imagen_clon, compra)
        elemento.replaceChild(imagen_compra_clon, imagen)
        imagen_clon.setAttribute('class', 'imagen_compra')
        imagen_clon.classList.remove('img_prueba')
    })
})
*/
const imagenURL = localStorage.getItem("imagenURL");
const imagenAlt = localStorage.getItem("imagenAlt");

const imagen_elemento = document.createElement('img')
imagen_elemento.src= imagenURL
imagen_elemento.alt = imagenAlt


imagen_elemento.classList.add('imagen_comprar')

const padre_elemento = document.getElementById('contenido_comprar')
padre_elemento.appendChild(imagen_elemento)

const texto_titulo = localStorage.getItem("texto_titulo")
const texto_precio = localStorage.getItem("texto_precio")

const elemento_titulo = document.createElement('p')

elemento_titulo.textContent = texto_titulo;
elemento_titulo.classList.add('titulo_compra')

const elemento_precio = document.createElement('p')

elemento_precio.textContent =  texto_precio
elemento_precio.classList.add('precio_compra')

console.log(elemento_precio)
console.log(elemento_titulo)

var cambiar_titulo = document.querySelector('p.titulo_compra')
var cambiar_precio = document.querySelector('p.precio_compra')
var padre_descripcion = document.querySelector('div.container_comprar_descripcion')

padre_descripcion.replaceChild(elemento_titulo, cambiar_titulo)
padre_descripcion.replaceChild(elemento_precio, cambiar_precio)