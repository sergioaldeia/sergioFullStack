const myBot = {
  // Caracteristicas do Robo
  id: 1,
  name: "Albert",
  type: "Geral",
  version: "1.0.0",
  description: "",
  author: "Raphael Rodrigues",
  createdDate: "",
  updatedDate: "",

  // Metodos do Robo
  iniciarFuncoes: () => {
    let pergunta = Number(prompt("O que deseja fazer? (1 - saudar, 2 - somar, 3 - subtrair, 4 - multiplicar, 5 - dividir)"));

    switch (pergunta) {
      case 1:
        alert(myBot.realizarSaudacao());
        break;

      case 2:
        alert(myBot.somar(5,2));
        break;

      default:
        alert("OPÇÃO INVÁLIDA");
    }
  },

  realizarSaudacao: () => {
    return "Ola, tudo bem?";
  },

  // Calculadora
  calcular: (op, a, b) => {
    switch (op) {
      case "+":
        return myBot.somar(a, b);
        break;
      case "-":
        return myBot.subtrair(a, b);
        break;
      case "*":
        return myBot.multiplicar(a, b);
        break;
      case "/":
        return myBot.dividir(a, b);
        break;
      default:
        return "OPCAO INVALIDA";
    }
  },

  somar: (a, b) => {
    return "Resultado: " + (a + b);
  },

  subtrair: (a, b) => {
    return "Resultado: " + (a - b);
  },

  multiplicar: (a, b) => {
    return "Resultado: " + (a * b);
  },

  dividir: (a, b) => {
    return "Resultado: " + (a / b);
  }
}

myBot.iniciarFuncoes();


