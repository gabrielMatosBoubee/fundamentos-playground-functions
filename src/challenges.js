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
function highestCount(test) {
  let resultado = 0 ;
  let t = test[0];
  for (let index = 0 ; index <test.length ; index += 1) {
    if (t < test[index]) {
       t = test[index]
    }
  }
  for (let i = 0 ; i <test.length ; i += 1)  {
    if ( t == test[i]){
      resultado += 1
    }
  }
   console.log(resultado);
  return resultado
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 resultado = [];
 let x = mouse - cat1
 let y = mouse - cat2 
 if (x < 0){
  x *= (-1)
 }
 else if (y < 0){
  y *= (-1)
 } 
 if (x < y) {
  return "cat1"
 }
 else if (x > y){
 return "cat2"
 }
 else if (x == y){
  return "os gatos trombam e o rato foge"
 }
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
