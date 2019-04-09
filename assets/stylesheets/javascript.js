
function myFunction() {
  var x = document.getElementById("navigationbar");
  if (x.className === "topnav"){
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
