//define player1
const player1 = document.getElementById('player1');
//definer player2
const player2 = document.getElementById('player2');
//define player1 position
const player1Pos = ;
//define player2 position
const player2Pos = ;
//define final position
const finalPos = ;
//define player1 lane
const player1Lane = ;
//define player2 lane
const player2Lane = ;

//move function
  //keypress EventListener that triggers move function
    // for (start position = 0; position <= lane length; position++)
        // if key === 'z'
          //player1 position + 1px right
        // if key === 'p'
          //player2 position + 1px right
const movePlayer = () => {
  document.addEventListener('keypress', (event)) => {
    for (pos = 0; pos <=  ; pos++) {
      if (event.key === 'z') {

      } else if (event.key === 'p') {

      }else {
        player1Pos === player1Pos
        player2Pos === player2Pos
      }
    }
  }
}

//key up eventlistener that stops function
document.addEventListener('keyup', (event)) => {
  
}


//anounce function
    //if player1 postion = final postion && player2 position !== final position
        //alert player1 won
    //else if player2 postion = final postion && player1 position !== final position
        //alert player2 won
const announceWinner = () {
    if (player1Pos === finalPos && player2Pos !== finalPos) {
      alert('Player 1 is the winner!')
    } else if (player2Pos === finalPos && player1Pos !== finalPos) {
      alert('Player 2 is the winner!')
    }
}
