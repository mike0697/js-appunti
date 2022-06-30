/*
//capito 15

document.createElementByTagName("img");
restituisce un nuovo nodo

*/
var n = document.createElementByTagName("img");
n.src = "http://pippo.jpg";
// e un setter
// 
n.setAttribute("src", "pippo.jpg");
// puoi settare le proprieties anche cosi
// vantaggi si puo usare il - per es Font-size
//Da vedere Node 
var testo = document.createTextNode("testo");
document.appendChild(n);
document.insertBefore(n, document.createElementByTagName("p"));
// il nodo deve essere inseriti
//come si rimuovono

document.removeChild(n);
n.parentNode.removeChild(n);