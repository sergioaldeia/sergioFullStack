// Criar um objeto produto
const produto = {
  id: 1,
  marca: "Ferrari",
  nome: "Enzo 450",
  preco: 450.0,
};

produto.calcularPreco = () => {
  let total = 0;
  return (total += produto.preco);
};

console.log(produto.calcularPreco());
