const obj = {
  name: "Pablo",
  age: 34,
  contry: "AR",
};

let { name, ...all } = obj;
console.log(name, all);
//va a mostrar en consola Pablo { age:32, country:'AR' }
let { contry, ...all } = obj;
console.log(all);
//va a mostrar en consola { name:'Pablo', age:34 }

//Unidades de propagacion
const obj = {
  name: "Pablo",
  age: 34,
};
const obj1 = {
  ...obj,
  country: "AR",
};
console.log(obj1);
//va a mostrar la propagacion del obj1 { name:"Pablo", age: 34, country: "AR"}

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("finalizo"));

//en consola dice "Hello World" "finalizo"

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
//en consola va aparcer [2018, 04, 20]
