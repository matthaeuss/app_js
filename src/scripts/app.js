const controller = new AbortController();
const {signal} = controller;

const getDataNBP = async (code) => {
    return await new Promise((resolve, reject) => {
        controller.signal.addEventListener("abort", () => {
            console.log('abort')
            reject();
        })
        setTimeout(async () => {
            const response = await fetch(`${url}/a/${code}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                },
                signal
            })
            const data = await response.json()
            resolve(data);
        }, 2000)
    })
}


const url = 'http://api.nbp.pl/api/exchangerates/rates'
const urlAPI = 'http://localhost:3000/currencies'

const getDataFromAPI = async (code) => {
    const response = await fetch(`${url}/a/${code}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    });
    return response.json()
}
// getDataFromAPI('usd').then(console.log)

// getDataNBP("usd").then(r => console.log(r));

const getDataFromBackend = async (code) => {
    return await new Promise(async (resolve, reject) => {
        const response = await fetch(`${urlAPI}?code=${code}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",

            }
        });

        const data = await response.json();

        if (data.length){
            resolve(data);
        }
        reject('Something is no yes');
    })
}
getDataFromBackend(`usd`).then(console.log)



const getDataLocalStorage = async (code) => {
    await new Promise((resolve, reject) => {
        const data = localStorage.getItem('currencies')
        if(data){
            JSON.parse(data).forEach((currency) => {
                if(currency.code === code){
                    resolve(currency)
                }
            })
        }
        reject('Something is incorrect in localstorage')
    })
}

getDataLocalStorage('usd').then(console.log)

// promise.any()
// promise.all()
// promise.race()

// getDataLocalStorage('usd')
//     .then(console.log)
//     .catch(console.error);
//
// getDataNBP('usd')
//     .then(console.log)
//     .catch(console.error)
//
// getDataFromBackend('usd')
//     .then(console.log)
//     .catch(console.error)