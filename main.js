//tema- Simulador de conpra de paneles solares, termotanques solares...
let producto = "";
let precio = 0;
let cantidad = 0;
let cantidadTotal =0;
let seguirComprando = false;
let precioTotal = 0;


do {
    producto = prompt ("queres comprar paneles solares, termotanques solares o ambos?", "ej: ambos");   
    cantidad = parseInt(prompt("cuantos quieres comprar?"));
    
               //true                    //false  --> el bucle terminaria cuanso sea false, cuando sea un Número distinto de cero.
    while (Number.isNaN(cantidad) || cantidad === 0){
        if (cantidad !== 0) {
            alert('debe agregar un numero.')
        }else{
            alert('debe agregar un nuero distinto de cero')
        }
        cantidad = parseInt(prompt("cuantos quieres comprar?"));
    }

    switch (producto) {
        case 'paneles solares':
           precio = 100000;
           break;
        case 'termotanques solares':
           precio = 50000;
           break;
        case 'ambos':
           precio = 150000;
           break;
        default:
            alert("algunos de los datos ingresados no es correcto");
            precio = 0;
            cantidad = 0;
    }
    
    precioTotal += precio*cantidad;
    cantidadTotal += cantidad;
    seguirComprando = confirm("quieres seguir comprando?");

       
}while(seguirComprando)
alert('a comprado '+cantidadTotal+' prioductos y el total es $'+precioTotal);

let finalizarCompra = confirm("desea finalizar commpra?");

if (finalizarCompra) alert("su compra se ha realizado con exito!");
if (!finalizarCompra) alert("esperamos volver a verlo pronto!")