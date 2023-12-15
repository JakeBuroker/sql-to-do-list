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
        <tr>
          <td>${todos.text}</td>
          <td>${todos.isComplete}</td>
          <td>
            <button onClick='updateIsComplete(${todos.id})'>
              Complete
            </button>
          </td>
          <td >
            <button onClick='deleteToDo(${todos.id})'>
              Delete
            </button>
          </td>
        </tr>
      `;
    }
  }


  // REFRESH
  getToDos()


  //UPDATE
function updateIsComplete(toDoId){
  axios.put(`/todos/${toDoId}`)
  .then((response)=>{
    getToDos()
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
 console.log(newToDo)
axios.post('/todos', newToDo)   
 .then((response)=>{
  getToDos()
   console.log('in post request')})
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
  


