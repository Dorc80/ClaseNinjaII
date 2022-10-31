function Ninja(nombre, vida, velocidad_ = 3, fuerza_ = 3) {

    this.nombre = nombre;
    this.vida = vida;
    let velocidad = velocidad_;
    let fuerza = fuerza_;

    this.sayName = function () {
        console.log('El nombre de mi ninja es ' + this.nombre);
    }

    this.showStats = function () {
        console.log(`Nombre: ${this.nombre}, vida: ${this.vida}, velocidad: ${velocidad}, fuerza: ${fuerza}`)
    }

    this.drinkSake = function () {
        this.vida += 10;
    }

    this.punch = function (ninja) {

        if (ninja instanceof Ninja) {
            ninja.vida = ninja.vida - 5;
            console.log(`${this.nombre} golpeó a ${ninja.nombre} y perdió 5 de vida`);
        }

    }

    this.kick = function (ninja) {

        if(ninja instanceof Ninja) {
            let kick = this.getFuerza() * 15
            ninja.vida = ninja.vida - kick;
            console.log(`${this.nombre} golpeó a ${ninja.nombre} y perdió ${kick} de vida`);
        }

    }

    this.getFuerza = function() {
        return fuerza;
    }

}

var blueNinja = new Ninja("Goemon", 100);
var redNinja = new Ninja("Bill Gates", 100);
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);