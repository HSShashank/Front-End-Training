//async and await
// async function prom() {
//   console.log("I will return a promise because I am async");
//   return "Hi. I am the promise";
// }
// prom()
//   .then((res) => {
//     console.log("I am in then");
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log("I am in catch");
//     console.log(res);
//   });

//await
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("RESOLVED");
  }, 4000);
});

async function promOne() {
  let a = await p;
  console.log("Hello! ", a);
}
promOne();
