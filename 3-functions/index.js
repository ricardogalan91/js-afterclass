function resta(n1,n2){
    return n1-n2;
}


function sum(n1,n2){
    const result=n1+n2;
    console.log(result);
}

let resultadoDeProducto=0;

function producto(n1,n2){
    resultadoDeProducto= n1*n2;
}

function nestFunction(){
    sum(5,10);
    //nos debería dar un output de 15
}

nestFunction();


