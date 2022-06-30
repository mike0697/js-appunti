let myParagraph = document.getElementById("myp");
console.log(myParagraph.innerHTML);
//myParagraph.childNodes
//aaccede ai figli

for(let i =0; i<myParagraph.childNodes.length; i++){
    console.log(myParagraph.childNodes[i].nodeValue);
    //nodeType
    //restituisce ad un numero di una tabella, 3 testo, 1 element
}

//nodeValue mostra il valore testuale
//<i> è un element non un testo

console.log(myParagraph.nextSibling);

console.log(myParagraph.parentNode);

console.log(myParagraph.firstChild);

console.log(myParagraph.lastChild);

console.log(myParagraph.previousSibling);


//modifica dei nodi 2 parte minuto 49.00