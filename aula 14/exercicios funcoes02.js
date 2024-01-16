let p = 70;
let h = 1.78;

const calcacularIMC = (p,h) => p / (h*h) 

// criar uma funcao chamada  verificar peso 

const verifificaPeso = imc => {
    if  (imc < 65) {
       return "Abaixo do Peso"  
    }  else if (imc <= 65 && imc <= 69.2) { 
       return "Peso normal" 
    }  else if (imc <= 70.4 && imc <= 73) { 
       return "Sobre peso"  
    }  else if (imc <= 74.9 && imc <= 78.7) { 
       return "Obsidade 1"
    }  else if  (imc <= 80.5 && imc<= 83.9) { 
       return "Obsidade 2" 
    }  else {
       return "Obsidade 3 ou morbida" 
    }

}

    

