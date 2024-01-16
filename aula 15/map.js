// ARRAY MAP

const numeros = [4, 11, 50,29,10,13,27,35,400]

const mapeados = numeros
. map (el => el % 2) 
filter ( el =>el === 0)
.forEach (el => console.log (el))
    
