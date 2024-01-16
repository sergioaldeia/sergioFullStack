// ARRAY MAP

const numeros = [2,0,12,45,27,10,135,210,3]

const mapeados = numeros

.map(el=> el % 2)
 .fiter(el=>el===0)   
.forEACH(el=> console.log(el))