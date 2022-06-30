let listaGenerica = document.getElementsByClassName('menu');



//console.log(listaGenerica[0].children[0]);


//da ripetere per ogni lista genrica in menu

//array per contenere i dati 
let nomePizza = new Array();
let ingredientiPizza = new Array();
let prezzoPizza = new Array();


for(let j = 0; j < listaGenerica[0].children.length; j++){
    //si ripete per ogni div 
    console.log(listaGenerica[0].children[j]);
    let testodiv1 = listaGenerica[0].children[j].textContent;
    //console.log(testodiv1);
    let textSplit = testodiv1.split(';');
    nomePizza.unshift(textSplit[0]);
    ingredientiPizza.unshift(textSplit[1]);
    prezzoPizza.unshift(textSplit[2]);
};
//console.log(nomePizza);
//console.log(prezzoPizza);

//rimuove i div
removeAllChildNodes(listaGenerica[0]);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

//creare la tabella
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "nome";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "prezzo";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);





// Creating and adding data to second row of the table
 //ciclo for
for(let e = 0; e < nomePizza.length; e++)
{
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td1');
    row_2_data_1.innerHTML = nomePizza[e];

    //row_2_data_1.setAttribute(onmousedown, console.log("a") );
    
    let row_2_data_2 = document.createElement('td2');
    row_2_data_2.innerHTML = prezzoPizza[e];

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    tbody.appendChild(row_2);
}


//aggiungere la tabella 
listaGenerica[0].appendChild(table);


//evento trigger quando il mouse è sopra il nome
let h2text = document.createElement('h2');
h2text.textContent = ingredientiPizza[0];
console.log(table);

listaGenerica[0].appendChild(h2text);



let es = document.getElementsByTagName('td1');
console.log(es[0]);



