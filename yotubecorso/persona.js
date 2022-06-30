
function persona(nome, cognome, eta, genere){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.genere = genere;
    this.saluta = function(){
        console.log('Ciao sono ${this.nome}');
    };
};

//eredita

function insegnante(nome, cognome, eta, genere, materia){
    Persona.call(this, nome, cognome, eta, genere);
    this.materia = materia;
    this.saluta = function(){
        console.log('Ciao sono ${this.nome} ${this.cognome}');
    };
};


