var baseVector = Object.defineProperties({},{

    x: { writable: true, numerable: true, configurable: false, value: 0 },
    y: { writable: true, numerable: true, configurable: false, value: 0 },

    toString: { writable: false, numerable: false, configurable: false, value: 
      function(){
        return "["+this.x+","+this.y+"]";
      }
    },

    add: { writable: false, numerable: false, configurable: false, value: 
        function(otherV){
            this.x += otherV.x;
            this.y += otherV.y;
            return this;
        }
    },

    clone: { writable: false, numerable: false, configurable: false, value: 
        function(){
            return new Vector(this.x,this.y);
        }
    },

    length: { numerable: false, configurable: false,  
        set: function(value){
            var ratio = value/this.length;
            this.x *= ratio;
            this.y *= ratio;
        },
        get: function(){
            return Math.sqrt(this.x*this.x+this.y*this.y);
        },
    }
});

var Vector = function(x,y){
    if(typeof x == "number")
       this.x = x;
    if(typeof y == "number")
       this.y = y;
}
Vector.prototype = baseVector;
