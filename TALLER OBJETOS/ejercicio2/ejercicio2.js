class Agenda{    // Encapsulamiento: Implementado en la clase Agenda con el uso del atributo privado #contacto y los métodos públicos para acceder y modificar los contactos.
    #contacto
    constructor(NombreAgenda){
        this.NombreAgenda = NombreAgenda
        this.#contacto = [];
    }
    agregarContacto(Contactos){     // agregar un contacto a la agenda
        this.#contacto.push(Contactos)
    }
    editarContacto(posicion, nuevoValor){    //Sustituye el contacto en la posicion dada por nuevoValor
        this.#contacto[posicion] = nuevoValor
    }
    eliminarContacto(Contactos){
        let index = this.#contacto.indexOf(Contactos)   //busca texto igual dentro del arreglo indexof
        this.#contacto.splice(index, 1)
    }
    MostrarContactos(){
        this.#contacto.forEach((contactos) => {
            console.log(contactos);
        })
    }
}

class Contact{
    constructor(nombre, apellido, telefono, correoElectronico){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
        this.correoElectronico = correoElectronico
    }
}

//Crear Agenda
let Agenda1 = new Agenda("AgendaDaniel");







//Crear contacto
let ContactoMaja = new Contact("Maja", "Sanchez", "312", "correo@gmail.com")
//Agregar contacto maja a la agenda
Agenda1.agregarContacto(ContactoMaja)
let ContactoYanfri = new Contact("Yanfri", "Anaya", "3145", "Yanfricorreo@gmail.com")
Agenda1.agregarContacto(ContactoYanfri);

let ContactoYanfri2 = new Contact("Yanfri", "Rivera", "3145", "Yanfricorreo@gmail.com")
//Modificar contacto 
Agenda1.editarContacto(1, ContactoYanfri2);

//Eliminar contacto
Agenda1.eliminarContacto(ContactoMaja);

Agenda1.MostrarContactos()