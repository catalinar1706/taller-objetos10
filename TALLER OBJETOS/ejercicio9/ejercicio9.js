class ReservaHotel {
    #habitacionAsignada; // En la clase ReservaHotel, el encapsulamiento se usa para proteger el estado de la habitación asignada (#habitacionAsignada)

    constructor(nombreCliente, fechaReserva) {
        this.nombreCliente = nombreCliente;
        this.fechaReserva = fechaReserva;
        this.#habitacionAsignada = null;
    }

    reservarHabitacion(habitacionesDisponibles) {
        // Asignar una habitacion disponible al cliente
        if (habitacionesDisponibles.length > 0) {
            this.#habitacionAsignada = habitacionesDisponibles.pop();
            console.log(`Habitación ${this.#habitacionAsignada} asignada a ${this.nombreCliente}.`);
        } else {
            console.log("No hay habitaciones disponibles");
        }
    }

    cancelarReserva(habitacionesDisponibles) {
        
        if (this.#habitacionAsignada) {
            habitacionesDisponibles.push(this.#habitacionAsignada);
            console.log(`Reserva de la habitación ${this.#habitacionAsignada} para ${this.nombreCliente} ha sido cancelada`);
            this.#habitacionAsignada = null;
        } else {
            console.log("No hay reserva que cancelar.");
        }
    }

    mostrarReserva() {
        
        if (this.#habitacionAsignada) {
            console.log(`Reserva de ${this.nombreCliente} para la fecha ${this.fechaReserva}: Habitacion ${this.#habitacionAsignada}`);
        } else {
            console.log(`${this.nombreCliente} no tiene ninguna reserva.`);
        }
    }
}


let habitacionesDisponibles = ["201", "202", "203", "204"];


let reserva1 = new ReservaHotel("cata rivera", "2024-02-15");

reserva1.reservarHabitacion(habitacionesDisponibles);


reserva1.mostrarReserva();

reserva1.cancelarReserva(habitacionesDisponibles);

reserva1.mostrarReserva();