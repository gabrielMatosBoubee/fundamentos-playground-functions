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
 let x = mouse - cat1 ;
 let y = mouse - cat2 ;
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
function fizzBuzz(array) {
  let resposta = [];
  for (let index = 0; index <array.length; index += 1) {
  let resultado = array[index];
  if (resultado % 3 == 0 && resultado % 5 == 0) {
    resposta.push("fizzBuzz")
  }
  else if (resultado % 5 === 0){
    resposta.push("buzz")
  }
  else if (resultado % 3 === 0) {
    resposta.push("fizz")
  }
  else resposta.push("bug!") 
}
 return resposta
}
// Desafio 9
function encode(string) {
  let resultado = [];
  for (let index = 0; index < string.length; index += 1) {
    let curso = string[index];
    if (curso === "a") {
      resultado.push(1)
    }
    else if (curso === "e") {
      resultado.push(2)
    }
    else if (curso === "i") {
      resultado.push(3)
    }
    else if (curso === "o") {
      resultado.push(4)
    }
    else if (curso === "u"){
      resultado.push(5)
    }
    else resultado.push(curso)
  }
 return resultado.join('')
}
function decode(string1) {
  let resultado = [];
  for (let index = 0; index < string1.length; index += 1) {
    let curso = string1[index];
    if (curso === "1") {
      resultado.push("a")
    }
    else if (curso === "2") {
      resultado.push("e")
    }
    else if (curso === "3") {
      resultado.push("i")
    }
    else if (curso === "4") {
      resultado.push("o")
    }
    else if (curso === "5"){
      resultado.push("u")
    }
    else resultado.push(curso)
  }
 return resultado.join('')
}

// Desafio 10
function techList(array, string) {
  let arrayOrdenado = array;
  let arrayDeObjetos = [];
  if (array.length === 0) {
   return 'Vazio!'
  } 
  else arrayOrdenado = arrayOrdenado.sort()
 for (let index = 0; index <array.length; index += 1){
 arrayDeObjetos.push({"tech":arrayOrdenado[index], "name": string}) 
}
return arrayDeObjetos
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
