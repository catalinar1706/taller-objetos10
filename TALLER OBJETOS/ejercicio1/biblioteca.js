class BibliotecaMusica {   // Método de encapsulamiento: se usa un atributo privado (#duracion)
    #duracion; 
  constructor(titulo, artista, duracion) {
      this.titulo = titulo;
      this.artista = artista;
      this.#duracion = duracion;
      this.canciones = [];
    }
get duracion(){
    return this.#duracion;
 }
}
 class Coleccion{
    constructor(){
        this.coleccion = [];
    }
    agregarCancion(cancion){
        this.coleccion.push(cancion);   
    }
    eliminarCancion(titulo){
        for(let i=0;i < this.coleccion.length; i++){
            if(this.coleccion[i].titulo===titulo){
                this.coleccion.splice(i, 1);
                break;
            }}

 }

 mostrarDetalles(){
    for(let i=0;i<this.coleccion.length; i++){
      console.log("titulo" + this.coleccion[i].titulo)
    }
}}

let coleccion = new Coleccion();
let cancion1 = new BibliotecaMusica("mirame" , "cata",  "3.20");
let cancion2 = new BibliotecaMusica("123", "cata" , "3.20")
coleccion.agregarCancion(cancion1)
coleccion.agregarCancion(cancion2)
coleccion.mostrarDetalles();
coleccion.eliminarCancion("mirame")
coleccion.mostrarDetalles();