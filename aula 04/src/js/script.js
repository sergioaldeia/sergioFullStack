document.addEventListener("DOMContentLoaded", () => {
  //---- SEU CÓDIGO ABAIXO ----//
   let n1 = 2;
   let n2 = 2;
   let n3 = 4;
   let n4 = 5;

  let verificador = n1  === n2 && n3 < n4;
  // let verificador = !( n1  !== n2 || n3 > n4);
 let resposta 

  //---- n1 encremento antes da função  ----//
  // let verificador = ++n1;
  


  
  if (!verificador) { 
  resposta  = "entrei verdadeiro "
    } else{
    resposta = "Entrei no Falso "

  }

  //---- encremento depois da função  ----//
// let verificador = n1++

  exibirResultadoNaTela(resposta);
});
