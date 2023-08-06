console.log("Hola mundo")

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

