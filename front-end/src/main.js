// import logged from "./logged";
const nameInput = document.getElementById("user-name");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  if (nameInput.value !== "" && password.value !== "") {
    const req = new XMLHttpRequest();
    // req.open("POST", " http://localhost/index.php"); //php code
    req.open("POST", `http://localhost:3002/data`);
    const data = JSON.stringify({
      name: nameInput.value,
      pass: password.value,
    });
    req.setRequestHeader("Content-Type", "application/json");
    req.send(data);

    req.onload = (e) => {
      if (req.status === 200) {
        console.log("done");

        const prev = window.location.href;
        // window.location.href = `${prev}logged`;
        window.location.href = `http://localhost:5174/logged`;
        console.log(`${prev}logged`);
        // logged();
      } else {
        console.error(`Error: ${req.status} ${req.statusText}`);
      }
      console.log();
    };
    nameInput.value = "";
    password.value = "";
  }
});
