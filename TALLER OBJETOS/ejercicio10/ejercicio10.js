class Proyecto {
    #estado; //  En la clase Proyecto, el encapsulamiento se utiliza para proteger el estado del proyecto (#estado)

    constructor(nombreProyecto, fechaInicio, fechaFin) {
        this.nombreProyecto = nombreProyecto;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.#estado = "no iniciado";
    }

    iniciarProyecto() {
       
        this.#estado = "en progreso";
        console.log(`El proyecto "${this.nombreProyecto}" ha iniciado.`);
    }

    finalizarProyecto() {
        
        this.#estado = "completado";
        console.log(`El proyecto "${this.nombreProyecto}" ha sido completado.`);
    }

    mostrarEstado() {
        
        console.log(`El estado del proyecto "${this.nombreProyecto}" es: ${this.#estado}`);
    }
}

let proyecto1 = new Proyecto("Desarrollo de App Movil", "2023-07-01", "2023-12-31");


proyecto1.mostrarEstado();


proyecto1.iniciarProyecto();


proyecto1.mostrarEstado();

proyecto1.finalizarProyecto();

proyecto1.mostrarEstado();