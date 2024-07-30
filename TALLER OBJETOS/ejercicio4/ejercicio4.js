class Carros{            //En la clase Carros, el encapsulamiento se usa para proteger los atributos privados (#velocidadMaxima y #combustibleActual)
    #velocidadMaxima
    #combustibleActual
    constructor(marca, modelo, velocidadMaxima, combustibleActual){


        this.marca = marca 
        this.modelo = modelo 
        this.#velocidadMaxima = velocidadMaxima
        this.#combustibleActual = combustibleActual
    }
acelerar(){
    if(this.#combustibleActual > 0){
        console.log("estamos acelerando");
    }else{
        console.log("combustible insuficiente");
    }

    }
    frenar(){
     
        console.log("estamos frenanado");
    }
    aumentarCombustible(combustible){
        return `tanqueado completo el estado de su tanque de combustible es ${this.#combustibleActual += combustible}% `
    }
    #mostrarEstado(){
        console.log(`la marca del vehiculo ${this.marca} es modelo ${this.modelo} su velocidad maxima es de ${this.#velocidadMaxima} su tanque de combustible esta en ${this.#combustibleActual}%`);
    }
    getEstado(){
        return this.#mostrarEstado()
    }
}

let ObjCarros = new Carros("mazda", "2025", 300, 60);
ObjCarros.acelerar()
ObjCarros.frenar()
console.log(ObjCarros.aumentarCombustible(20));
ObjCarros.getEstado()
    
