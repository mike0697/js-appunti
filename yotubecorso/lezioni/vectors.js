let baseVector = Object.defineProperties({},
    {
    
        x:      {value: 0, writable: true, enumerable: true, configurable: true},
        y:      {value: 0, writable: true, enumerable: true, configurable: true},
        len:    {writable: false, enumerable: false, configurable: true, value: 
        function()
            {
            return Math.sqrt(this.x*this.x+this.y*this.y);
            }
        }
    }
    );
/*let baseVector = {
    x: 0,
    y: 0,
    len: function()
        {
         return Math.sqrt(this.x*this.x+this.y*this.y);
        }
    }
*/
//let v1 = Object.create(baseVector);
//vecchio

function Vector(x,y){
    if(typeof(x)=='number')
        this.x = x;
    if(typeof(y)=='number')
        this.y = y;
}

Vector.prototype = baseVector;

let v1 = new Vector();
console.log(v1.len());
