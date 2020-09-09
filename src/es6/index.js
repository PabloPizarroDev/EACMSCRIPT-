function newFunction(name, age, country) {
  var name = name || "Pablo";
  var age = age || 34;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6
function newFuction2(name = "Pablo", age = 34, country = "MX") {
  console.log(name, age, country);
}

newFuction2(); //llama por defecto a la funcion
newFuction2("Ricardo", "23", "CO");

let hello = "hello";
let world = "world";
let epicPhrase = hello + "" + world;
console.log(epicPhrase);

let picPhrase2 = `${hello}${world}`;
console.log(epicPhrase2);

let lorem =
  "quiero escribir una frase epica para separar \n" +
  "otra frase Epica que necesitamos.";
//es6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem);
console.log(lorem2);

let person = {
  name: "Pablo",
  age: 34,
  country: "AR",
};
console.log(person.name, person.age, person.country);
//es6
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ["Pablo", "Oscar", "Julian"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}
{
  let globalLet = "Global Let";
  //aca si se va a ver en la consola solo se ve en donde se definio
  console.log(globalLet);
}
//se ve en la consola es global
console.log(globalVar);
//no se va apoder ver en la consola se debe declarar adentro
console.log(globalLet);

//no cambia su valor con const
const a = "b";
//no le va a dejar darle el valor porque a es una constante const
a = "a";

let name = "pablo";
let age = 34;

obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: "Pablo", age: 34 },
  { name: "Yesica", age: 30 },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//es6 function anonima se escribe =>
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
};
const listOfNames4 = (name) => {
  console.log(name);
};
const square = (num) => num * num;

//Promesa quiere decir que algo va a pasar

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//Classes

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

//Modulos en es6 exportar e importar
import { hello } from "./module";
hello();

//generaitor
function* helloWorld() {
  if (true) {
    yield "hello, ";
  }
  if (true) {
    yield "World";
  }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
//va a mostrar en consola:
hello, world;
undefined;
