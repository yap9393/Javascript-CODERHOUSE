let valorDolar = 1
//se establecio valor de dolar 1 solo para tener numeros mas chicos en el simulador.

class Producto {
    constructor( marca, modelo, rangoEdad, deporte, tamanio, precio, stock,imagen, alt) {
        this.marca = marca;
        this.modelo = modelo;
        this.rangoEdad = rangoEdad;
        this.deporte = deporte;
        this.tamanio = tamanio;
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.imagen=imagen;
        this.alt='esquies';
    }
    precioEnPesos() {
        return this.precio * valorDolar;
    }
    sumarIva() {
        return this.precio * valorDolar * 1.21;
    }
    precioDeVenta() {
        return Math.ceil(this.precio * valorDolar * 1.21 * 1.3);
    }
}

const productos = [];

const producto1 = new Producto("Rossignol", "Escaper", "Adulto", "Ski", "160cm", 450, 6, "../Assets/imagenes tienda/modelorossignolescaper.jpg");
const producto2 = new Producto("K2", "Mindbender", "Adulto", "Ski", "185cm", 550, 2,  "../Assets/imagenes tienda/modelok2mindbender.jpg");
const producto3 = new Producto("Head", "Kore93", "Adulto", "Ski", "190cm", 600, 2,  "../Assets/imagenes tienda/modeloheadkore93 (1).jpg");
const producto4 = new Producto("Blizzard", "Brahma", "Adulto", "Ski", "188cm", 520, 3, "../Assets/imagenes tienda/modeloblizzardbrahma.jpg");
const producto5 = new Producto("Armada", "Declivity", "Adulto", "Ski", "198cm", 480, 3,  "../Assets/imagenes tienda/modeloarmadadeclivity.jpg");
const producto6= new Producto ("Black Crows", "Junius", "Niño", "Ski", "85cm", 180, 3,  "../Assets/imagenes tienda/modeloblackcrowsJunius.jpg");
const producto7 = new Producto("Blizzard", "Bonafide", "Adulto", "Ski", "171cm", 524, 7, "../Assets/imagenes tienda/modeloblizzardbonifide.jpg");
const producto8 = new Producto("Head", "Kore99", "Adulto", "Ski", "172cm", 630, 2,  "../Assets/imagenes tienda/modeloheadkore99.jpg", "esquies");
const producto9 = new Producto("Volkl", "Revolt Jr Hopper ", "Niño", "Ski", "128cm", 350, 5,  "../Assets/imagenes tienda/modeloVolklRevolt .jpg");
const producto10 = new Producto("Salomon", "QST Junior", "Niño", "Ski", "100cm", 390, 3,  "../Assets/imagenes tienda/modelosalomonqstjunior.jpg");
const producto11 = new Producto("Salomon", "QST", "Adulto", "Ski", "185cm", 590, 6,  "../Assets/imagenes tienda/modelosalomonqst.jpg");

productos.push(producto1, producto2, producto3, producto4, producto5, 
  producto6, producto7, producto8, producto9, producto10, producto11);

//mostrar productos en dom 
let contenedorDeProductos = document.getElementById('contenedorDeProductos')

function mostrarProductos(arrayProductos) {
  contenedorDeProductos.innerHTML = '';
  let fila = document.createElement('div');
  fila.classList.add('row', 'row-cols-1', 'row-cols-md-4', 'gx-5', 'gy-5');

  for (let producto of arrayProductos) {
    let contenedor = document.createElement('div');
    contenedor.classList.add('col', 'col-sm-12', 'col-md-6', 'col-lg-4', 'col-xl-3');
    contenedor.innerHTML = `
      <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top image-tienda" alt="${producto.alt}">
        <div class="card-body">
          <h3 class="card-title">${producto.marca}</h3>
          <p class="card-text">${producto.modelo}</p>
          <p class="card-text">${producto.tamanio}</p>
        </div>
        <div class="card-footer">
          <p class="pkg-price">$ ${producto.precioDeVenta()}</p>
          <a href="#"><button class="btn btn-danger boton btn-rental btn-add-cart" type="button">Agregar al carrito</button></a>
        </div>
      </div>`;
    fila.appendChild(contenedor);
  }
  contenedorDeProductos.appendChild(fila);
}

function mostrarTodo() {
  mostrarProductos(productos);
}

// ordenar por precio
let botonOrdenarPrecio = document.querySelector('.ordenar-precio');
botonOrdenarPrecio.addEventListener('click', ordenarPorPrecioClick);

function ordenarPorPrecioClick() {
  productos.sort((a, b) => a.precio - b.precio);
  mostrarProductos(productos);
}

// mostrar todo
let botonMostrarTodo= document.querySelector('.mostrar-todo');
botonMostrarTodo.addEventListener('click', mostrarTodo);

// funcion para mostrar las opciones de marcas en la barra lateral
let marcaSidebar = document.getElementById('marcaSidebar');

function mostrarOpcionesMarcas() {
  let marcasUnicas = [...new Set(productos.map(producto => producto.marca))];
  marcaSidebar.innerHTML = '';
  marcasUnicas.forEach(marca => {
    let li = document.createElement('li'); 
    li.innerText = marca; 
    li.classList.add('marca-option');
    marcaSidebar.appendChild(li);
  });
};

// funcion para mostrar las opciones de rango de edad en la barra lateral
let edadSidebar = document.getElementById('edadSidebar');

function mostrarOpcionesEdad() {
  let edadesUnicas = [...new Set(productos.map(producto => producto.rangoEdad))];
  edadSidebar.innerHTML = '';
  edadesUnicas.forEach(edad => {
    let li = document.createElement('li');
    li.innerText = edad;
    li.classList.add('edad-option');
    edadSidebar.appendChild(li);
  });
};

// funcion para manejar los clics en las opciones de filtrado
marcaSidebar.addEventListener('click', respuestaClick);
edadSidebar.addEventListener('click', respuestaClick);

function respuestaClick(event) {
  let opcion = event.target.textContent; //consigo el texto del elemento que clickeo
  let filtro = event.target.parentNode.id; //consigo el id del elemento padre (para saber si filtro x marca o edad)

  if (filtro === 'marcaSidebar') {
    let arrayFiltrado = productos.filter(producto => producto.marca.toLowerCase() === opcion.toLowerCase());
    mostrarProductos(arrayFiltrado);
  } else if (filtro === 'edadSidebar') {
    let arrayFiltrado = productos.filter(producto => producto.rangoEdad.toLowerCase() === opcion.toLowerCase());
    mostrarProductos(arrayFiltrado);
  }
};

// carrito
// funciones para obtener y guardar el carrito en el Local Storage.
let carrito = [];
function getCarritoFromLocalStorage() {
  const carritoString = localStorage.getItem('carrito');
  return carritoString ? JSON.parse(carritoString) : [];
};

function guardarCarritoEnLS() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

function buscarProductoEnCarrito(nombreProducto) {
  return carrito.find((producto) => producto.nombre === nombreProducto);
};

contenedorDeProductos.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-add-cart')) {
    const card = event.target.closest('.card');
    const nombre = card.querySelector('.card-title').textContent;
    const modelo = card.querySelector('.card-text:nth-child(2)').textContent;
    const precio = parseFloat(card.querySelector('.pkg-price').textContent.replace('$', ''));
    
    let productoEnCarrito = buscarProductoEnCarrito(nombre);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
    } else {
      productoEnCarrito = {
        nombre,
        modelo,
        precioVenta: precio,
        cantidad: 1,
      };
      carrito.push(productoEnCarrito);
    }
    guardarCarritoEnLS();
    Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
      })
    mostrarCarrito(carrito);
    mostrarCantidadCarrito();
  }
});

// funcion para eliminar un producto del carrito
function eliminarProductoDelCarrito(nombreProducto) {
  carrito = carrito.filter((producto) => producto.nombre !== nombreProducto);
  guardarCarritoEnLS();
  mostrarCarrito(carrito);
  mostrarCantidadCarrito();
};

// funcion para mostrar la cantidad de productos en el carrito
function mostrarCantidadCarrito() {
  const cantidadCarrito = document.getElementById('cantidadCarrito');
  cantidadCarrito.textContent = carrito.reduce((total, producto) => total + producto.cantidad, 0);
};

// funcion para mostrar el carrito en su dropdown
function mostrarCarrito(arrayCarrito) {
  const productosCarritoContainer = document.getElementById('productosCarrito');
  productosCarritoContainer.innerHTML = '';
  let totalCarrito = 0;

  for (let producto of arrayCarrito) {
    const productoElement = document.createElement('div');
    productoElement.classList.add('carrito-item');
    productoElement.innerHTML = `
      <span class="nombre">${producto.nombre}</span>
      <span class="modelo">${producto.modelo} </span>
      <span>|</span>
      <span class="cantidad"> x ${producto.cantidad} </span>
      <span>|</span>
      <span class="precio"> $${(producto.precioVenta * producto.cantidad).toFixed(2)}</span>
      <button class="btn btn-danger btn-eliminar" data-nombre="${producto.nombre}">Eliminar</button>
    `;

    //evento del boton eliminar 
    productoElement.querySelector('.btn-eliminar').addEventListener('click', (event) => {
      const nombreProducto = event.target.dataset.nombre;
      eliminarProductoDelCarrito(nombreProducto);
    });
    productosCarritoContainer.appendChild(productoElement);
    totalCarrito += producto.precioVenta * producto.cantidad;
  };

  //mostrar total del carrito
  document.querySelector('.total-precio').textContent = `$${totalCarrito.toFixed(2)}`;
};

//al cargar la pag obtengo el carrito que esta en LS y lo muestro en su dropdown
document.addEventListener('DOMContentLoaded', () => {
  carrito = getCarritoFromLocalStorage();
  mostrarCarrito(carrito);
  mostrarCantidadCarrito();
});

//codigo para mostrar todos los productos al cargar la página
mostrarProductos(productos);
mostrarOpcionesMarcas();
mostrarOpcionesEdad();