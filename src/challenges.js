// Desafio 1
function compareTrue(animal, animal1) {
  const girafa = true;
  const elefante = true;
  const macaco = false;
  
  if (animal == girafa && animal1 == elefante || animal == elefante && animal1 == girafa) {
  return true}
  else {return false}
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height)/2 
  return resultado
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ")
  return resultado
}

// Desafio 4
function concatName(array) {
  let primeiroNome = array[0] ;
   let ultimoNome = array[array.length - 1] ;
   return (ultimoNome + ", " + primeiroNome);
}

// Desafio 5
function footballPoints(wins, ties) {
 let resultado = wins * 3 + ties
 return resultado
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
