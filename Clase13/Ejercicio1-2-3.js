/*
    1- Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
    Haga una función que utilice una clase para crear nuestro objeto "Héroe".
    Debe tener las siguientes características y valores por defecto:
        name = "héroe"
        ranking = "00"
        health = 100
        damage = 5
        experience = 0

    2- Queremos mejorar nuestro creador de personajes. Necesitamos que los personajes sean capaces de saludar, atacar 
    y recibir daño. Considere los siguientes métodos. 
        talk = recibe un nombre por parámetro y saluda a dicho nombre
        attack = Recibe un valor por parámetro, muestra un mensaje con el poder del ataque, y aumenta su experiencia en 10.
        takeDamage = Recibe un valor por parámetro, sufre el daño recibido en sus puntos de vida, y muestra la vida restante.

    3- Ahora queremos hacer una simulación de batalla Jugador vs Jugador. Necesitamos una propiedad que diga si el héroe está 
    vivo o no. Modificar el método attack para hacer daño a otro héroe. Controlar cuando uno de los héroes es derrotado y mostrar 
    un mensaje acorde a la situación.
*/

class Hero {
    constructor (name = "Hero", ranking = "00", health = 100, damage = 5, experience = 0){
        this.name = name
        this.ranking = ranking
        this.health = health
        this.damage = damage
        this.experience = experience
        this.isAlive = (this.health >= 0)
    }

    talk (personName){
        return `Hey! ${personName}! I'm ${this.name}`
    }

    attack(attackedHero){
        if (attackedHero.isAlive){
            attackedHero.takeDamage(this.damage)
            console.log(`${this.name} dealt ${this.damage} damage to ${attackedHero.name}!`)  
        }
        if(!attackedHero.isAlive){
            this.experience += 10
            console.log(`${this.name} has defeated ${attackedHero.name} in battle!`)
        }
    }

    takeDamage(dmgRecieved){
        this.health -= dmgRecieved
        return this.health
    }
}

const elementalHeroSparkman = new Hero("Elemental Hero Sparkman")
const destinyHeroCelestial = new Hero("Destiny Hero Celestial")

elementalHeroSparkman.attack(destinyHeroCelestial)