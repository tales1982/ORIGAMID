//Parâmetros e Argumentos
//O imc é o Parâmetro e peso , e altura é o argumento.

function imc(peso, altura) {
  const imc = peso / (altura * 2);
  return imc;
}
console.log(imc(80, 1.8).toFixed(1)); //aqui eu chamo minha fuçao e declaro o valor do parâmetros meu peso e altura
console.log(imc(90, 1.82).toFixed(1)); //posso chamar minha funçao quantas vesse quiser

//################################################################################################

function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(10));

//################################################################################################

function pi() {
  return 3.14;
}
console.log(pi());
