  var count = 0;
  document.getElementById("countButton").onclick = function() {
    count++;
    document.getElementById("displayCount").innerHTML = count;
  }