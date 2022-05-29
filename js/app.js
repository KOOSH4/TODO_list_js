console.log('start');
// selectors
const taskList = document.querySelector('.task-list');
const formButton = document.querySelector('.form-submit');
const formInput = document.querySelector('.form-input');
const filterTodo = document.querySelector('.select-todo');
//event listeners

formButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
filterTodo.addEventListener('click', filterTask);
// functions
function addTask(event){
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    const taskName = document.createElement('li');
    taskName.classList.add('task-name');
    taskName.innerText = formInput.value;

    const taskDoneButton = document.createElement('button');
    taskDoneButton.classList.add('done-button');
    taskDoneButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    const taskEditButton = document.createElement('button');
    taskEditButton.classList.add('edit-button');
    taskEditButton.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';

    todoDiv.appendChild(taskName);
    todoDiv.appendChild(buttonGroup);
    buttonGroup.appendChild(taskDoneButton);
    buttonGroup.appendChild(taskEditButton);

    taskList.appendChild(todoDiv);
    formInput.value = "";
    //console.log('jj');
};

function deleteTask(event){
    const task = event.target;
    //const par3ent = event.parent;

    if(task.classList[0] === 'edit-button'){
        console.log('22');
        const item = task.parentElement.parentElement;
        item.classList.toggle('deleteAnimation')
        item.addEventListener('transitionend', ()=>{
            item.remove();
        })
    }
    if(task.classList[0] === 'done-button'){
        const item = task.parentElement.parentElement;
        item.classList.toggle('completed');
    }
}
function filterTask(event){
    const task = taskList.childNodes;
    //console.log(task);
    task.forEach(function(item){
        switch(event.target.value){
            case 'all':
                //item.style.display = 'flex';
                break;
            case 'done':
                console.log('done');
                console.log(item.classList);

                break;
            case 'todo':
                console.log('todo');
               // console.log(item);
                break;
        }
    })
}