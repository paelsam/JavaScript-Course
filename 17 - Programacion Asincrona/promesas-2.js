const callPromise = (value, time) => {
    if (!(typeof value == "number")) return Promise.reject(new Error("Solo debes ingresar números"));
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            for (let i=0; i <= value; i++) {
                setTimeout(()=>{
                    console.log(value - i);
                    resolve();
                }, time);
            }
        }, 1000)
        
    })
}

callPromise(5, Math.random() * 1000);