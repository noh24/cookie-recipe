//user interface logic
//declare function that changes background color randomly
function randomBgColor() {
  document.querySelector("body").style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 225) + ")";
}

window.onload = function() {
  let body = document.querySelector("body");

  let lightButton = document.querySelector(".light-mode");
  lightButton.onclick = function() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }

  let darkButton = document.querySelector(".dark-mode");
  darkButton.onclick = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }

  let defaultFontSize = document.querySelector(".default-fontSize");
  defaultFontSize.onclick = function() {
    body.style.fontSize = "16px";
  }

  let increaseFontSize = document.querySelector(".increase-fontSize");
  increaseFontSize.onclick = function() {
    body.style.fontSize = "20px";
  }


  //add event listener for mouse over event to change background and color
  // body.addEventListener("mouseover", function() {
  //   body.style.color = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
  // });

  body.addEventListener("mouseover", randomBgColor)
}
