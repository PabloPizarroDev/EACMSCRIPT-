const data = {
  frontend: "Pablo",
  backend: "Isabel",
  desing: "Ana",
};

const entries = Object.entries(data);
//nos dice la matriz
console.log(entries);
//nos dice la cantidad de cadena en este caso 3
console.log(entries.lenght);

const data = {
  frontend: "Pablo",
  backend: "Isabel",
  desing: "Ana",
};

const values = Object.values(data);
console.log(values);
//nos muestras los strings valores del objeto ['Pablo','Isabel','Ana']ignorando las asiganciones q teniamos
console.log(values.lenght);
//nos va a mostar 3

const string = "hello";
console.log(string.padStart(7, "hi"));
//va a mostrar hihello
console.log(string.padEnd(12, "----"));
// va a mostrar hello ----
console.log("food".padEnd(12, "----"));
//va a mostrar hello---- food----

const obj = {
  name: "Pablo",
};

//ASYNC AWAIT
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello world"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};
helloAsync();
//va a esperar 3 s y va a ejecutar "hello world"

const anotheFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
anotheFunction();
//con esta opcion nos ayuda a manejar bien los ERRORES
