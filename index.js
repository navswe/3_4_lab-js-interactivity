// addMovie function that adds a movie to the list when the user click "add" button.

const addMovie = (event) => {
  const message = document.querySelector("#message"); // message is already an id in HTML file

  event.preventDefault();
  let inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value; // this sets the content of movieTitle by the user input from inputField.

  movieTitle.addEventListener("click", crossOffMovie); // for "click" event on MovieTitle, run crossOffMovie function

  movie.appendChild(movieTitle); // append movieTitle span to movie element.

  const deleteBtn = document.createElement("button"); //function to create "delete" button
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie); // for "click" event on deleteBtn, run deleteMovie function
  movie.appendChild(deleteBtn);

  document.querySelector("ul").appendChild(movie); //attach movieTitle to movie element
  inputField.value = ""; //clear input field after user clicks "add" btn.
};

document.querySelector("form").addEventListener("submit", addMovie); //once 'form' is submitted, run addMovie function

const deleteMovie = (event) => {
  event.target.parentNode.remove(); // this removes the target item in "movie" list.
  message.textContent = `${event.target.parentNode.childNodes[0].textContent} deleted!`;
  revealMessage(); // We want to CALL revealMessage function so we have to use () here
};

const crossOffMovie = (event) => {
  // function to cross off or uncross a movie from a list
  event.target.classList.toggle("checked"); // 'checked' is already a class in styles.CSS
  if (event.target.classList.contains("checked") === true) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent} added back!`;
  }
  revealMessage(); // We want to CALL revealMessage function so we have to use () here
};

const revealMessage = () => {
  message.classList.remove("hide");
  setTimeout(() => {
    message.classList.add("hide");
  }, 1000); //setTimeout(callback fcn, timeout countdown?)
};
