// Constructor de objetos Smartphone usando función constructora
function Smartphone(marca, modelo, color, tamaño) {
    // Propiedades del smartphone
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.tamaño = tamaño;

    // Método para instalar aplicaciones
    this.instalarAplicacion = function(apli) {
        alert("Aplicación " + apli + " instalada con éxito en smartphone " + this.marca + this.modelo);
    };

    // Método para enviar correos electrónicos
    this.enviarCorreo = function(mensa) {
        alert("Mensaje: " + mensa + " enviado con éxito");
    };

    // Método para realizar llamadas telefónicas
    this.llamar = function(num) {
        alert("Llamando al " + num + "...desde mi smartphone con tamaño " + this.tamaño + " pulgadas");
    };
}

// Añadir método al prototipo para obtener datos del smartphone
Smartphone.prototype.obtenDatosSmartPhone = function() {
    // Construir una cadena con todos los datos del smartphone
    let datos = "Datos del Smartphone:\n" +
                "Marca: " + this.marca + "\n" +
                "Modelo: " + this.modelo + "\n" +
                "Color: " + this.color + "\n" +
                "Tamaño: " + this.tamaño + " pulgadas";
    alert(datos);
};

// Crear una instancia de Smartphone
let miSmartphone = new Smartphone("Samsung", "Galaxy S", "Negro", 6.2);

// Ejecutar los métodos del smartphone creado
miSmartphone.instalarAplicacion("Messenger");
miSmartphone.enviarCorreo("Hola caracola");
miSmartphone.llamar("123456789");