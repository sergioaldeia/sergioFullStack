// Site de Loja Virtual
// ARRAY DE ITENS DE QUAMTIDADE DE ITENS 

const qtdItens = [2,13,10,33,28,41,84,19,500]
const qtdFiltrada = qtdItens
.filter(el=>el >=28)
.map(el=>el *2)
.forEach(el=>console.log(el))