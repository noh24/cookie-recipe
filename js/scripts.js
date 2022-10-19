// window.onload = function() {
//   let h1 = document.querySelector("h1");
//   h1.onmouseover = function() {
//     alert("I'm a heading");
//   };

// let p = document.querySelector("p");
//   p.onmouseover = function() {
//     document.querySelector("p>em").innerText = "I've changed!";
//   };

// let img = document.querySelector("img");
//   img.onmouseover = function() {
//     img.style.width = "700px";
//   };
// }

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
}