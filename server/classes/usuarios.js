class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
            //igualamos a los parámetros de entrada
            let persona = {
                id,
                nombre,
                sala
            };
            this.personas.push(persona);

            return this.personas;
        }
        /**
         * El id es único así que siempre vamos a devolver sólo una persona,
         * por eso accedemos a la posición 0 del array filtrado
         * @param {*} id 
         */
    getPersona(id) {
        let persona = this.personas.filter(per => {
            return per.id === id;
        })[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonaPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala;
        });
        return personasEnSala;
    }

    borrarPersona(id) {
        /**
         * Guardamos una relación de la persona a borrar
         */
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(per => {
            return per.id !== id;
        });
        return personaBorrada;
    }

}

module.exports = { Usuarios };