// fetch API

let data = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((info) => info);

//using async and await with fetch and getting the user name
async function fetchData() {
  try {
    let info = await data;
    console.log(
      "JSON Information ",
      info.map((item) => {
        console.log(item["name"]);
      })
    );
  } catch (err) {
    console.log(err);
  }
}

fetchData();
