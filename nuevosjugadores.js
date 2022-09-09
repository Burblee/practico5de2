class Persona{
    nombre;
    apellido;
    edad;

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getDetalles(){
        console.log("Nombre "+this.nombre + "Apellido"+this.apellido + "Edad "+this.edad)
    }
}

class Jugador extends Persona {
    posicion;

    constructor(nombre,apellido,edad,posicion){
        super(nombre,apellido,edad);
        this.posicion = posicion;
    }
    getDetalles(){
        console.log(super.getDetalles()+ ' Posicion:'+ this.posicion)
    }
}

class Entrenador extends Persona{
    experiencia;
    id;

    constructor(nombre,apellido,edad,experiencia, id=Math.floor( Math.random()*100000)){
        super(nombre,apellido,edad);
        this.experiencia = experiencia;
        this.id = id
    }
    getDetalles(){
        console.log(super.getDetalles() +"Años de experiencia:" + this.experiencia + "id de Federación:"+this.id)
    }
}
class Equipo {
    
    entrenador;
    jugadores;

    constructor(entrenador,jugadores){
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles(){
        console.log("Entrenador: ", entrenador.getDetalles());
        console.log("Jugadores: ", this.jugadores);
    }   
}