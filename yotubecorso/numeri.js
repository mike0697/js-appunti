const numero = 4.12673;
console.log(numero.toFixed(3));


//stringhe
let nome = 'Luca';
let testo = 'ciao sono ' + nome;
let variabili = 'ciao sono una variabile';
console.log(testo);
let n = Number('56') + 56;
console.log(n);
let numb = n.toString();


//template literals

let elemento = `<h1>${testo}</h1>`;
document.body.innerHTML = elemento;
//backtick


//metodi utili
let stringa = 'Questa è una stringa di javascript dove apllicherò dei metodi';
console.log(stringa.length);
let cara = stringa[0];
let ultimoCarattere = stringa[stringa.length - 1];
let indexStringa = stringa.indexOf('una');
let sl = stringa.slice(indexStringa);
sl =stringa.replace('una stringa', ' un corso')
console.log(sl.toUpperCase());