const todoName = document.querySelector(".todoname");
const todoDate = document.querySelector(".tododate");

const contanor = document.querySelector(".todolist");

const todolist = JSON.parse(localStorage.getItem("todo")) || [];

let html = '';
console.log(localStorage);


update()
function add(){

    html = '';
    const todo = {
        todoname: todoName.value,
        tododate: todoDate.value
    }
    todolist.push(todo)
    update()
}

function removeTodo(index) {
    todolist.splice(index,1)
    update()
}
function update() {
    contanor.style.justifyContent = 'start'
    let num = 1;
    for (let index = 0; index < todolist.length; index++,num++) {
        html += `<div class="todoitems">
        <p class="todonum">${num} </p>
        <h4 class="doname"> ${todolist[index].todoname}</h4>
        <h4 class="dodate">Date : ${todolist[index].tododate}</h4>
        <button class="todo-btn-delete" onclick="removeTodo(${index})">Delete</button>
        </div>`;
    }
    contanor.innerHTML = html;
    todoName.value = '';
    todoDate.value = '';
    html = ''
    if (contanor.innerHTML ==='') {
        contanor.innerHTML = `<p class="empty">EMPTY</p>`
         contanor.style.justifyContent = 'center'
    }
    localStorage.setItem("todo", JSON.stringify(todolist))
}
