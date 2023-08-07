const todoList = [{
    name:'practice coding', 
    dueDate: '2023-07-18'}, 
    ];
//how to loop through an array's index



renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        //const { name, dueDate } = todoObject; Does the same as the 2 const above.
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

todoList.push({
    name: name, 
    dueDate: dueDate
});


inputElement.value = ''; // makes the text box empty

renderTodoList();
}

