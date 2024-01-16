let p = 60 ;
let h = 1.70 ;

const calcacularIMC = (p,h) => p / (h*h) 

//  criar a funcao chanada verifucar peso 

const verificarPeso =imc =>  { 
 
    if ( imc < 57)  {
      return "Abaixo do Peso"
    } else if (imc <= 57 && imc <= 60.4) {
      return "Peso normal "
    } else if (imc <= 61.3 && imc<= 65) {
      return "Sobre Peso"
    }else if (imc <= 66.4 && imc <= 69.4) {
      return "Obsidade 1"
    }else if (imc<= 70.5 && imc<= 74) { 
      return "Obsidade 2"
    }else{
      return "Obesidade 3 ou morbida "
    } 

    

      


      











}   