readfile();
function readfile(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    var fileContents = this.responseText;
 //   alert(fileContents);
    const point = JSON.parse(fileContents);
    
  alert("point: " + point.point.x +", "+ point.point.y);
  }
  xhttp.open("GET","points.json");
  xhttp.send();
  alert("in code");
}