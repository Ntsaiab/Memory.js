console.log("Yes I'm connected");
// create game board
// create modal to pop up over board when game loads
// user can read instructions
// click start game button.
// user clicks first tile, tile reveals data
    // start timer on first click
    // create storage for data
    // create a random generator to load data in tiles everytime page refreshes
    // or add new randomly generated data for next level play
    // display value of first tile
    // user clicks second tile, with first still visible
    // if 1st tile and 2nd tile matches stay on screen
    // if 1st tile and 2nd tile does not match return to base state after a specified time

// create computer generated turn
  // if 1st tile and 2nd tile matches stay on screen
  // if 1st tile and 2nd tile does not match return to base state after a specified time

// create a counter for when all the board is matched 
    // user counter
    // computer counter
      // display as score

// display You win message if user counter reaches x amount of points
// display Computer wins if computer counter reaches x amount of points

// 
//display you lose message if time runs out 2nd time

// ==============================
//     Cached Dom Notes
// ==============================
const mBoard = document.querySelector(".mBoard");
const modal = document.querySelector(".modal");
const playGame = document.querySelector(".play-game");



// ==============================
//     Create Game Board
// ==============================

for (let i = 1; i < 11; i++) {
  let div = document.createElement("div");
  div.classList.add("indivboxes");
  mBoard.appendChild(div);
}
// ==============================
//     Create Modal
// ==============================

const toggleModal = () => {
  modal.classList.toggle("close");
}




// ==============================
//     Create Global Variables
// ==============================



// ==============================
//     Create User Variables
// ==============================



// ==============================
//     Create Computer Variables
// ==============================




// ==============================
//      Functions/logic
// ==============================



// ==============================
//     Event Listeners
// ==============================

playGame.addEventListener("click", toggleModal);
