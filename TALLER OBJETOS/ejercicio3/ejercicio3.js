class Banco{      //El encapsulamiento en Banco protege el atributo #tipoCuenta y el método #MostrarCuenta()
    #tipoCuenta
    constructor(nombreTitular, saldo, tipoCuenta){
        this.nombreTitular = nombreTitular
        this.saldo = saldo
        this.#tipoCuenta = tipoCuenta
    }
    depositar(monto){
        return this.saldo += monto
    }
    retiro(monto){
        if(this.saldo > 0){
            return this.saldo - monto
            }else{
                return "saldo poco insuficiente"
        }
    }
    mostrarSaldo(){
        console.log(this.saldo);
    }
    #MostrarCuenta(){
        console.log(this.#tipoCuenta);
    }
   getMostrarTipoCuenta(){
    return this.#MostrarCuenta()

}
}

let ObjPersona = new Banco("maja", 400000, "Ahorros");
console.log(ObjPersona.depositar(2000));
console.log(ObjPersona.retiro(3000));
ObjPersona.getMostrarTipoCuenta();

