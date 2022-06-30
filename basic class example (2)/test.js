var v1 = new Vector(1,1);
var v2 = new Vector(3,2);
var v3 = v1.clone().add(v2);
var l = v3.length;
v3.length = 10;
for(v in v3)
   alert(v3[v]);