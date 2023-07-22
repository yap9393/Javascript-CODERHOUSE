// // ARRAY PRODUCTO TERMINADO EN VEZ DE USAR PROMPTS

class Producto {
    constructor( marca, modelo, rangoEdad, deporte, tamanio, precio, stock,imagen, alt) {
        this.marca = marca;
        this.modelo = modelo;
        this.rangoEdad = rangoEdad;
        this.deporte = deporte;
        this.tamanio = tamanio;
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
        this.disponible=true;
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
    vender(){
       this.disponible=false
    }
}

export const productos = [];

// ARRAY PRODUCTO TERMINADO EN VEZ DE USAR PROMPTS
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


