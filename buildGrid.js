function buildGrid(size){//this function generates a grid of size relative to the game
  var table = document.createElement("table");
  table.className = "tableOutside";
  for (var i = 1; i <= size; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j <= size; j++) {
        var td = document.createElement('td');
        td.className = "tableInside";
        td.id = i;
        td.value = "";
        td.onClick = "makeMove(td.id)";
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
}
