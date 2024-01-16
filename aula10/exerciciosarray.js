// Caso o nome exista no array wexiba no console .log (busca) se  não exsibir na tela o nome não esta no array
const nomes = ["Alessandra Elaine Viviane Camila"] 

const busca = "Alessandra" . toUpperCase (); 
// ULTILEZE O METODO ARRAY INDEX OF 
if (nomes.indexOf(busca!== 0)) { 
  console.log(busca)  
} else {
    console.log("O nome não existe no Array");
}