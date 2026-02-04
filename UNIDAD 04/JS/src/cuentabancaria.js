/**
 * Representa una cuenta bancaria con operaciones básicas
 * @namespace cuentabancaria
 */
const cuentabancaria = {
    /**
     * Titular de la cuenta
     * @type {string}
     */
    titular: "Martina",
    
    /**
     * Saldo actual de la cuenta
     * @type {number}
     */
    saldo: 0,

    /**
     * Ingresa una cantidad en la cuenta
     * @param {number} cantidad - Cantidad a ingresar (debe ser positiva)
     * @returns {void}
     */
    ingresar(cantidad) {
        this.saldo += cantidad;
    },

    /**
     * Retira una cantidad de la cuenta
     * @param {number} cantidad - Cantidad a retirar (debe ser positiva y menor o igual al saldo)
     * @returns {void}
     */
    retirar(cantidad) {
        if (this.saldo >= cantidad) {
            this.saldo -= cantidad;
        }
    },

    /**
     * Muestra el saldo actual en la consola
     * @returns {void}
     */
    mostrarSaldo() {
        console.log("Saldo:", this.saldo);
    }
};

// Ejemplo de uso
cuentabancaria.ingresar(100);
cuentabancaria.retirar(30);
cuentabancaria.mostrarSaldo();