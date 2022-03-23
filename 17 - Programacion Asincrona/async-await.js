const callPromise = (value, time) => {
    if (!(typeof value == "number")) return Promise.reject(new Error("Solo puedes ingresar Numeros"));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sqrt = value ** 2;
            resolve({
                value,
                result: sqrt
            });
        }, time);
    })
}

// Funcion asincrona:
const funcionAsincronaExpresada = async () => {
    try {
        console.log("Inicio de Async function");

        let obj = await callPromise(0, 1000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(1, 2000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(2, 3000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(3, 4000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(4, 5000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(5, 6000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        console.log("Fin de Async function");

    } catch (error) {
        console.error(error);
    }
}


async function funcionAsincronaDeclarada() {
    try {
        console.log("Inicio de Async function");

        let obj = await callPromise(0, 1000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(1, 2000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(2, 3000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(3, 4000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(4, 5000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        obj = await callPromise(5, 6000);
        console.log(`Async Function ${obj.value}, ${obj.result}`);

        console.log("Fin de Async function");

    } catch (error) {
        console.error(`Error encontrado: ${obj.value} ${error}`);
    }
}

funcionAsincronaDeclarada();