//librerías:

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

//

const btnEliminar = document.getElementById('carrito-contenedor')

btnEliminar.addEventListener('click', ()=>{
   Swal.fire({
    title: 'Estás seguro?',
    text: 'Va a elimanr un producto',
    icom:'warning',
    showCancelButton: true, //x defecto:false
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
    confirmCancelText: 'Cancelar',
   }).then((result)=>{  //promesas con eventos en futuro, que se puede llegar a cumplir o no.
    if(result.isConfirmed){ //si da true muesta el Swal sino da false y ignora el swal
        Swal.fire(
            'Eliminado',
            'El producto ha sido eliminado',  //por fecto van tittle,text y icon asi me ahorro escribirlas
            'success',
        )
    }
   }) 
})

