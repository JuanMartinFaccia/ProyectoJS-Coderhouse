
document.addEventListener('DOMContentLoaded', pintarProductos(productos)) 

document.addEventListener('DOMContentLoaded', cargarCarrito) 



//JSON

const lista = document.getElementById('producto-contenedor') 

fetch('/data.json')
   .then((resp) => resp.json())
   .then(data => console.log(data))



