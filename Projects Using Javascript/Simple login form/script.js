/*ondblclick==>on double click //onmouseenter() //onmouseleave()*/
function submitdata() {
  var a = document.getElementById("password");
  var b = document.getElementById("email");
  var c = document.getElementById("errpassword");
  var d = document.getElementById("main");

  if (a.value == "Chirag3098" && b.value == "sc494802@gmail.com") {
    d.innerHTML = "LOGIN Succsecfully😍";
    c.innerHTML = "";
  } else {
    c.innerHTML = "PassWord/E-mail Invalid !!";
    c.style.color = "red";
    a.style.border = "1px solid red";
  }
}
function passwordsh() {
  var a = document.getElementById("password");
  var b = document.getElementById("passwordshowhide");
  if (a.type == "text") {
    a.type = "password";
    b.innerHTML = "show";
  } else {
    a.type = "text";
    b.innerHTML = "hide";
  }
}

// if (a.innerHTML != "Chirag3098") {
//   a.style.border = "1px solid red";
//   document.getElementById("errpassword").innerHTML = "Invalid Password !!";
//   document.getElementById("donepassword").innerHTML = " ";
//   document.getElementById("errpassword").style.color = "red";
// } else if (a.innerHTML == "Chirag3098") {
//   document.write("LOGIN Succsecfully😍");
// } else {
//   a.value = "";
//   document.getElementById("errpassword").innerHTML = " ";
//   a.style.border = "";
