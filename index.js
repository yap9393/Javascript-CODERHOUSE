
//Funcion para calcular el precio total del producto ajustado a inflacion.

function calcularPrecioAjustadoPorInflacion( precioCuota, numeroCuotas, tasaInflacionMensual ){
  let precioTotalAjustado=0
  //en este ciclo for, el valor de i representa a cada cuota)
  for (let i=1; i<=numeroCuotas; i++){
      let precioCuotaAjustada=precioCuota /Math.pow (1+ (tasaInflacionMensual /100), i)
      precioTotalAjustado+=precioCuotaAjustada
  }
  return precioTotalAjustado
}

//Primer alert para explicar como funciona

alert('Bienvenido a Infla2. Con esta herramienta vas a poder ver si te conviene pagar al contado o en cuotas. El resultado se vera en un console.log()')

// creo variables que ingresa el usuario por prompt

let precioCuota=prompt('Ingresa el precio de cada cuota fija.')
let numeroCuotas=prompt('Ingresa el numero de cuotas.')
let precioEnEfectivo=prompt('Ingresa el precio en efectivo')
let tasaInflacionMensual=9

console.log('La inflacion mensual estimada es de '+ tasaInflacionMensual + '%.')
console.log('El precio en efectivo es de '+ precioEnEfectivo + ' pesos.')

//creo una nueva variable donde llamo la funcion para finalmente mostrarla con console.log

let precioTotalAjustadoPorInflacion= calcularPrecioAjustadoPorInflacion(precioCuota,numeroCuotas,tasaInflacionMensual)

console.log('El precio total en cuotas ajustado por inflacion es de '+ precioTotalAjustadoPorInflacion.toFixed(2) + ' pesos.') //uso toFixed(2) para que me muestre 2 decimales.

//veo q me conviene 

if (precioEnEfectivo<precioTotalAjustadoPorInflacion){
    console.log('Te conviene pagar en efectivo')
} else if(precioEnEfectivo>precioTotalAjustadoPorInflacion){
    console.log('Te conviene pagar en cuotas')
} else{
    console.log('Error. Ingresa los datos nuevamente.')
}
