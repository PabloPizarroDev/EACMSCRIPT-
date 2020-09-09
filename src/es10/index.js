let array = [1, 2, (3)[(1, 2, (3)[(1, 2, 3)])]];

console.log(array.flat());
//va aparecer en consola [1, 2, 3[1, 2, 3[1, 2, 3]]]
console.log(array.flat(2));
//va aparecer en consola [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]

let array = [1, 2, 3, 4, 5];

console.log(array.flapMap((value) => [value, value * 2]));
// [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]
let hello = "      hello world";
console.log(hello);
console.log(hello.trimStart());
//elimina los espacio del texto al principio
let hello = "hello world        ";
console.log(hello);
console.log(hello.trimEnd());
//elimina los espacios del texto al final

try {
} catch {
  error;
}

let entries = [
  ["name", "Pablo"],
  ["age", 34],
];
console.log(Object.fromEntries(entries));
//nos devuelve un objeto construido con el valor { name: 'Pablo', age: 34 }

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
//ver que elementos se encuentra en este lenguaje en este caso "My Symbol"
