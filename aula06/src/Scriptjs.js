//let estado = "RJ";
//let result = "";

// switch (estado) { 
//   case "RJ":
//   case "SP":
//   case "MG":
//   case "ES":
//     result = "REGIÃO SULDESTE";
//     break;
    
//   case "AM":
//   case "RR":
//   case "RO":
//   case "AL":
//   case "PA":
//     result = "REGIÃO NORTE";
//     break

//   default:
//     result = "OUTRA REGIÃO"
  
// }
  
let peso = 68;
let altura = 1.77;
let imc= peso / (altura * altura);
let result = "";

if (imc < 64.5) {
  result = "ABAIXO DO PESO";

} else if (imc < 68.0 && imc <= 75.2 ) { 
  result = "NORMAL";

} else if (imc < 76.4 && imc > 80.4 ) { 
  result = "SOBRE PESO";

} else if (imc < 82.0 && imc > 86.4) { 
  result = "OBESIDADE 1";

} else if (imc <87.5 && imc > 92.0) { 
  result = "OBESIDADE 2";

} else {
  result = "OBSESIDADE 3 OU MORBIDA";

}






const resposta = result 






