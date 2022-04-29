// PARTIDO ES MI SUBCLASE

class Partido extends Largometraje {
    constructor(titulo,duracion,genero){
        // con super aqui indicamos que atributos de mi clase padre va a heredar
        super(titulo,duracion)
        this.genero = genero
    }
    // METODO
    getGender(){
        return this.genero
    }

}