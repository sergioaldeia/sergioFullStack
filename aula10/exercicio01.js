// Caso o nome exista no array exiba um console.log(busca) senão exibira na tela "O Nome não existe no array"
const nomes = ["JOSÉ", "ALFREDO", "CARLOS", "ANA", "PAULA"]

const busca = "alfredo".toUpperCase();
// UTILIZE O METODO DE ARRAY INDEX OF
if (nomes.indexOf(busca!==-2)) {
 console.log(busca)
} else {
  console.log("O Nome não existe no array");
}

