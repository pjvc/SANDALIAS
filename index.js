var comprar = document.querySelectorAll('li.sandalias-ventas')
    comprar.forEach(enlace =>{
        enlace.addEventListener('click', function realizar(event){
           event.preventDefault()
           const imagenURL = event.target.closest("a").querySelector("img").src;
           const imagenAlt = event.target.alt;
           localStorage.setItem("imagenURL", imagenURL);
           localStorage.setItem("imagenAlt", imagenAlt);
           const texto_titulo = event.target.closest("a").querySelector("p.descripcion_sandalia").textContent
           const texto_precio = event.target.closest("a").querySelector("p.precio-sandalia").textContent
           localStorage.setItem("texto_titulo",texto_titulo)
           localStorage.setItem("texto_precio", texto_precio)
           window.location.href = "./comprar.html"
        })
})


document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll("li.sandalias-ventas").forEach(articulo =>{
            articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?articulo.classList.remove("filtro")
            :articulo.classList.add("filtro")
        } )
    }
})

var listas = document.querySelectorAll("li.sandalias-ventas")
listas.forEach(elemento=>{
})
function saludar(){
    console.log("Hola")
}
var productos = document.querySelector("div.contenedor-ventas")
var precio = document.querySelectorAll("p.precio-sandalia")
var seleccionar_precio = document.getElementById('seleccionar_precio')
var seleccionar_precio_cel = document.getElementById('seleccionar_precio_cel')

seleccionar_precio.addEventListener('change', (event)=>{
    if("10" == seleccionar_precio.value){
        listas.forEach(elemento=>{
           elemento.classList.remove("filtro")
           var recorrido = elemento.textContent.match(/\d+/g)
           if(recorrido > 10){
            elemento.classList.add("filtro")
           }
           
        })
    }  
    else if("15"==seleccionar_precio.value){
        listas.forEach(elemento=>{
            elemento.classList.remove("filtro")
            var recorrido = elemento.textContent.match(/\d+/g)
            if(recorrido > 15){
             elemento.classList.add("filtro")
            }
            
         })
    }
    else if("25"==seleccionar_precio.value) {
        listas.forEach(elemento=>{
            elemento.classList.remove("filtro")
            var recorrido = elemento.textContent.match(/\d+/g)
            if(recorrido > 25){
             elemento.classList.add("filtro")
            }
         })
    }
    else{
        listas.forEach(elemento=>{
            elemento.classList.remove("filtro")
        })
    }

})

seleccionar_precio_cel.addEventListener('change', (event)=>{
    if("10" == seleccionar_precio_cel.value){
        listas.forEach(elemento=>{
           elemento.classList.remove("filtro")
           var recorrido = elemento.textContent.match(/\d+/g)
           if(recorrido > 10){
            elemento.classList.add("filtro")
           }
           
        })
    }  
    else if("15"==seleccionar_precio_cel.value){
        listas.forEach(elemento=>{
            elemento.classList.remove("filtro")
            var recorrido = elemento.textContent.match(/\d+/g)
            if(recorrido > 15){
             elemento.classList.add("filtro")
            }
            
         })
    }
    else if("25"==seleccionar_precio_cel.value) {
        listas.forEach(elemento=>{
            elemento.classList.remove("filtro")
            var recorrido = elemento.textContent.match(/\d+/g)
            if(recorrido > 25){
             elemento.classList.add("filtro")
            }
         })
    }
    else{
        listas.forEach(elemento=>{
            elemento.classList.remove("filtro")
        })
    }

})


window.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var ulhide = urlParams.get('ulhide');
    console.log(ulhide)
    var lista =  document.getElementById(ulhide)
    if(lista){
        lista.classList.remove('filtro_listas')
    }
})
var sandalia = document.querySelector('a#lista_sandalia')
var plataforma = document.querySelector('a#lista_plataforma')
var tacon = document.querySelector('a#lista_tacon')

var sandalia_cel = document.querySelector('a#sandalia_cel')
var plataforma_cel = document.querySelector('a#plataforma_cel')
var tacon_cel = document.querySelector('a#tacon_cel')


var lista_sandalia = document.querySelector('ul#sandalia')
var lista_plataforma = document.querySelector('ul#plataforma')
var lista_tacon  = document.querySelector('ul#tacon')

sandalia.addEventListener('click', (event)=>{
    event.preventDefault()
    lista_sandalia.classList.remove('filtro_listas')
    lista_plataforma.classList.add('filtro_listas')
    lista_tacon.classList.add('filtro_listas')
})

plataforma.addEventListener('click', (event)=>{
    event.preventDefault()
    lista_sandalia.classList.add('filtro_listas')
    lista_plataforma.classList.remove('filtro_listas')
    lista_tacon.classList.add('filtro_listas')
})

tacon.addEventListener('click', (event)=>{
    event.preventDefault()
    lista_sandalia.classList.add('filtro_listas')
    lista_plataforma.classList.add('filtro_listas')
    lista_tacon.classList.remove('filtro_listas')
})
sandalia_cel.addEventListener('click', (event)=>{
    event.preventDefault()
    lista_sandalia.classList.remove('filtro_listas')
    lista_plataforma.classList.add('filtro_listas')
    lista_tacon.classList.add('filtro_listas')
})
plataforma_cel.addEventListener('click', (event)=>{
    event.preventDefault()
    lista_sandalia.classList.add('filtro_listas')
    lista_plataforma.classList.remove('filtro_listas')
    lista_tacon.classList.add('filtro_listas')
})
tacon_cel.addEventListener('click', (event)=>{
    event.preventDefault()
    lista_sandalia.classList.add('filtro_listas')
    lista_plataforma.classList.add('filtro_listas')
    lista_tacon.classList.remove('filtro_listas')
})