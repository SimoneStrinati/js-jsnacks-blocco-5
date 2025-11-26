const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

names.forEach(persona => {
    console.log(persona)

});

/*********oppure function normale**********/

names.forEach(function (persona) {
    console.log(persona)
})
