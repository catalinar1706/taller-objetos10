class Producto {
    #cantidadEnStock; //En la clase Producto, el encapsulamiento se utiliza para proteger la cantidad en stock (#cantidadEnStock)

    constructor(codigoProducto, nombreProducto, cantidadInicial) {
        this.codigoProducto = codigoProducto;
        this.nombreProducto = nombreProducto;
        this.#cantidadEnStock = cantidadInicial;
    }

    agregarProducto(cantidad) {
        this.#cantidadEnStock += cantidad;
        console.log(`Se han agregado ${cantidad} unidades del producto "${this.nombreProducto}`);
    }

    retirarProducto(cantidad) {
        if (this.#cantidadEnStock >= cantidad) {
            this.#cantidadEnStock -= cantidad;
            console.log(`Se han retirado ${cantidad} unidades del producto "${this.nombreProducto}"`);
        } else {
            console.log(`No hay suficiente stock del producto "${this.nombreProducto}" para retirar ${cantidad} unidades`);
        }
    }

    mostrarStock() {
        console.log(`El stock del producto "${this.nombreProducto}" es ${this.#cantidadEnStock}.`);
    }
}

let producto1 = new Producto("001", "Laptop", 10);
producto1.mostrarStock();
producto1.agregarProducto(5);
producto1.mostrarStock();
producto1.retirarProducto(12);
producto1.mostrarStock();
producto1.retirarProducto(3);
producto1.mostrarStock();