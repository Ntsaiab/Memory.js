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

const Msg = document.querySelector('.Msg');
const modal = document.querySelector('.modal');
const tiles = document.querySelectorAll('.tile');
const playGame = document.querySelector('.play-game');
const currStatsCon = document.querySelector('.stats');

// ==============================
//   Create Stats for Game Play
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

  // time function works just need to make it stop at 0
  timeUp () {
    setInterval(() => {
      this.time--;
      if (this.time === 0) {
        Msg.innerHTML = '<div class=\'Msg\'><span>Time is up! You lose!!</span></div>';
        console.log('Time is up! You lose!');
      }
      this.updateStats();
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

  levelUp () {
    this.level++;
    this.updateStats();
  }
}

const Stats = new GamePlay(1, 0, 0, 20);

// ==============================
//   Create Modal
// ==============================

// THIS WORKS TOGGLES MODAL Start Learning BTN
const toggleModal = () => {
  modal.classList.toggle('close');
  Stats.updateStats();
};

// ==============================
//   Data Source
// ==============================

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

  },
  tile11: {
    displayText: '&&',
    pair: 6
  },
  tile12: {
    displayText: 'AND logical operator',
    pair: 6

  }
};

// ==============================
//   Functions/logic/Game Play
// ==============================
// assigns game stat methods to a variable so it
// can be used/called else where in the code
const gameTime = () => Stats.timeUp();
const levelUp = () => Stats.levelUp();
const player1Score = () => Stats.player1Score();
const player2Score = () => Stats.player2Score();

let turn = false;
let selectionArr = [];
const player1MatchArr = [];
const player2MatchArr = [];

for (const tile of tiles) {
  // when box is clicked
  tile.addEventListener('click', (e) => {
    // this starts the game timer and stats on first click
    gameTime();
    // if this tile is not in selection array and
    // if tile is not already matched in player1 array and
    // if tile is not already matched in player2 array
    if (!selectionArr.includes(dataSrc[tile.id]) &&
      !player1MatchArr.includes(dataSrc[tile.id]) &&
      !player2MatchArr.includes(dataSrc[tile.id])) {
      // display the content
      tile.textContent = dataSrc[tile.id].displayText;
      // then push tile data into selection array
      selectionArr.push(dataSrc[tile.id]);
      // if there are at least two tiles in the selection array
      if (selectionArr.length >= 2) {
        // then check match between the selected tiles
        // if selected tiles are a match
        if (selectionArr[0].pair === selectionArr[1].pair) {
          // then push whole selection array into match array
          // that corresponds with current player
          // empty the selection array
          if (turn === false) {
            // pop and element from the selection array and
            // push that element into the player1match array
            // until the selection array is empty
            while (selectionArr.length !== 0) {
              player1MatchArr.push(selectionArr.pop());
              player1Score();
            }
          } else {
            // pop and element from the selection array and
            // push that element into the player1match array
            // until the selection array is empty
            while (selectionArr.length !== 0) {
              player2MatchArr.push(selectionArr.pop());
              player2Score();
            }
          }
          // toggle turn
          turn = !turn;
          // else empty the selection array
          // *go through selected tiles and
          // reset tiles in selection array*
        } else {
          selectionArr = [];
          turn = !turn;
        }
        // end if
      }
      // end if
    }
    // check if there is a winner
    // if all tiles or total points/elements in a array - win condition
    if ((player1MatchArr.length + player2MatchArr.length) === 12) {
      if (player1MatchArr.length > player2MatchArr.length) {
        Msg.innerHTML = '<div class=\'Msg\'><span>Player One Wins!</span></div>';
      } else if (player1MatchArr.length < player2MatchArr.length) {
        Msg.innerHTML = '<div class=\'Msg\'><span>Player Two Wins!</span></div>';
      } else {
        Msg.innerHTML = '<div class=\'Msg\'><span>It\'s a tie!</span></div>';
      }
      levelUp();
    }
  });
}

// ==============================
//     Event Listeners
// ==============================

playGame.addEventListener('click', toggleModal);
