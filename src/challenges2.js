// Desafio 11
function generatePhoneNumber(parametro) {
  let arrayMaior = parametro.length ;
 
 let resultado = [];
 let arrayOrdenado = parametro.sort
 let calculo = arrayOrdenado[0];
 for (let i = 0; i <parametro.length ; i +=1){
  if (calculo === parametro[i]){
    calculo += 1
  }
 }
 if (arrayMaior !== 11) {
  resultado = "Array com tamanho incorreto."
 }
 else for (let index = 0; index <parametro.length ; index +=1){
  if (parametro[index] > 9 || parametro[index] < 0 || calculo >= 3) {
  resultado = "não é possível gerar um número de telefone com esses valores"
 }
 }
 
console.log(calculo)
 return resultado;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
