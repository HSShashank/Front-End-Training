//Function to add and delete tasks
function add_del_Task(){
    let task = document.createElement("li");
    let taskValue = document.getElementById("add-task").value
    let todo = document.getElementById("todo-list");

    if (taskValue === ""){
        return
    }

    task.textContent = taskValue;
    todo.appendChild(task);

    let delBtn = document.createElement("button");
    let delImg = document.createElement("img");
    delBtn.setAttribute("class","del-task");
    delImg.setAttribute("src","./trash.svg");
    // delBtn.textContent = "Delete";
    task.appendChild(delBtn);
    delBtn.appendChild(delImg);

    delBtn.addEventListener("click", () => {
        todo.removeChild(task);
    })
}
//Function to get date and time
function getDateTime(){
    let date = new Date();
    let currentDate = date.toDateString()
    // let day = date
    let currentTime = date.getHours() + ':' + date.getMinutes();
    //  console.log(currentDate, currentTime);

    let timeDiv = document.getElementById("display-time");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.setAttribute("id", "time");
    p2.setAttribute("id","date");
    p1.textContent = currentTime;
    p2.textContent = currentDate;

    // console.log(p1, p2);
    timeDiv.appendChild(p1);
    timeDiv.appendChild(p2);
}

//Flow
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
add_del_Task();
document.getElementById("add-task").value = "";
})
getDateTime();

