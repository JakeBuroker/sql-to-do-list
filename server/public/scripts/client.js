console.log('JS is sourced!');


// TO DO ARRAY
let toDoItem = [
 {
      id: '1',
      text: 'thing to do',
      isComplete: 'False',
}
];

// MODAL DELETE
let currentDeleteId = null;
function setCurrentDeleteId(toDoId) {
 currentDeleteId = toDoId;
}

// RENDER
function renderToDos(array) {
let tableBody = document.getElementById('toDoTable');
  tableBody.innerHTML = '';
    for (const todos of array) {
      tableBody.innerHTML += `
        <tr id="todo-${todos.id}" class="${todos.isComplete ? 'completed' : 'incomplete'}" data-testid="toDoItem">
          <td>${todos.text}</td>
          <td>
          <button href="#myModal" id="Delete" class="trigger-btn" data-toggle="modal" onclick="setCurrentDeleteId(${todos.id})">
        Delete
        </button>
        <button data-testid="completeButton" id="Done" class="trigger-btn" onClick='updateIsComplete(${todos.id})'>
              Done
            </button>
          </td>
        </tr>
      `;
    }
}

// REFRESH
getToDos()

// CHANGE TODO CLASS
function classHandler(toDoId) {
let Done = document.getElementById(`Done`)
let toDoItem = document.getElementById(`todo-${toDoId}`);
  if (toDoItem) {
    Done.id = "DoneClicked"
    toDoItem.classList.add("completed");
  }
}

// UPDATE
function updateIsComplete(toDoId){
    axios.put(`/todos/${toDoId}`)
    .then((response)=>{
      classHandler(toDoId);
      getToDos();
    })
    .catch((error)=>{
      console.log('Error updating complete', error);
    })
}

// GET
function getToDos(){
    axios.get('/todos')
    .then((response)=>{
      console.log(response.data);
      renderToDos(response.data)
    })
    .catch((error)=>{
      console.log('Error', error);
    })
}


// POST
function submitToDoItem(event){
let newToDo = {text: document.getElementById(`toDoTextInput`).value }
newToDo.classList = "incomplete"

axios.post('/todos', newToDo)   
 .then((response)=>{
  getToDos()
  
  console.log(newToDo.classList)})
 .catch((error)=>{
  console.log('Error in post', error);
})
}

// DELETE
function deleteToDo(toDoId) {
axios.delete(`/todos/${toDoId}`)
 .then((response) => {
    getToDos();
    $('#myModal').modal('hide');
})
  .catch((error) => {
    console.log('Error in delete', error);
});
}

document.addEventListener('DOMContentLoaded', (event) => {
  getToDos();
});
  


