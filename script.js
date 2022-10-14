// -Create a Github repository for this project.
// -A user must be able to add and delete a todo item, from the UI and from your storage.
// -Save each todo item as an object, with a key for the todo text and an "id" key that represents a random number you can use to search it by. So, you should have an array of objects that you're saving in localStorage.
// -Hint: use JavaScript localStorage to store the todos. 
// -Hint: To convert an array into the string representation, you'll need JSON stringify. To convert it back to an array, you'll need JSON parse.
// -Send me the project for review and get started on the next project.

// You can store your Todos in an array, but keep in mind that localStorage can only store strings, so that means you'll have to convert your array of todos into a string before you can store it. And when you retrieve it, you have to convert it from a string back to an array. Those are all things you can do with JavaScript, so make sure to look those up.

// Also, you can use JavaScript to add an "onclick" attribute to elements you're using JavaScript to create. This may be of note when thinking of how to delete the todo element. 

// All of the dom elements
let addToDo = document.getElementById('add');
let inputField = document.getElementById('input');  
let todocontainer = document.getElementById('toDoContainer')
const todoForm = document.getElementById('form')// array for holding todos

let textOfArray = localStorage.getItem('nTodos');
let arrayOfTodos = JSON.parse(textOfArray)

// function setLocalStorage() {
//    	       localStorage.setItem('nTodos', JSON.stringify(arrayOfTodos))
//           }	

if(arrayOfTodos === null) {
  	 
  	axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(response => {
        arrayOfTodos = []; 
        let responseData = response.data	
          
        for (let i = 0; i < 5; i++){
          const rTitle = responseData[i].title;
          const rId = responseData[i].id;
          addToUi(rTitle, rId);

          const todos = {
		    value: rTitle,
		    id: rId
	      }

	      arrayOfTodos.push(todos)
	      localStorage.setItem('nTodos', JSON.stringify(arrayOfTodos))
        }
    })          
} else {
    for (let i = 0; i < arrayOfTodos.length; i++) {
   	  const todoValue = arrayOfTodos[i].value;
      const todoId = arrayOfTodos[i].id;
      addToUi(todoValue, todoId);

      const todos = {
	    value: todoValue,
	    id: todoId
	  }
    }
}

//prevent page from reloading when submitting the form
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
e.preventDefault();
})

function deleteToDo(id) {
  document.getElementById(id).remove(id)
    for (let i = 0; i < arrayOfTodos.length; i++) {
	  if(id === arrayOfTodos[i].id ) {
		arrayOfTodos.splice(i, 1)
		// setLocalStorage()
		localStorage.setItem('nTodos', JSON.stringify(arrayOfTodos))
	  } 		
	} 	
} 
// function to create a p element in html set the value to 
// what is in the input field, fill the toDoContainer div and 
// then update the value of the field with an empty string

function addToUi(todo, id) {
  const paragraph = document.createElement('p')
  const deleteBtn = document.createElement('button')

  paragraph.innerText = todo;
  paragraph.id = id
  toDoContainer.appendChild(paragraph);
  deleteBtn.innerText = ' delete'
  paragraph.appendChild(deleteBtn);
        
  deleteBtn.onclick = function() {
    deleteToDo(id) 
  }    
}

add.addEventListener('click', function() {
  const dateNow = Date.now();
  const todo = inputField.value;
  addToUi(todo, dateNow);
  
  const newTodo = {
    value: todo,
    id: dateNow
  }
  
   // add to todos array
   let stringOfTodos = localStorage.getItem('nTodos');
   let arrayOfTodos = JSON.parse(stringOfTodos);
     if (arrayOfTodos === null) {
      arrayOfTodos = [];
     } else {
      arrayOfTodos.push(newTodo);
     }   
      // setLocalStorage()
   localStorage.setItem('nTodos', JSON.stringify(arrayOfTodos))
   inputField.value = ""
})

					  -->