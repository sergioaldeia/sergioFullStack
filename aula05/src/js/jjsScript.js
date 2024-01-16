//let (id) = 10;
//let statusLogin = "";

//switch (id) {
   // case 1:
      // statusLogin = "ADM";
       // break;
    //case 2:    
        //statusLogin = "CONVIDADO";
       // break;
   // case 3:
        //statusLogin = "USUARIO";
       // break;

    // default:
      // statusLogin = "ERRO 404";       
//}    

let n1 = 2;
let n2 = 4;
let soma = n1 + n2;
let subitracacao =n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let operador ="+";
let resultado = "";
   if (operador==="+") { 
     resultado = soma;
       
   } else if (operador==="-") { 
     resultado = subitracacao;       
   
   } else if (operador==="*") { 
     resultado = multiplicacao;

   } else if (operador==="/") { 
     resultado = divisao;

   } else { 
     resultado = "OPERADOR INVALIDO"
   }
   
switch (operador)  {
   case "+":
     resultado = soma;
     break;

    case "-":
      resultado = subitracacao;   
      break;  

    case  "*":
       resultado = multiplicacao;
       break;

    case "/":
       resultado = divisao;
       break;

    default:
      resultado = "RESULTADO INVALIDO";          
      break
   }  

const resposta = resultado

