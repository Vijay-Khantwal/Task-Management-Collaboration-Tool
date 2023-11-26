function set_details() {
  console.log(4);
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let pw = document.getElementById("input-pw").value;
  if (name == "" || email == "" || pw == "") {
    return;
  }
  name_data = JSON.parse(localStorage.getItem("name_data"));
  email_data = JSON.parse(localStorage.getItem("email_data"));
  for (i = 0; i < name_data.length; i++) {
    if (name_data[i] == name || email_data[i] == email) {
      alert("Username/emial already exists!!");
      return;
    }
  }
  name_data[name_data.length] = name;
  email_data[email_data.length] = email;
  localStorage.setItem("name_data", JSON.stringify(name_data));
  localStorage.setItem("email_data", JSON.stringify(email_data));
  let data = { name: name, email: email, pw: pw };
  localStorage.setItem(name, JSON.stringify(data));
  location.href = "LogIn.html";
}
