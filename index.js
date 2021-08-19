// If enter -> Post Message
var input = document.getElementById("message");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector("button").click();
  }
});

// Post Message Function
function addMessage(){
  const todo = document.getElementById('todo');

  let newText = document.getElementById('message');

  let newTodo = "<li><img src='profile.png' alt='profile image'><h3>Dhiwa</h3><span onclick='removeItem(this)'> x </span>" +
  "<p>" + newText.value + "</p>" + "<hr></li>";

  todo.insertAdjacentHTML('afterbegin', newTodo);

  newText.value = "";
}

// Remove Message Function
function removeItem(el){
  el.parentElement.remove();
}
