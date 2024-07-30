class Empleado{   // Encapsulamiento: La variable #salario es privada y solo accesible dentro de la clase
    #salario
    constructor(nombre, apellido, cargo, salario){
        this.nombre=nombre
        this.apellido=apellido
        this.cargo=cargo
        this.#salario = salario
    }
    calcularSueldoNeto(){
        let prestaciones = 500000
        let sueldoNeto = this.#salario - prestaciones
        console.log(sueldoNeto);
    }
    mostrarDatos(){
        console.log(`El empleado ${this.nombre} ${this.apellido} su cargo es ${this.cargo} y su sueldo es de ${this.#salario}`);
    }
}

let ObjEmpleado = new Empleado("cata", "rivera", "electricista", 200000);

ObjEmpleado.calcularSueldoNeto()
ObjEmpleado.mostrarDatos()