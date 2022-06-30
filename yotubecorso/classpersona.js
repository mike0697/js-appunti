
class Persona {
    constructor(nome, cognome, eta, genere, interessi){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.genere = genere;
        this.interessi = interessi;
    }

    saluta(){
        console.log(`Cisoa sono ${this.nome}`);
    };
};

class Insegnante extends Persona {
    constructor(nome, cognome, eta, genere, interessi, materia){
        super(nome, cognome, eta, genere, interessi);

        this.materia = materia;
    }

    get materia(){
        return this._materia;
    }

    set materia(nuovaMAteria){
        this._materia = nuovaMAteria;
    }

        riprendiAlunno(nomeAlunno) {
            console.log(`${nomeAlunno} non si mangia in classe!`);
        }


}
