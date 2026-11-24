let btn = document.getElementById("btn");

btn.onclick = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      users.forEach(user => {
        document.write("<p>" + "<b>" + user.name + "</b>" + "</p>");
        posts.forEach(post => {
          if (post.userId === user.id) {
            document.write("<p>" + post.title + "</p>");
          }
        });
      });
    });
  });
};