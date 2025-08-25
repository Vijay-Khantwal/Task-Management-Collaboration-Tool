function remove() {
  console.log(2);
  document.getElementById("pp").style.display = "none";
  document.getElementById("blur-div").style.display = "none";
  document.getElementById("body1").style.overflow = "auto";
  document.getElementById("input-prompt-1").style.display = "none";
  document.getElementById("input-prompt-2").style.display = "none";
}
function blur_div() {
  document.getElementById("blur-div").style.display = "block";
}
function popup() {
  console.log(4);
  document.getElementById("pp").style.display = "block";
  document.getElementById("blur-div").style.display = "block";
  document.getElementById("body1").style.overflow = "hidden";
}
function addmessage() {
  console.log(5);
  let message = document.getElementById("message").value;
  if (message == "") {
    return;
  }
  let chat_messages = JSON.parse(localStorage.getItem("chat_messages"));
  chat_messages[chat_messages.length] = message;
  localStorage.setItem("chat_messages", JSON.stringify(chat_messages));
  document.getElementById("message").value = "";
  location.reload();
  document.getElementById("message").focus();
}

function input_prompt_1() {
  document.getElementById("input-prompt-1").style.display = "block";
  document.getElementById("input1").focus();
  document.getElementById("body1").style.overflow = "hidden";
}
function input_prompt_2() {
  document.getElementById("input-prompt-2").style.display = "block";
  document.getElementById("input2").focus();
  document.getElementById("body1").style.overflow = "hidden";
}
function addtask1() {
  let task = document.getElementById("input1").value;
  let todo = JSON.parse(localStorage.getItem("todo"));
  if (task == "") {
    alert("Enter a task!");
  } else if (task.length < 10) {
    alert("Please specify the task in detail!");
  } else if (todo.includes(task)) {
    alert("Task already exists!");
  } else {
    todo[todo.length] = task;
    localStorage.setItem("todo", JSON.stringify(todo));
    document.getElementById("input-prompt-1").style.display = "none";
    document.getElementById("blur-div").style.display = "none";
    document.getElementById("input1").value = "";
    let hours = document.getElementById("input-hours").value;
    if (hours != "") {
      let minutes = 0;
      let seconds = 1;
      let time_value = [hours, minutes, seconds];
      localStorage.setItem("time_value", JSON.stringify(time_value));
    }
    location.reload();
  }
}
function addtask2() {
  let task = document.getElementById("input2").value;
  if (task == "") {
    alert("Enter a task!");
  } else if (task.length < 10) {
    alert("Please specify the task in detail!");
  } else if (todo.includes(task)) {
    alert("Task already exists!");
  } else {
    let done = JSON.parse(localStorage.getItem("done"));

    done[done.length] = task;
    localStorage.setItem("done", JSON.stringify(done));
    document.getElementById("input-prompt-2").style.display = "none";
    document.getElementById("blur-div").style.display = "none";
    document.getElementById("input2").value = "";
    location.reload();
  }
}
let store_data_name = JSON.parse(localStorage.getItem("name_data"));
let store_data_email = JSON.parse(localStorage.getItem("email_data"));
let time_value = JSON.parse(localStorage.getItem("time_value"));
let chat_messages = JSON.parse(localStorage.getItem("chat_messages"));
let current_user_data = JSON.parse(localStorage.getItem("current_user_data"));
if (chat_messages == null) {
  chat_messages = [];
  localStorage.setItem("chat_messages", JSON.stringify(chat_messages));
}
if (current_user_data == null) {
  current_user_data = [];
  localStorage.setItem("current_user_data", JSON.stringify(current_user_data));
}
if (store_data_name == null) {
  store_data_name = [];
  localStorage.setItem("name_data", JSON.stringify(store_data_name));
}
if (store_data_email == null) {
  store_data_email = [];
  localStorage.setItem("email_data", JSON.stringify(store_data_email));
}
if (time_value == null) {
  time_value = [];
  localStorage.setItem("time_value", JSON.stringify(time_value));
}

for (i = 0; i < store_data_email.length; i++) {
  div1 = document.createElement("div");
  div2 = document.createElement("div");
  div3 = document.createElement("a");
  div1.innerHTML = store_data_name[i];
  div2.innerHTML = "Manager";
  div3.innerHTML = store_data_email[i];
  div3.setAttribute("href", "mailto:" + store_data_email[i]);
  document.getElementById("grid-container").appendChild(div1);
  document.getElementById("grid-container").appendChild(div2);
  document.getElementById("grid-container").appendChild(div3);
}
document.getElementById("current_user_name").innerHTML = JSON.parse(
  localStorage.getItem("current_user_data")
)["name"];
document.getElementById("current_user_email").innerHTML = JSON.parse(
  localStorage.getItem("current_user_data")
)["email"];

let done = JSON.parse(localStorage.getItem("done"));
if (done == null) {
  done = [];
  localStorage.setItem("done", JSON.stringify(done));
}
for (i = 0; i < done.length; i++) {
  let div = document.createElement("div");
  div.innerHTML = "<i class='bx bxs-circle'></i> " + done[i];
  document.getElementById("task-area2").appendChild(div);
}
let chat_messages = JSON.parse(localStorage.getItem("chat_messages"));
let todo = JSON.parse(localStorage.getItem("todo"));
if (todo == null) {
  todo = [];
  localStorage.setItem("todo", JSON.stringify(todo));
}
if (chat_messages == null) {
  chat_messages = [];
  localStorage.setItem("chat_messages", JSON.stringify(chat_messages));
}
for (i = 0; i < chat_messages.length; i++) {
  let div = document.createElement("div");
  div.innerHTML = chat_messages[i];
  document.getElementById("chat-area").appendChild(div);
}
function shift_task(a) {
  console.log(5);
  console.log(typeof a.value);
  let done = JSON.parse(localStorage.getItem("done"));
  done[done.length] = a.value;
  localStorage.setItem("done", JSON.stringify(done));
  let todo = JSON.parse(localStorage.getItem("todo"));
  const index = todo.indexOf(a.value);
  todo.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todo));
  location.reload();
}
function set_timer(time_data) {
  let time_value = JSON.parse(localStorage.getItem("time_value"));
  hours = parseInt(time_value[0]);
  minutes = parseInt(time_value[1]);
  seconds = parseInt(time_value[2]);
  let target = document.getElementById("task1");

  let timer = setInterval(calculation, 1000);
  function calculation() {
    if (time_data == 0) {
      clearInterval(timer);
    } else {
      document.getElementById("stop_timer_button").style.display = "block";
    }
    if (todo.length == 0) {
      target.innerHTML = "Tasks Completed";
      clearInterval(timer);
    }
    seconds -= 1;
    if (minutes == 0 && hours > 0) {
      hours -= 1;
      minutes = 60;
    }
    if (seconds == 0 && minutes > 0) {
      minutes -= 1;
      seconds = 60;
    }
    time_value = [hours, minutes, seconds];
    localStorage.setItem("time_value", JSON.stringify(time_value));
    if (hours > 0) {
      target.innerHTML =
        "<i class='bx bxs-time'></i>&nbsp;" +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s";
    } else {
      if (minutes > 0) {
        target.innerHTML = minutes + "m" + seconds + "s";
      } else {
        if (seconds > 0) {
          target.innerHTML = seconds;
        } else {
          target.innerHTML = "Time's Up";
          document.getElementById("stop_timer_button").style.display="none"
          clearInterval(timer);
        }
      }
    }
  }
}
function stop_timer() {
  document.getElementById("task1").innerHTML="You Stopped The Timer"
  localStorage.setItem("time_value", JSON.stringify(["0", "0", "0"]));
  set_timer(0);
  document.getElementById("stop_timer_button").style.display = "none";
}
document.getElementById("message").focus();

for (i = 0; i < todo.length; i++) {
  let div = document.createElement("div");
  let button = document.createElement("button");
  button.innerHTML = "<i class='bx bxs-bookmark'></i> Done";
  button.setAttribute("value", todo[i]);
  button.setAttribute("onclick", "shift_task(this)");
  div.innerHTML = "<i class='bx bxs-circle'></i> " + todo[i];
  document.getElementById("task-area1").appendChild(div);
  document.getElementById("task-area1").appendChild(button);
}
if (todo.length != 0) {
  set_timer(time_value);
}

