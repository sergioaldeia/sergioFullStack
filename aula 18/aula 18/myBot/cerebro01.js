const myBot = {
  
    id: 1,
    name:"Issac Newton",
    type:"Geral",
    version: "7,0,0",
    description: "",
    author: "Sergio Aldeia",
    ceatedDate: "",
    updatedDate: "",

    iniciarFunções: () => {
        let pergunta = Number(prompt("O que deseja fazer?"( 1 - saudar , 2-somar,3-subitrair, 4-multiplicar, 5 -dividir) ));

        switch (pergunta) {
          case 1:
            issacNewton(myBot.realizarSaudacao()); 
            break;
            
          case 2:
            issacNewton(myBot.multiplicar (10,9));
            break;
            
          default: 
            issacNewton("OPÇÃO INVALIDA");   
        }
    },

    realizarSaudacao:() => { 
        return "Ola mundo";
    },
    
    // Calculadora 
  calcular: (op, a , b) => { 
    switch (op) {
      case "+": 
        return myBot.somar (a , b)  
        break; 
      case "-":   
        return myBot.subitrair (a , b) 
        break;   
      case "*":
        return myBot.multiplicar (a, b) 
        break;
      case "/":
        return myBot.dividir (a, b) 
        break;
      default:
        return "OPERADOR INVALIDO";    

    }
  },

  somar: (a, b) => {
    return "Resultado" + (a + b);
  },

  subitrair: (a, b) => {
    return "Resultado" + (a - b);
  },

  multiplicar: (a , b) => {
    return "Resultado" + (a * b);
 },  
  
  dividir: (a , b) => {  
    return "resultado" + (a / b);
    
  },
}

myBot. iniciarFunções();
    


    


