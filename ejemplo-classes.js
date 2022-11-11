// UNa clase es el molde para crear un objeto
// Una clase al ser un molde, tiene atributos y métodos.
// UNa clase no es una variable en sí, sino que es un molde. Es decir, yo a través de este molde puedo crear objetos de este tipo. 

class Persona {
    constructor(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }
    saludar () {
        return "Hola, ¿qué tal? Mi nombre es " + this.firstName + " " + this.lastName;
    }
}

class Estudiante extends Persona {
    constructor(name, surname, email) {
        super(name, surname);
        this.email = email;
    }
    irAClase(nombreDelCurso) {
        return "Hola, soy " + this.firstName + " y estoy yendo al curso de " + nombreDelCurso
    }
}

const Javi = new Estudiante("Javi", "Script", "javiscript@gmail.com");
console.log(Javi)