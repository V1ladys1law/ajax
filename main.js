let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

btn.onclick = btn2.onclick = function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", this.value);
  xhr.onload = function () {
    document.write("<p>" + xhr.responseText + "</p>");
  };
  xhr.send();
};