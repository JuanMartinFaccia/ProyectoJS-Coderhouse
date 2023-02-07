//librerías:
//btn-comprar
const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    if(carrito == 0){
        Swal.fire({ 
           icon: 'error', 
           title: 'Error',
           text: 'No ha agregado ningun producto al carrito',
        })
    }else{
        Swal.fire({ 
            icon: 'success', 
            title: 'Comprado',
            text: 'Su compra ha sido realizada con éxito',
         })
    }
})

//bnt elminar

const btnEliminar = document.getElementById('carrito-contenedor')

btnEliminar.addEventListener('click', ()=>{
   Swal.fire({
    title: 'Estás seguro?',
    text: 'Va a elimanr un producto',
    icom:'warning',
    showCancelButton: true, 
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
    confirmCancelText: 'Cancelar',
   }).then((result)=>{  
    if(result.isConfirmed){ 
        Swal.fire(
            'Eliminado',
            'El producto ha sido eliminado',  
            'success',
        )
    }
   }) 
})

