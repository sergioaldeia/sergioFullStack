const myBot = { 
    id: 1,
    nome: "Leonardo",
    tipo:"Geral",
    version:"7,0,0",
    description: "" ,
    author: "Sergio Aldeia",
    createdDate: "",
    updatedDate: "",
iniciarFuncoes: () => {
let pergunta =Number (prompt ('O  que devo fazer?'(1 - saudar ,2 - somar , 3 - subitrair, 4 - multiplicar , 5 - dividir, )))
switch (pergunta){ 
   case 1:
     alert (myBot .realizarSaudação());
     break;

     case 2: 
       alert (myBot.soma(5,2));
       break  
     default:
        alert("OPÇÂO INVALIDA")  



}
},

    realizarSaudação: () => {
       
        return "Ola ,mundoo";
    },

    soma: (a,b) => {
        return "Resultado:" + (a + b);
    },
    subitair: ( a, b) => {
        return "Resultado" + (a - b);
    },
     multiblicar: (a, b) => {
        return "Resultado"(a*b)
    }, 
    dividir: (a,b) => {
        return "Resultado" (a /b)
    },
}

console.log(myBot.realizarSaudação ());


