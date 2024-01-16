// ALBERT 08
function entregarPacote ( listaProdutos ) {
    return listaProdutos;
}

const lista = ["Celular", "Tablet" ,"Pendrive"];

// console.log (entregarPacote (lista));

function calcular (n1 ,n2 ,operador) {
  switch(operador) {
     case "+": 
       return somar (n1 , n2);
       break;    
     case "-":
        return dividir (n1 , n2);
        break;
     case  "*":
       return multiplicar (n1, n2); 
       break;
     case "/":
        return subtrair (n1,n2)
        break;

     default:
       return "OPERADOR INVALIDO" 

  }
}

console.log(40/20);