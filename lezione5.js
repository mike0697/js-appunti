//oggetti

//libro
//https://pepa.holla.cz/wp-content/uploads/2016/08/JavaScript-The-Definitive-Guide-6th-Edition.pdf
//sono semplici dizionari
// non avendo una classe non hanno metodi predefiniti
//possiamo chiamarli dizionari 
//tuttavia hanno un prototype 
console.log("l");
var myVector = { x: 1, y: 1, z: 0 };
var x = myVector.x;

myVector.length = function(v){
    if("x" in v && "y" in v){
        //cerare come controllare il tipo x è un int or string...
        return (v.x + v.y *2);
    }
    else{
        throw "wrong parameter";
    };
};

/*
var lenghFun = myVector.length;
var le = lenghFun(myVector); // qui this è window
*/
var le = myVector.length(myVector) // qui this è object
console.log(le);
//duck typing
//se fa il verso di una papera ed ha l'aspetto di una papera allora è una papera...


var baseVector = {
    x: 0, 
    y: 0, 
    length: function(){
        if("x" in this && "y" in this){
            //cerare come controllare il tipo x è un int or string...
            return (this.x + this.y *2);
        }
        else{
            throw "wrong parameter";
        };
    }
};
/*
var v1 = Object.create(baseVector);
var v2 = Object.create(baseVector);

v1.x = 4;
v1.y = 3;
v2.x = 1;
v2.y = 2;

*/

// funzione usata come costruttore

var Vector = function(vx, vy){
    this.x = vx;
    this.y = vy;
};
Vector.prototype = baseVector;
//prototype che verra automaticamente assegnato quando viene chiamato con la new

var v1 = new Vector(4,5);
var v2 = new Vector(1,1);

