//let estado = "RJ";
//let result = "";

switch (estado) { 
   case "RJ":
   case "SP":
   case "MG":
   case "ES":
     result = "REGIIÃO SULDADESTE";
    break; 

   case "PR":
   case "SC":
   case "RS": 
    result = "REGIÃO SUL";
    break; 
    
   default: 
     result = "OUTRA REGIÃO"
}  

let peso = 70;
let altura = 1.78;
let imc = peso / (altura * altura)
let result = ""; 

if (imc<70) {
  result = "ABAIXO DO PESO"

} else if (imc<70 && imc <= 78.6) {
  result ="PESO NORMAL";

} else if (imc<78.6 && imc > 85,2) { 
  result = "SOBRE PESO"

} else if (imc <85.2 && imc >96.9) { 
  result = "OBESIDADE 1"

} else if (imc <96,9 && imc > 110.1) {
  result = "OBESIDADE 2"

} else { 
  result = "OBESIDADE 3 OU MORBIDA"

}













































const resposta = result 