let mikeCanvas = document.getElementById("myCanvas");
let context = mikeCanvas.getContext("2d");

const NSIZE = 48;
const NLATO = NSIZE;

const table_size = 5;

const MINA = 99;

mikeCanvas.height = NSIZE * table_size;
mikeCanvas.width = NSIZE * table_size;

//carico le immagini
const tile = new Image();
tile.src = "piastrella.png";
let imgArray = [
 n0 = new Image(),
 n1 = new Image(),
 n2 = new Image(),
 n3 = new Image(),
 n4 = new Image(),
 n5 = new Image(),
 n6 = new Image(),
 n7 = new Image(),
 n8 = new Image(),
 n9 = new Image(),
];
imgMina = new Image();
imgMina.src = "mina.png";
imgArray[0].src = "0.png";
imgArray[1].src = "1.png";
imgArray[2].src = "2.png";
imgArray[3].src = "3.png";
imgArray[4].src = "4.png";
imgArray[5].src = "5.png";
imgArray[6].src = "6.png";
imgArray[7].src = "7.png";
imgArray[8].src = "8.png";
imgArray[9].src = "9.png";
console.log(imgArray[9].src);


//creo la tabella
let righe = new Array();


let addPiastrella = function(y, x){
    tile.addEventListener('load', function() {
        context.drawImage(tile, (NLATO * x) , (NLATO * y) , NLATO, NLATO);
    },false);
    if(tile.complete)
    {context.drawImage(tile, (NLATO * x) , (NLATO * y) , NLATO, NLATO);};
}

for(let i = 0; i < table_size; i++){
    righe[i] = new Array();
    for(let j=0; j<table_size; j++){
        righe[i][j] = 0;
        addPiastrella(i,j);
    };
};

let printTale = function(){ console.log(righe); };


let rndMine = function(){
    let a1 = Math.floor(Math.random()*table_size);
    let a2 = Math.floor(Math.random()*table_size);

    righe[a1][a2] = MINA;
    insertNumberMine();

};

let controllaRiga = function(riga,colonna){

    let controlla_cella = function(x,y){
        if(righe[x][y] === MINA){
            return 1;
        }
        else return 0;
    }
    let count = 0;
    if(colonna === 0){
        //seconda cella //COLONNA CENTRALE 
        count += controlla_cella(riga,colonna);
        //terza +1
        count += controlla_cella(riga,colonna +1);
        return count;
    }
    if(colonna === table_size)
    {
        //prima cella
        count += controlla_cella(riga,colonna - 1);
        //seconda 
        count += controlla_cella(riga,colonna);
        return count;
    }
    if(colonna !==  0 && colonna !== table_size){
        //prima cella
        count += controlla_cella(riga,colonna -1);
        //seconda cella
        count += controlla_cella(riga,colonna);
        //terza cella
        count += controlla_cella(riga,colonna +1);
        return count;
    };


};



let calcolaMineAdiacenti = function(x1,y1){
    let count = 0;
    //3 casi
    //riga = 0
    if(x1 === 0 ){
        count +=controllaRiga(x1 + 1, y1);
        count +=controllaRiga(x1, y1);
        return count;
    };
    //riga = 9;
    if(x1 === table_size - 1){
        count += controllaRiga(x1 - 1, y1);
        count +=controllaRiga(x1, y1);
        return count;
    };
    //riga in mezzo
    if(x1 !== 0 && x1 !== table_size - 1){
        count += controllaRiga(x1 - 1, y1);
        count +=controllaRiga(x1 + 1, y1);
        count +=controllaRiga(x1, y1);
        return count;
    };
};

let insertNumberMine = function(){
    for(let i = 0; i < table_size; i++)
    {
        for(let e = 0; e < table_size; e++)
        {
            if(righe[i][e] !== MINA){
            let number = calcolaMineAdiacenti(i,e);
            righe[i][e] = number;
            //draw
            //addGroundCasel(i,e,number);
            }
            else
            {
                //addMInaImg(i,e);
            }

        }
    }
};

let addMInaImg = function(y, x){

    imgMina.addEventListener('load', function() {
        context.drawImage(imgMina, (NLATO * x) , (NLATO * y) , NLATO, NLATO);
    },false);

    if(imgMina.complete)
    {
        context.drawImage(imgMina, (NLATO * x) , (NLATO * y) , NLATO, NLATO);
    }
}


let richiamat = function(x, y){

    let z = x -1;
    let z2 = y - 1;
    for(z ; z <= x+ 1; z++ )
    {
        for(z2 ; z2 <= y+ 1; z2++ ){
            if(z >= 0 && z < table_size)
            {
                if(z2 >= 0 && z2 < table_size)
                {
                    if(z == x && z2 == y){
                        console.log("a");
                    }else
                    console.log("x = y = " + z + " " + z2 );
                        //clickEventF(z, z2);
                }
            }
        }
    }




}

let addGroundCasel = function(y, x, a){

    imgArray[a].addEventListener('load', function() {
        context.drawImage(imgArray[a], (NLATO * x) , (NLATO * y) , NLATO, NLATO);
        //context.drawImage(imgArray[0], (0) , (0), 96,96 );
        //console.log(NLATO * x);
    },false);

    if(imgArray[a].complete)
    {
        context.drawImage(imgArray[a], (NLATO * x) , (NLATO * y) , NLATO, NLATO);
    }
}
//event al click del mouse

let clickEventF = function(mousey,mousex) {
    if(righe[mousey][mousex] === 0){
        addGroundCasel(mousey,mousex, 0);
        //richiamat(mousey,mousex);
    }else if(righe[mousey][mousex] === MINA)
    {
        addMInaImg(mousey,mousex);
    }
    else
    {
        addGroundCasel(mousey,mousex, righe[mousey][mousex]);
    }
}


mikeCanvas.addEventListener('click', function() {
    mousex = event.pageX - mikeCanvas.getBoundingClientRect().left;
    mousex = Math.floor(mousex/NLATO);
    //console.log("x = " + mousex);
    mousey = event.pageY - mikeCanvas.getBoundingClientRect().top;
    mousey = Math.floor(mousey/NLATO);
    //console.log("y = " + mousey);
    console.log("click " + righe[mousey][mousex]);
    clickEventF(mousey,mousex);
}, false);

//creare oggetto cella con valore, scoperta, coperta ecc..
