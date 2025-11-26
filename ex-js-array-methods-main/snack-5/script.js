const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNumbers = nums.filter(function (numero){
    //console.log(numero)
    if (numero % 2 == 0){
        return true;
    }
})

console.log(evenNumbers);


/*********oppure********/

// const evenNumbers = nums.filter(numero => {
//     return (numero % 2 == 0);
// })