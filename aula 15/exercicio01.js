// Site de loja virtual 
// ARRAY de itens de quanriddae de itens de usuarios 

const qtdItens = [10,30,40,50,6,20,12,30,12] 
const qtdFiltrada = qtdItens
    .filter(el => el >= 30)
    .map (el =>el /2)
    .forEach(el => console.log(el));
