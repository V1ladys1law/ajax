let btn = document.getElementById("btn");
let link = document.getElementById("link");

btn.onclick = function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", link.textContent);
  xhr.onload = function () {
    console.log(JSON.parse(xhr.responseText));
  };
  xhr.send();
};