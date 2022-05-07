//Result en scope global
let result=3;

function add (){
    //Result en scope local
    const result=1+4;
    console.log('soy scope local ' + result);
}

function resta(){
    //MANIPULA LA VARIABLE GLOBAL (este no es buena practica)
    result=result-1;
}

//NOTA NO PODEMOS ACCEDER A UNA VARIABLE DEFINIDA EN UN LOCAL/BLOCK SCOPE
add();
resta();
console.log('soy scope global ' + result);