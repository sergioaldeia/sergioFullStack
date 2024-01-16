// Revisão sobrre Funções 
// Definindo uma função 

const situacaoEstoque = "ok";

const conferirEstoque = estoque => {
 if (estoque === "OK"){
    return "Stauus do  Estoque : OK"
 }  else if (estoque ===  'Baixo'){
    return "Status do Estoque:BaixXO È  necessario conferir estoque"
 }  else if (estoque === "MEDIO") { 
    return 'Status do Estoque Medio Alerata para o estoque'
 } else {
    return 'Staus invalido'
 }
}

console.log(conferirEstoque('Baixo'))

