function validation() {
  let name = document.getElementById("input1").value;
  let pw = document.getElementById("input2").value;
  if (name == "" || pw == "") {
    return;
  }
  data = JSON.parse(localStorage.getItem(name));
  if (data == null) {
    alert("Invalid Username");
    return;
  }
  if (pw == data["pw"]) {
    let current_user_data = { name: name, email: data["email"] };
    localStorage.setItem(
      "current_user_data",
      JSON.stringify(current_user_data)
    );
    location.replace("../index.html");
  } else {
    alert("Wrong Password!");
  }
}
