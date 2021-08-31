let form = document.getElementById("todoForm");
let todoList = document.getElementById("todoList");

form.onsubmit = saveTodo;

function saveTodo(e){
    e.preventDefault(); // prevent default opertation
    // let task = form.getElementsByTagName("input")[0].value;
    let task = document.getElementById('task').value;

    if(task===""){
        alert("Task cannot be empty!!");
        return
    }
    todoList.innerHTML += '<li class="list-group-item" onclick="marker(this)">'+task+'<button class="btn btn-sm btn-danger py-0 float-end" onclick="deleteTodo(this)">X</button></li>';
    document.getElementById('task').value = ""; // clearing old input data
}

function deleteTodo(el){
    el.parentNode.remove();
}

function marker(el){
    el.classList.toggle("text-decoration-line-through");
}