let baseVector = Object.defineProperties({}, 
    {
        x: {value: 0, writable: true, enumerable: false, configurable: true},
        y: {value: 0, writable: true, enumerable: false, configurable: true},

        set: {writable: false, enumerable: false, configurable: true, value: function(x1, y1){
            this.x = x1;
            this.y = y1;
        }},

        add: {writable: false, enumerable: false, configurable: true, value: function (v2){
            
            this.x = this.x + v2.x;
            this.y = this.y + v2.y;            
            }
        },
        sub: {writable: false, enumerable: false, configurable: true, value: function (v2){
            this.x = this.x - v2.x;
            this.y = this.y - v2.y;
            }
        },
        mul: {writable: false, enumerable: false, configurable: true, value: function (r){
            if(typeof r === 'number'){
            this.x = this.x * r;
            this.y = this.y * r;
            }
        }},
        //moltiplica per uno scalare

        //prodotto scalare: tra vettori
        dot: {writable: false, enumerable: false, configurable: true, value: function (v2)
        {
            return this.x * v2.x + this.y * v2.y;
        }},
    

        clone: {writable: false,enumerable: false, configurable: true, value: function(){
            return new Vector(this.x, this.y);
        } },

        //normalize: 22.15

        //distance: //distanza tra due vettori


        //squareDistance:

        //len lunghezza del vettore

        isnull: {writable: false, enumerable: false, configurable: true, value: function ()
        {
            return (this.x == 0) && (this.y == 0);
        }},

        //toString
        toString: {writable: false, enumerable: false, configurable: true, value: function() {
            return this;}
        }
    });

    function Vector(x,y)
    {
        this.x = x;
        this.y = y;

    }
    Vector.prototype = baseVector;





let baseBall = Object.defineProperty({},{

})