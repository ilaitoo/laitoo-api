const usersDiv = document.getElementById("users");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
btn.addEventListener("click", hi);
function hi() {
  console.log("hello");
  fetch("http://localhost:3002/users")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const users = res;
      usersDiv.firstElementChild.innerHTML = `
          <tr>
                <th>id</th>
                <th>name</th>
                <th>password</th>
              </tr>
          `;
      res.map((e) => {
        usersDiv.firstElementChild.innerHTML += `<tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.password}</td>
              </tr>`;
      });
    });
  btn.removeEventListener("click", hi);
}
