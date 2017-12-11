//define player1
const player1 = document.getElementById('player1');
//definer player2
const player2 = document.getElementById('player2');
//define player1 position
let player1Pos = 0;
//define player2 position
let player2Pos = 0;
//define finishLine position
const finishLinePos = window.screen.width - 300;

//anounce function
    //if player1 postion >= finishLinePos
        //alert player1 won
    //else if player2 postion >= finishLinePos
        //alert player2 won
const announceWinner = () => {
    if (player1Pos >= finishLinePos) {
      alert("Player 1 is the winner!");
    } else if (player2Pos >= finishLinePos) {
      alert("Player 2 is the winner!");
    }
  }

//move function
  //keypress EventListener
        // if key === 'z'
          //player1 position = current postition+ 15
          //player1.setAttribute for moving right
        // if key === 'p'
          //player2 position = current position+ 15
          //player2.setAttribute for moving right
const movePlayers = () => {
  document.addEventListener('keypress', (event) => {
      if (event.key === 'z') {
        player1Pos = player1Pos + 15;
        player1.setAttribute("style", "position: relative; left: " + player1Pos + "px");
        announceWinner();
      } else if (event.key === 'p') {
        player2Pos = player2Pos + 15;
        player2.setAttribute("style", "position: relative; left: " + player2Pos + "px");
        announceWinner();
      }
    });
  }

movePlayers();
