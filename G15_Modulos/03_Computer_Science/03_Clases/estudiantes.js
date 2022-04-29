
class Estudiantes {

    constructor (nombre,apellido,caliFinal,inscripcion) {    
        this.nombre = nombre
        this.apellido = apellido
        this.caliFinal = caliFinal
        this.inscripcion = inscripcion
    }
        // METODOS DE LA CLASE

    Aprobado(){
        // desarrollar logica If else
        if (this.caliFinal >= 5.6){
            return "Aprobado " + Math.round(this.caliFinal)
        } else if (this.caliFinal <= 5.5){
            return "Reprobado " + Math.round(this.caliFinal)
        } else {
            return "Calificacion no valida, ERROR!"
        }

    }

    Inscrito(){
        // desarrollar logica If else
        if (this.inscripcion === true){
            return "El estudiante esta inscrito en el semestre"
        } else if (this.inscripcion === false){
            return "El estudiante no esta inscrito en el semestre"
        } else {
            return "Error en el Sistema, Consultar mas tarde..."
        }

    }
}

// vamos a crear las instancias de los Estudiantes
const EstudianteUno = new Estudiantes ("Marco","Lopez",7.7,true)
const EstudianteDos = new Estudiantes ("Sebastian","Ramos",6.6,false)
const EstudianteTres = new Estudiantes ("Chunli","Smith",1.3,true)

console.log (EstudianteUno.nombre, EstudianteUno.apellido, EstudianteUno.Aprobado(), EstudianteUno.Inscrito() )
console.log (EstudianteDos.nombre, EstudianteDos.apellido, EstudianteDos.Aprobado(), EstudianteDos.Inscrito() )
console.log (EstudianteTres.nombre, EstudianteTres.apellido, EstudianteTres.Aprobado(), EstudianteTres.Inscrito())