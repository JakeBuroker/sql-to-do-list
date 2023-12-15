console.log('JS is sourced!');




// TO DO ARRAY
let toDoItem = [
    {
      id: '1',
      text: 'thing to do',
      isComplete: 'False',
    }
  ];



  // RENDER
  function renderToDos(array) {
    let tableBody = document.getElementById('toDoTable');
    tableBody.innerHTML = '';
    for (const todos of array) {
      tableBody.innerHTML += `
        <tr id="todo-${todos.id}" class="${todos.isComplete ? 'completed' : 'incomplete'}" data-testid="toDoItem">
          <td>${todos.text}</td>
          <td>
            <button data-testid="completeButton" onClick='updateIsComplete(${todos.id})'>
              Done
            </button>
          </td>
          <td >
            <button data-testid="deleteButton" onClick='deleteToDo(${todos.id})'>
              Delete
            </button>
          </td>
        </tr>
      `;
    }
  }


 //REFRESH
 getToDos()


 function classHandler(toDoId) {
  let toDoItem = document.getElementById(`todo-${toDoId}`);
  if (toDoItem) {
    toDoItem.classList.add("completed");

    console.log(toDoItem.classList)
  }
}

  //UPDATE
  function updateIsComplete(toDoId){
    axios.put(`/todos/${toDoId}`)
    .then((response)=>{
      classHandler(toDoId); // Pass the correct toDoId
      getToDos();
    })
    .catch((error)=>{
      console.log('Error updating complete', error);
    })
  }

//GET
function getToDos(){
    // axios call to server to get to dos
    axios.get('/todos')
    .then((response)=>{
      console.log(response.data);
      renderToDos(response.data)
    })
    .catch((error)=>{
      console.log('Error', error);
    })
  }


//POST
function submitToDoItem(event){

let newToDo = {
text: document.getElementById(`toDoTextInput`).value }

newToDo.classList = "incomplete"
axios.post('/todos', newToDo)   
 .then((response)=>{
  getToDos()
  console.log(newToDo.classList)})
 .catch((error)=>{
    console.log('Error in post', error);
 })
}

//DELETE
function deleteToDo(toDoId) {
    axios.delete(`/todos/${toDoId}`)
    .then((response) => {
      getToDos();
    })
    .catch((error) => {
      console.log('Error in delete', error);
    });
  }

  //REFRESH
  document.addEventListener('DOMContentLoaded', (event) => {
    getToDos();
});
  


