const express = require('express');
const app = express();

app.use(express.json());

let userList = [
    {
        id: 1,
        name: "Shashank",
        email: "s@s.com"
},
{
    id: 2,
    name: "ABC",
    email: "abc@s.com"
},
{
    id: 3,
    name: "XYZ",
    email: "xyz@s.com"
}
];

//GET
app.get("/users",(req,res) =>{
    res.send(userList);
})

//POST
app.post("/users",(req,res) => {
    const newUser = req.body;
    userList.push(newUser);
    res.json();
})

//DELETE
app.delete("/users/:id", (req,res) => {
    const id = req.params.id;
    const newList = userList.filter(item => item.id != id);
    userList = [...newList];    
})

//PUT
app.put("/users", (req,res) => {
    const newEmail = req.body.newEmail;
    userList.forEach(item => item.email = newEmail)
})
//LISTEN
app.listen(1000, () => {
    console.log("Server Running");
})


