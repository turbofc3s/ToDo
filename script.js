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
let addToDo = document.getElementById('add');
let inputField = document.getElementById('input');
let todocontainer = document.getElementById('toDoContainer')

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
})


add.addEventListener('click', function() {
	const paragraph = document.createElement('p')
	paragraph.innerText = inputField.value;
	toDoContainer.appendChild(paragraph);
	inputField.value = ""		

})