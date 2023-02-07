
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