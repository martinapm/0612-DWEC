// Clase que representa un producto con nombre, precio y stock
function  Producto (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
    /**
     * Método que aplica un descuento al precio del producto
     * @param {number} porcentaje - Porcentaje de descuento a aplicar
     */
    function aplicarDescuento(porcentaje){
        // Calcular el nuevo precio restando el porcentaje de descuento
        this.precio = this.precio - (this.precio * (porcentaje / 100));
    }


// Crear una instancia de Producto
const producto = new Producto("Pantalón", 30, 10);

// Aplicar un descuento del 10% al producto
producto.aplicarDescuento(10);

// Mostrar el producto con el precio actualizado en consola
console.log(producto);
