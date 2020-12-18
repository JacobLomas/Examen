function ejercicio3(num){
    var factor1 = num.shift();
    var factor2 = num.shift();
    var producto= factor1*factor2;
    num.push(producto);
    if(num.length>1)
        return ejercicio3(num);
    else{
        return producto*1;
    }
}
var producto = ejercicio3([1,2,3,4,5]);