var turnCount = 0;//this tracks the current turn

function makeMove(position){//this determines what teams turn it is and allows moves to be made
  if(document.getElementById(position).innerHTML == ""){
    if(turnCount%2 == 0){
      document.getElementById(position).innerHTML = "x";
    }
    else{
      document.getElementById(position).innerHTML = "o";
    }
    turnCount++;
  }
}
