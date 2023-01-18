//tema- Simulador de conpra de paneles solares, termotanques solares...
//array vacio que va a represetar  mi carrito de compras


const carrito = []



    const ordenarMenorMayor = () => {
       productos.sort((a,b) => a.precio - b.precio)
       mostrarListaOrdenada()
   };

    const ordenarMayorMenor = () => {
        productos.sort((a, b) => b.precio - a.precio)
        mostrarListaOrdenada()
   };

   const mostrarListaOrdenada  = () => {   
        const listaDeProductos= productos.map(producto =>{
            return '- '+producto.nombre+' $'+producto.precio  
        })                                                  
        alert('Lista de precios:'+'\n\n'+listaDeProductos.join('\n')) 
        comprarProductos(listaDeProductos)
   };                                                           
        
   


const comprarProductos = (listaDeProductos) => {    
    let productoNombre = ''                         
    let productoCantidad = 0
    let otroProducto = false     

    do {
        productoNombre = prompt('¿Qué producto desea comprar?'+'\n\n'+listaDeProductos.join('\n'))
        productoCantidad =parseInt(prompt('¿Cuántos queres comprar?'))

        const  producto =  productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase())  
        console.log(producto) 
                                                
        if(producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)  
        } else{
            alert('El producto no se encuentra en el catálogo!')
        }
        
        otroProducto = confirm('Desea agregar otro producto?')
    } while (otroProducto);

    confirmarCompra() 
    
};  


const agregarAlCarrito = (producto,  productoId, productoCantidad) => {

     const productoRepetido = carrito.find(producto => producto.id === productoId)
     if (!productoRepetido) {
        producto.cantidad += productoCantidad    
        carrito.push(producto)                    
     } else {
        productoRepetido.cantidad += productoCantidad
     }
       
};

const eliminarProductoCarrito= (nombreProductoAEliminar) => {
     carrito.forEach( (producto, index  ) => {
        if(producto.nombre.toLowerCase() === nombreProductoAEliminar.toLowerCase()) {
            if( producto.cantidad > 1) {
                producto.cantidad --
            } else{
                carrito.splice(index, 1)  
            }
        }
     }) 

     confirmarCompra()
};   

const confirmarCompra = () => {

    const listaProductos =  carrito.map(producto => {
     return '- '+producto.nombre+' | Cantidad:  '+producto.cantidad
    } )
    
    const isCheckout = confirm('Checkout:  ' 
         +'\n\n'+listaProductos.join('\n')
         +'\n\nPara continuar precione "Aceptar" sino "Cancelar" para eliminar un producto del carrito '
    )
    if(isCheckout) {
        finalizarCompra(listaProductos)  
    } else {
        const nombreProductoAEliminar = prompt('Ingrese el nombre del producto a eliminar')
        eliminarProductoCarrito (nombreProductoAEliminar)  
    }

};

//5º ahora defino finalizar compra
const finalizarCompra = (listaDeProductos) => {
     const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0 )    //acc almacena la catidad total//item representa a cada objeto del array carrito
     const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0 )
     alert ('Detalle de su compra: '
     +'\n\n'+listaDeProductos.join('\n')
     +'\n\nTotal de productos: '+cantidadTotal 
     +'\n\nEl total de su compra es: '+precioTotal
     +'\n\nGracias por su compra!' 
    )
};

//6º defino comprar

const   comprar = () => {
    const productosBaratos = confirm('Querés ordenar la lista de productos del mas barato al más caro?')
    if(productosBaratos) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor
    }
};



comprar ()