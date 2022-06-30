let arrayy = [2,3,4,'3'];
console.log(arrayy);

/*
for(i = 0; i < arrayy.length; i++){
    console.log(arrayy[i]);
}
*/

let citta = 'a,b,c,d,e,f,g';
let data = citta.split(',');
let citta2 = data.join('-');

data = ['Napoli'];
//metodi
data.push('Firenze');
data.pop();
console.log(data);
//push pop, unshift(), shift();