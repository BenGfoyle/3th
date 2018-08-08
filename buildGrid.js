function buildGrid(size){//this function generates a grid of size relative to the game
  for(var i = 1; i<= size; i++){
    var newBox = document.createElement("div");
    newBox.id = i;
    newBox.class = "square";
    newBox.class = "grid-item";
    newBox.onclick = makeMove(this.id);
    document.getElementById("gameSpace").add(newBox);
  }
}
