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
// display you lose message if time runs out 2nd time

// ==============================
//     Cached Dom Notes
// ==============================
// const mBoard = document.querySelector('.mBoard');
const modal = document.querySelector('.modal');
// const modal2 = document.querySelector(".modal2");
const playGame = document.querySelector('.play-game');
// const nGameBtn = document.querySelector("#ngame");
// const rLevelBtn = document.querySelector("#rlevel");
// const eGameBtn = document.querySelector("#egame");
const tiles = document.querySelectorAll('.tile');
const Msg = document.querySelector('.Msg');
const currStatsCon = document.querySelector('.stats');

// ==============================
//     Create Game Board
// ==============================

// THIS WORKS CREATES GAME BOARD
// let num = 9;

// for (let i = 1; i < num; i++) {
//   let div = document.createElement("div");
//   div.classList.add("tiles");
//   mBoard.appendChild(div);
// }

// ==============================
//     Create Game Play
// ==============================
class GamePlay {
  constructor (level, uscore, cscore, time) {
    this.level = level;
    this.uscore = uscore;
    this.cscore = cscore;
    this.time = time;
  }

  updateStats () {
    currStatsCon.innerHTML = `
      <div class="Level"> Level: <span>${this.level}</span>
      </div>
      <div class="uScore"> Player 1 Score: <span>${this.uscore}</span>
      </div>
      <div class="cScore"> Player 2 Score: <span>${this.cscore}</span>
      </div>
      <div class="time"> Time: <span>${this.time}</span>
      </div>    
    `;
  }

  timeUp () {
    setInterval(() => {
      this.time--;
      this.updateStats();
      if (this.time === 0) {
        Msg.innerHTML = '<div class=\'Msg\'><span>Time is up! You lose!!</span></div>';
        console.log('Time is up! You lose!');
      }
    }, 5000);
  }

  player1Score () {
    this.uscore++;
    this.updateStats();
  }

  player2Score () {
    this.cscore++;
    this.updateStats();
  }
}

// ==============================
//  Global Variables
// ==============================

const Stats = new GamePlay(0, 0, 0, 20);
// let player1 = uscore;
// let player2 = cscore;
// ==============================
//   Create Modal/EventLisFunc
// ==============================

// THIS WORKS TOGGLES MODAL BEGINBTN AND NEWGAME BTN
const toggleModal = () => {
  modal.classList.toggle('close');
  Stats.updateStats();
};
// // THIS DOES NOT WORK. ONLY POPS UP IN THE BIGINNING DOES NOT
// // CLICK OFF.
// const toggleModal2 = () => {
//   // Maybe a modal as well saying thank you for Playing
//   modal2.classList.toggle("open");
// }

// ==============================
//   Data Source
// ==============================
// const dataSrc = [ // go with object look up methods.
//   ['undefined', 'let x = ;'],
//   ['function1', 'function x { };'],
//   ['object1', '{ }'],
//   ['array1', '[ ]']
//   ['for loop', 'for(i = 0; i < 10; i++){}'],
//   ['while loop', 'let i = 0; while(i < 10){i++;}']
//   ['array2', 'const x = [];'],
//   ['object2', 'const x = {}'],
//   ['function2', 'const x = () => { };']
// ]

// // changed to object data source
// const dataSrc = {
//     gtUndefined: "let x = ;",
//     function1: "function x {};",
//     arrowFunction: "const x = () => {};",
//     object1: "{}",
//     object2: "const x = {}",
//     array1: "[]",
//     array2: "const x = [];",
//     forLoop: "for(i = 0; i < 10; i++ {})",
//     whileLoop: "let i = 0; while(i < 10) {i++}"
// };
const dataSrc = {
  tile1: {
    displayText: 'undefined',
    pair: 1
  },
  tile2: {
    displayText: 'let x = ;',
    pair: 1
  },
  tile3: {
    displayText: 'object1',
    pair: 2
  },
  tile4: {
    displayText: 'let x = {};',
    pair: 2
  },
  tile5: {
    displayText: 'let x = [];',
    pair: 3
  },
  tile6: {
    displayText: 'array1',
    pair: 3
  },
  tile7: {
    displayText: 'forLoop',
    pair: 4
  },
  tile8: {
    displayText: 'for(i = 0; i < 10; i++ {});',
    pair: 4
  },
  tile9: {
    displayText: 'let i = 0; while(i < 10) {i++};',
    pair: 5
  },
  tile10: {
    displayText: 'whileLoop',
    pair: 5

  }
};

// ==============================
//     Create Computer Variables
// ==============================

// ==============================
//      Functions/logic/Game Play
// ==============================

const gameTime = () => Stats.timeUp();
const player1Score = () => Stats.player1Score();
const player2Score = () => Stats.player2Score();

// DECIDED TO LEAVE RANDOM OUT FOR NOW
// loop through random * element and sort. look up shuffle array
// const random = Math.floor(Math.random()*dataSrc.length);
// e.target.textContent = userInput;
// if(random === random) {
//   // mBoard.removeEventListener("click",)
// }
// let userInput = dataSrc[random];
// e.target.textContent = userInput;

// Figured out how to split key value pairs.

// for (const [key, value] of Object.entries(dataSrc)) {
//   mBoard.addEventListener("click", (e) => {
//   console.log(`${(key)}`);
//   // console.log(`${value}`);
// });
// }
// const keys = Object.keys(dataSrc);

// 1st click click counter outside of this scope increment inside clickcounter++
// 2nd click check for match, if match update score then reset counter

const player1MatchArr = [];
const player2MatchArr = [];
let selectionArr = [];
let turn = false;

// console.log(tile);
for (const tile of tiles) {
  // when box is clicked
  tile.addEventListener('click', (e) => {
    // this starts the game timer on first click
    gameTime();
    // if this tile is not in selection array and
    // if tile is not already matched in player1 array and
    // if tile is not already matched in player2 array
    if (!selectionArr.includes(dataSrc[tile.id]) &&
        !player1MatchArr.includes(dataSrc[tile.id]) &&
        !player2MatchArr.includes(dataSrc[tile.id])) {
      // display the content
      const word = dataSrc[tile.id].displayText;
      tile.textContent = word;
      // then push tile data into selection array
      selectionArr.push(dataSrc[tile.id]);
      // if there are at least two tiles in the selection array
      if (selectionArr.length >= 2) {
        // then check match between the selected tiles
        // if selected tiles are a match
        if (selectionArr[0].pair === selectionArr[1].pair) {
          // then push whole selection array into match array that corresponds with current player
          // empty the selection array
          if (turn === false) {
            // pop and element from the selection array and push that element into the player1match array
            // until the selection array is empty
            while (selectionArr.length !== 0) {
              player1MatchArr.push(selectionArr.pop());
              this.uscore = player1MatchArr.length;
              console.log(this.uscore);
              player1Score();
            }
          } else {
            // pop and element from the selection array and push that element into the player1match array
            // until the selection array is empty
            while (selectionArr.length !== 0) {
              player2MatchArr.push(selectionArr.pop());
              this.cscore = player2MatchArr.length;
              console.log(this.cscore);
              player2Score();
            }
          }
          // toggle turn
          turn = !turn;
          // else empty the selection array
        } else {
          selectionArr = [];
          turn = !turn;
        }
        // end if
      }
    // end if
    }
    if ((player1MatchArr.length + player2MatchArr.length) === 10) {
      if (player1MatchArr.length > player2MatchArr.length) {
        console.log('Player One Wins!');
        Msg.innerHTML = '<div class=\'Msg\'><span>Player One Wins!</span></div>';
      } else if (player1MatchArr.length < player2MatchArr.length) {
        console.log('Player Two Wins!');
        Msg.innerHTML = '<div class=\'Msg\'><span>Player Two Wins!</span></div>';
      } else {
        Msg.innerHTML = '<div class=\'Msg\'><span>It\'s a tie!</span></div>';
        console.log("It's a tie!");
      }
    }

    // console.log('selection', selectionArr);
    // console.log('player1', player1MatchArr);
    // console.log('player2', player2MatchArr);
  });
}
// tasks
// check if there is a winner
// if all tiles or total points/elements in a array - win condition
// go through selected tiles and reset tiles in selection array.
// ==============================
//     Event Listeners
// ==============================

playGame.addEventListener('click', toggleModal);

// nGameBtn.addEventListener("click", toggleModal);
// // rLevelBtn.addEventListener("click",);
// eGameBtn.addEventListener("click", toggleModal2);
