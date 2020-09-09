//Dynamic import
//ahora se puede importar modulo desde la funcion segun nuestra necesidad
if (true) {
  const module = await import("./module.js");
  module.function();
}

//Optional Chaning
//simplifica el acceso a los valores a traves de objectos cuando sea undefined o null
const nameLength = db?.user?.name?.length;

//GlobalThis
//contiene el valor global this segun el contexto del objeto global
const getGlobalThis = () => {
  if (typeof globalThis !== "undefined") return globalThis;
};
const theGlobalThis = getGlobalThis();
//BigInt
//nos permite tener una representacion entera mucho mayor en tu codigo JS
const max = Number.MAX_SAFE_INTEGER;
//9_007_199_254_740_991

//Promise.allSettled
//retorna un objeto describiendo cada uno de los resultados de una promesa
const promises = [
  fetch("/api-call-1"),
  fetch("/api-call-2"),
  fetch("/api-call-3"),
];
await Promise.allSettled(promises);
