// vamos a crear nuestras clases y objetos

class persona {
    // es el scope local

    // instanciar un objeto, o bien un nuevo objeto a partir de uno ya creado
    // solo se puede tener un constructor de cada clase

    constructor (nombre,apellido,edad,pais,ocupacion) {    
        // this nos sirve para hacer una referencia a una propiedad del objeto
        // lo invocamos hasta el principio de la clase, este presente en todo el codigo
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.pais = pais
        this.ocupacion = ocupacion
    }
    
    // METODOS
    Saludar(){
        return `HOLA MI NOMBRE ES ${this.nombre} ${this.apellido} y tengo ${this.edad} años `
    }

    Hablar(){
        return "BLA BLA BLA TARAREANDO"
    }

    Accion(){
        return "hola soy " + " " + this.nombre + " " + "bla bla bla estoy tarareando"
    }


}

// HARDCODEADO: NOSOTROS VAMOS A PASARLE LA INFORMACION
// INSTANCIAR NUESTROS OBJETOS DE LA CLASE

const personaUno = new persona ("Sebastian","Ramos",24,"México","Estudiante")
const personaDos = new persona ("Dione","Chirino",23,"México","Estudiante/Hermosa")
const personaTres = new persona ("Paco","Elchato",69,"Cuba","Alcoholico")

// console.log (personaUno, personaDos, personaTres)
console.log (personaUno.Saludar())
console.log (personaDos.Accion())

