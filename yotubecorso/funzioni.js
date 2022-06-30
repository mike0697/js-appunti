//metodi sono funzioni di oggetti
//al di fuori sono funzioni

function ciao(){
    console.log('ciao');
}


ciao();

//funzioni anonime
const myButton= document.querySelector('button');

myButton.onclick=function(){
    //alert('hello');
    ciao();
}

let nome = 'Luca';
function hello(name){
    console.log('hello '+ name);
}
hello(nome);

//parte2