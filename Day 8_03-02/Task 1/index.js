//PROMISE WITH then(), catch() and finally()
console.log("START");
let n = false;
let p = new Promise(function (resolve, reject) {
  if (n) {
    resolve("RESOLVED");
  } else {
    reject("REJECTED");
  }
});
p.then((result) => {
  console.log("THEN");
})
  .catch((result) => {
    console.log("CATCH");
  })
  .finally(() => {
    console.log("FINALLY");
  });
