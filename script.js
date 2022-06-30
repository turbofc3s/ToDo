// -Create a Github repository for this project.
// -A user must be able to add and delete a todo item, from the UI and from your storage.
// -Save each todo item as an object, with a key for the todo text and an "id" key that represents a random number you can use to search it by. So, you should have an array of objects that you're saving in localStorage.
// -Hint: use JavaScript localStorage to store the todos. 
// -Hint: To convert an array into the string representation, you'll need JSON stringify. To convert it back to an array, you'll need JSON parse.
// -Send me the project for review and get started on the next project.

// You can store your Todos in an array, but keep in mind that localStorage can only store strings, so that means you'll have to convert your array of todos into a string before you can store it. And when you retrieve it, you have to convert it from a string back to an array. Those are all things you can do with JavaScript, so make sure to look those up.

// Also, you can use JavaScript to add an "onclick" attribute to elements you're using JavaScript to create. This may be of note when thinking of how to delete the todo element. 



// Set Item
//for Todos to store
// localStorage.setItem("firstname", 'Rachel');
//get item
//document.getElementById('demo').innerHTML = localStorage.getItem('firstname');

//When sending data to a web server, the data has to be a string.


//stringify is converting arrays into strings and object is an array
// const arr = ["John", "Peter", "Sally", "Jane"];
// const myJSON = JSON.stringify(arr);
// ["John","Peter","Sally","Jane"]

//parse is converting string into an object
// '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

// as a user deletes something in the todo list this should be used to
// make sure it is deleted from localStorage
// localStorage.removeItem(key);

//input button with add label with an onclick tha does setItem (saves key value pairs in browser)
//delete button with an onclick that


// All of the dom elements
let addToDo = document.getElementById('add');
let inputField = document.getElementById('input');  
let todocontainer = document.getElementById('toDoContainer')
const todoForm = document.getElementById('form')// array for holding todos
let todos = [];

//prevent page from reloading when submitting the form
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
})


// function to create a p element in html set the value to 
// what is in the input field, fill the toDoContainer div and 
// then update the value of the field with an empty string
add.addEventListener('click', function() {
	const paragraph = document.createElement('p')
	const btn = document.createElement('button')
	paragraph.innerText = inputField.value;
	toDoContainer.appendChild(paragraph);
	btn.innerText = ' delete'
	paragraph.appendChild(btn);
	
	const todo = {
		value: inputField.value,
		id: Date.now()
	}
  
	// add to todos array
  	todos.push(todo)

  	//right now the todo is an object to send to local browser it must be a string so use stringify
  	const myJSON = JSON.stringify(todos);
	localStorage.setItem("nTodos", myJSON);
	let text = localStorage.getItem('nTodos');
	if(text === null){
		todos = [];
	} else {
		todos = JSON.parse(text);

	}



})



	
 
   // addtoLocalStorage(todos) // store in local storage;

