let valorDolar = 485

class Producto {
    constructor(marca, modelo, rangoEdad, deporte, tamanio, precio, stock) {
        this.marca = marca;
        this.modelo = modelo;
        this.rangoEdad = rangoEdad;
        this.deporte = deporte;
        this.tamanio = tamanio;
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
    }
    precioEnPesos() {
        return this.precio * valorDolar;
    }
    sumarIva() {
        return this.precio * valorDolar * 1.21;
    }
    precioDeVenta() {
        return this.precio * valorDolar * 1.21 * 1.3;
    }
}


// declarar un array vacío para almacenar los productos
const productos = [];

// función para agregar productos nuevos
function agregarProducto() {
    let marca = prompt("Ingrese la marca del producto (Ej: 'ROSSIGNOL' ,'K2', 'HEAD'):");
    let modelo = prompt("Ingrese el modelo del producto (Ej: 'ESCAPER','MINDBENDER', 'KORE93'):");
    let rangoEdad = prompt("Ingrese el rango de edad del producto ('ADULTO', 'KIDS'):");
    let deporte = prompt("Ingrese el deporte del producto ( 'SKI' o 'SNOWBOARD'):");
    let tamanio;
    let precio;
    let stock;

    while (isNaN(tamanio)) {
        tamanio = parseFloat(prompt("Ingrese el tamaño del producto expresado en cm (Ej: '150', '165', '180'):"));
        if (isNaN(tamanio)) {
            alert("El tamaño debe ser un número válido. Inténtelo nuevamente.");
        }
    }

    while (isNaN(precio)) {
        precio = parseFloat(prompt("Ingrese el precio del producto (valor de compra en USD):"));
        if (isNaN(precio)) {
            alert("El precio debe ser un número válido. Inténtelo nuevamente.");
        }
    }

    while (isNaN(stock)) {
        stock = parseInt(prompt("Ingrese el stock del producto:"));
        if (isNaN(stock)) {
            alert("El stock debe ser un número válido. Inténtelo nuevamente.");
        }
    }

    // crear un nuevo objeto Producto con los datos ingresados
    let producto = new Producto(marca, modelo, rangoEdad, deporte, tamanio, precio, stock);

    // agregar el producto al array productos
    productos.push(producto);
}

// bucle para agregar productos hasta que el usuario escriba "ESC"
let agregarMas = true;
while (agregarMas) {
    let opcion = prompt("¿Desea agregar un nuevo producto? (Ingrese 'ESC' para terminar)");
    if (opcion.toLowerCase() === "esc") {
        agregarMas = false;
    } else {
        agregarProducto();
    }
}


// mostrar los productos agregados
console.log(productos);

// crear un nuevo array con los precios en pesos
let productosEnPesos = productos.map((producto) => {
    return {
        marca: producto.marca,
        modelo: producto.modelo,
        rangoEdad: producto.rangoEdad,
        deporte: producto.deporte,
        tamanio: producto.tamanio,
        precio: Math.ceil(producto.precioEnPesos()),
        stock: producto.stock
    }
});

console.log(productosEnPesos)

//crear un nuevo array con los precios en pesos mas IVA
let productosEnPesosMasIVA = productos.map((producto) => {
    return {
        marca: producto.marca,
        modelo: producto.modelo,
        rangoEdad: producto.rangoEdad,
        deporte: producto.deporte,
        tamanio: producto.tamanio,
        precio: Math.ceil(producto.sumarIva()),
        stock: producto.stock
    }
});

console.log(productosEnPesosMasIVA)

// busqueda de productos 

let categoriaBusqueda = prompt('Por qué categoría desea buscar? (disponible: "MARCA", "MODELO", "EDAD", "DEPORTE")');
let arrayFiltrado;
let palabraFiltrada;

while (categoriaBusqueda !== 'MARCA' && categoriaBusqueda !== 'MODELO' && categoriaBusqueda !== 'EDAD' && categoriaBusqueda !== 'DEPORTE') {
    alert('Categoría no válida');
    categoriaBusqueda = prompt('Por qué categoría desea buscar? (disponible: "MARCA", "MODELO", "EDAD", "DEPORTE")');
}

switch (categoriaBusqueda) {
    case 'MARCA':
        palabraFiltrada = prompt("Ingrese la marca que desea buscar (Ej: 'ROSSIGNOL' ,'K2', 'HEAD'). El resultado se verá en consola.");
        arrayFiltrado = productos.filter(producto => producto.marca.includes(palabraFiltrada));
        break;
    case 'MODELO':
        palabraFiltrada = prompt("Ingrese el modelo que desea buscar (Ej: 'ESCAPER','MINDBENDER', 'KORE93'). El resultado se verá en consola.");
        arrayFiltrado = productos.filter(producto => producto.modelo.includes(palabraFiltrada));
        break;
    case 'EDAD':
        palabraFiltrada = prompt("Ingrese la edad que desea buscar ('ADULTO' o 'KIDS') . El resultado se verá en consola.");
        arrayFiltrado = productos.filter(producto => producto.rangoEdad.includes(palabraFiltrada));
        break;
    case 'DEPORTE':
        palabraFiltrada = prompt("Ingrese el deporte que desea buscar.('SKI' o 'SNOWBOARD') El resultado se verá en consola.");
        arrayFiltrado = productos.filter(producto => producto.deporte.includes(palabraFiltrada));
        break;
    default:
        console.log('Categoría no válida');
}

console.log(arrayFiltrado);

//NOTA: el filtrado o busqueda probablemente se haga en pantalla con algo parecido a un formulario o solapas, 
// los ejemplos son solo a modo ilustrativos para el simulador mediante PROMPTS.


//productos que habria que reponer(quedan menos de 3 unidades) 
for (let producto of productos) {
    if (producto.stock < 3) {
        console.log(`Quedan solo ${producto.stock} unidades de ${producto.marca} ${producto.modelo}. Por favor reponer.`);
    }
}

//Esto puede usarse tanto para el vendedor como para alertar al usuario que quedan pocas unidades.


// Lo siguiente es el codigo usado en la primer pre entrega. En esta instancia no es necesario usarlo pero puede reutilizarse 
// hacia el final para calcular el medio de pago, o como herramienta para el usuario.

// // Funcion para calcular el precio total del producto ajustado a inflacion.

// function calcularPrecioAjustadoPorInflacion( precioCuota, numeroCuotas, tasaInflacionMensual ){
//     let precioTotalAjustado=0
//     //en este ciclo for, el valor de i representa a cada cuota)
//     for (let i=1; i<=numeroCuotas; i++){
//         let precioCuotaAjustada=precioCuota /Math.pow (1+ (tasaInflacionMensual /100), i)
//         precioTotalAjustado+=precioCuotaAjustada
//     }
//     return precioTotalAjustado
//   }
  
//   //Primer alert para explicar como funciona
  
//   alert('Bienvenido a Infla2. Con esta herramienta vas a poder ver si te conviene pagar al contado o en cuotas. El resultado se vera en un console.log()')
  
//   // creo variables que ingresa el usuario por prompt
  
//   let precioCuota=prompt('Ingresa el precio de cada cuota fija.')
//   let numeroCuotas=prompt('Ingresa el numero de cuotas.')
//   let precioEnEfectivo=prompt('Ingresa el precio en efectivo')
//   let tasaInflacionMensual=9
  
//   console.log('La inflacion mensual estimada es de '+ tasaInflacionMensual + '%.')
//   console.log('El precio en efectivo es de '+ precioEnEfectivo + ' pesos.')
  
//   //creo una nueva variable donde llamo la funcion para finalmente mostrarla con console.log
  
//   let precioTotalAjustadoPorInflacion= calcularPrecioAjustadoPorInflacion(precioCuota,numeroCuotas,tasaInflacionMensual)
  
//   console.log('El precio total en cuotas ajustado por inflacion es de '+ precioTotalAjustadoPorInflacion.toFixed(2) + ' pesos.') //uso toFixed(2) para que me muestre 2 decimales.
  
//   //veo q me conviene 
  
//   if (precioEnEfectivo<precioTotalAjustadoPorInflacion){
//       console.log('Te conviene pagar en efectivo')
//   } else if(precioEnEfectivo>precioTotalAjustadoPorInflacion){
//       console.log('Te conviene pagar en cuotas')
//   } else{
//       console.log('Error. Ingresa los datos nuevamente.')
//   }
  
  
  