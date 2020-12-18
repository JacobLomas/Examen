function ejercicio2(arrayFechas=new Array(4).fill(new Date()), fechaInicio, fechaFin){    
    let arrayResuelto=[];
    arrayFechas.forEach((fecha)=>{
        if(fecha>fechaInicio && fecha<fechaFin){
            arrayResuelto.push(fecha)
        }
    })
    return arrayResuelto;
}
var arrayFechas=[];
arrayFechas.push(new Date(1995,11,17));
arrayFechas.push(new Date(2001,10,1));
arrayFechas.push(new Date(2005,10,1));
arrayFechas.push(new Date(2007,10,1));
var fechaInicio=new Date(2000,01,01);
var fechaFin=new Date(2006,01,01)
console.log(ejercicio2(arrayFechas, fechaInicio, fechaFin));