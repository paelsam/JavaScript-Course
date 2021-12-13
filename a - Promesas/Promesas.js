let miPromersa = new Promise((resolve,reject)=>{
    let expresion = true;
    if(expresion){
        resolve('Correcto');
    }
    else {
        reject('ERROR');
    }
});

miPromersa.then(
    value => console.log(value),
    error => console.log(error)
);