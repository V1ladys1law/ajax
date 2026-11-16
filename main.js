let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

function show(obj) {
  let text = "";
  Object.keys(obj).sort().forEach(function (key) {
    if (typeof obj[key] === "object") {
      text += key + ": " + show(obj[key]) + " ";
    } else {
      text += key + ": " + obj[key] + "; ";
    }
  });
  return text;
}

btn.onclick = btn2.onclick = function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", this.value);
  xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    data.forEach(function (item) {
      document.write("<p>" + show(item) + "</p>");
    });
  };
  xhr.send();
};