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
const nGameBtn = document.querySelector("#ngame");
const rLevelBtn = document.querySelector("#rlevel");
const eGameBtn = document.querySelector("#egame");



// ==============================
//     Create Game Board
// ==============================

let num = 7;

for (let i = 1; i < num; i++) {
  let div = document.createElement("div");
  div.classList.add("indivboxes");
  mBoard.appendChild(div);
}


// ==============================
//   Create Modal/EventLisFunc
// ==============================

const toggleModal = () => {
  modal.classList.toggle("close");
}
const endGame = () => {

}




// ==============================
//     Create Game Play
// ==============================
class GamePlay {
  constructor(level, uscore, cscore, time) {
    this.level = level;
    this.uscore = uscore;
    this.cscore =  cscore;
    this.time = time;
  }
  updateStats() {
    currStatsCon.innerHTML = `
      <div class="stats"> Level: <span>${this.level}</span>
      </div>
      <div class="stats"> Player Score: <span>${this.uscore}</span>
      </div>
      <div class="stats"> Computer Score: <span>${this.cscore}</span>
      </div>
      <div class="stats"> Time: <span>${this.time}</span>
      </div>    
    `
  }
  // levelUp() {
  //   if() {

  //     this.level++;
  //     this.updateStats();
  //   }
  // }
  timeUp() {
    setInterval(()=> {
      this.time++;
      this.updateStats();
    }, 5000);
    if(time === 5) {
      console.log("Time is up! You lose!")
    }
  }
  playerScore() {

  }
}




// ==============================
//   Data Source
// ==============================
const dataSrc = [
  ['undefined', 'let x = no variable assigned;'],
  ['function', 'statement that performs an action'],
  ['local scope', '{ let local = works in this code block only}'],
  ['class constructor', 'class MemJs { constructor(learn){this.learn = learn}']
  ['for loop', 'for(i = 0; i < 10; i++){ console.log("this message")}'],
  ['while loop', 'let i = 0; while(i < 10){console.log("this message") i++;}']
  ['array', 'const x = [];'],
  ['object', 'const x = {}'],
  ['function', 'const x = () => { };']
]



// ==============================
//     Create Computer Variables
// ==============================




// ==============================
//      Functions/logic/Game Play
// ==============================
mBoard.addEventListener("click", (e) => {
  const random = Math.floor(Math.random()*dataSrc.length);
  // let userInput = dataSrc[random];
  // e.target.textContent = userInput;
  console.log(dataSrc[random]);
});






// ==============================
//     Event Listeners
// ==============================

playGame.addEventListener("click", toggleModal);
nGameBtn.addEventListener("click", toggleModal);
// rLevelBtn.addEventListener("click",);
//  eGameBtn.addEventListener("click",);