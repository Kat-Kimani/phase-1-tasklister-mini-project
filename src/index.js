document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // Declare your variables using const or let
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {

  e.preventDefault()

  buildTodo(e.target.newTaskDescription.value)
// Clear the input field after submitting
  e.target.reset()

})

});


function buildTodo(tasks){
// Create the elements= paragraph & button
  let p = document.createElement ('p')
  let btn = document.createElement('button')

  // Append the text content to the button element
  btn.textContent = 'x'
  p.textContent = tasks
 

  // Append the button and task text content to the paragraph element
  p.appendChild(btn)

  // Append the paragraph element to the list
  document.querySelector('#list').appendChild(p)


// Add event listener to the delete button
  btn.addEventListener('click', handleDelete)

}

function handleDelete(e){
 // Remove the parent element (the paragraph) of the delete button
e.target.parentNode.remove ()
}