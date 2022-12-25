//tema- Simulador de conpra de paneles solares, termotanques solares...
const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt ("¿Querés comprar KIT Paneles Solares, KIT Termotanques Solares o Baterías de litio ?", "Ej:KIT Paneles Solares");
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));

        let cantidadValidada = validarCantidad(cantidad);

    switch (producto) {
        case "KIT Paneles Solares":
            precio = 150000;
            break;
        case "KIT Termotanques Solares":
            precio = 120000;
            break;
        case "Baterías de litio":
            precio = 250000;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            cantidad= 0;
    }

    totalCompra += precio * cantidadValidada;
    seguirComprando = confirm("¿Querés agregar otro producto?");



    } while (seguirComprando)

    const totalConDescuento = aplicarDescuento(totalCompra);
    const totalConEnvio = calcularEnvio(totalConDescuento);

    return totalConEnvio;
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Deber agregar un número.')
        } else {
            alert('Debe agregar un número distinto de cero.')
        }
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
    }

    return cantidad;
};

const aplicarDescuento = (totalCompra) => {
    let totalConDescuento = 0;

    if (totalCompra >= 500000) {
        totalConDescuento = totalCompra * 0.90;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
}

const calcularEnvio = (totalCompra) => {
    let tieneEnvioADomicilio = false;

    let direccionDomicilio = '';
    let numeroDeDomicilio = 0;
    let nombre = '';
     
    tieneEnvioADomicilio = confirm("¿Querés envío a domicilio?");
    
    if (tieneEnvioADomicilio && totalCompra >= 1000000) {
        alert("Tenés envio gratis. El total de tu compra es $" + totalCompra);
        nombre = prompt('Ingrese su nombre completo').toUpperCase();
        direccionDomicilio = prompt('Ingrese la dirección de su domicilio donde quiere recivir su compra').toUpperCase();
        numeroDeDomicilio = parseInt(prompt('Ingrese el número de su domicilio')); 

        while (Number.isNaN(numeroDeDomicilio)) {
            if (numeroDeDomicilio !== 0) {
                alert('Deber agregar un número.')
            } 
            numeroDeDomicilio = parseInt(prompt ('Ingrese el número de su domicilio'));
        }
        alert ('¡Gracias por su compra! '+nombre+' su pedido será enviado al ' +direccionDomicilio+' '+ numeroDeDomicilio);

    } else if (tieneEnvioADomicilio && totalCompra < 1000000 && totalCompra !== 0) {
       totalCompra += 30000;
       alert("El envío cuesta $30000. El total de tu compra es $" + totalCompra);
       nombre = prompt('Ingrese su nombre completo').toUpperCase();
       direccionDomicilio = prompt('Ingrese la dirección de su domicilio donde quiere recivir su compra').toUpperCase();
       numeroDeDomicilio = parseInt(prompt('Ingrese el número de su domicilio')); 

       while (Number.isNaN(numeroDeDomicilio)) {
        if (numeroDeDomicilio !== 0) {
            alert('Deber agregar un número.')
        } 
        numeroDeDomicilio = parseInt(prompt ('Ingrese el número de su domicilio'));
       }
       alert ('¡Gracias por su compra! '+nombre+' su pedido será enviado al ' +direccionDomicilio+' '+ numeroDeDomicilio);

    } else {
       alert("El total de tu compra es $" + totalCompra);
    }

    return totalCompra;
}

function calcularCantidadDeCuotas() {
    let cuotas = 0;
    let tieneCuotas = false;

    tieneCuotas = confirm("¿Querés pagar en cuotas?");

    if(tieneCuotas) {
        cuotas = parseInt(prompt("¿En cuántas cuotas querés pagar?"));
        if (cuotas === 0){
            cuotas = 1;
        }else if (Number.isNaN(cuotas)){
            calcularCantidadDeCuotas();
        }
    }else {
        cuotas = 1;
    }

    return cuotas;
};

function calcularIntereses (cuotas) {
    let tasa = 12.3;
    let sinIntereses = 0;
    let tasaTotal = 0;
    let interesesTotales = 0;

    if (cuotas === 1){
        return sinIntereses;
    }else{
        tasaTotal = tasa + cuotas * 0.2;
        interesesTotales = tasaTotal * cuotas;
        return interesesTotales;
    }
}

function calcularTotalAPagar (totalCompra, cuotas, intereses) {
    totalCompra = (totalCompra + intereses)
    let valorCuota = totalCompra / cuotas;
    alert ("El total a pagar es $"+totalCompra+" en "+cuotas+" cuotas de $"+valorCuota.toFixed(2));
}

const totalCompra = comprarProductos();
const cuotas = calcularCantidadDeCuotas();
const intereses = calcularIntereses(cuotas);

calcularTotalAPagar(totalCompra, cuotas, intereses);