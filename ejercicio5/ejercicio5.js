class Libro {
    #disponible;              // Encapsulamiento: La variable #disponible es privada y solo accesible dentro de la clase
    
    constructor(titulo, autor, disponible) {
        this.titulo = titulo;
        this.autor = autor;
        this.#disponible = disponible;  
    }
  
    
    prestarLibro() {
        if (this.#disponible.prestado === undefined) {
            this.#disponible.prestado = true;
            return `El libro "${this.titulo}" ha sido prestado`; 
        } else {
            return `El libro "${this.titulo}" no está disponible`; 
        }
    }
  
    
    devolverLibro() {
        this.#disponible = {}; 
        return `El libro "${this.titulo}" ha sido devuelto`; 
    }
  
    mostrarEstado() {
        if (this.#disponible.prestado === undefined) {
            return `El libro "${this.titulo}" está disponible`; 
        } else {
            return `El libro "${this.titulo}" ha sido prestado`; 
        }
    }
  
    _estadoDisponible() {
        return this.#disponible.prestado === undefined;
    }
  }
  
  class LibroDigital extends Libro {
    constructor(titulo, autor, formato, disponible) {
        super(titulo, autor, disponible);
        this.formato = formato;
    }
  
    mostrarEstado() {
        if (this._estadoDisponible()) {
            return `El libro digital "${this.titulo}" (${this.formato}) está disponible`; 
        } else {
            return `El libro digital "${this.titulo}" (${this.formato}) ha sido prestado`; 
        }
    }
  }
  
  let libro1 = new Libro('', 'catalina rivera ', {});
  let libroDigital1 = new LibroDigital('2000', 'catalina', 'PDF', {});
  
  console.log(libro1.mostrarEstado());  
  console.log(libro1.prestarLibro());   
  console.log(libro1.mostrarEstado()); 
  console.log(libro1.devolverLibro());  
  console.log(libro1.mostrarEstado());  
  
  console.log(libroDigital1.mostrarEstado());  
  console.log(libroDigital1.prestarLibro());   
  console.log(libroDigital1.mostrarEstado());  
  console.log(libroDigital1.devolverLibro()); 
  console.log(libroDigital1.mostrarEstado());