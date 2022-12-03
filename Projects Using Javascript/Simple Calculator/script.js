var tempvalue = null;
var oprationSelected = null;
function btnclicked(para) {
  var IO = document.getElementById("InputOutput");
  if (
    para.value == "+" ||
    para.value == "-" ||
    para.value == "*" ||
    para.value == "/"
  ) {
    tempvalue = IO.value;
    IO.value = "";
    oprationSelected = para.value;
  } else if (para.value == "=") {
    if (oprationSelected != null && tempvalue != null) {
      var ans = 0;
      if (oprationSelected == "+") {
        ans = parseInt(tempvalue) + parseInt(IO.value);
      } else if (oprationSelected == "-") {
        ans = parseInt(tempvalue) - parseInt(IO.value);
      } else if (oprationSelected == "*") {
        ans = parseInt(tempvalue) * parseInt(IO.value);
      } else if (oprationSelected == "/") {
        ans = parseInt(tempvalue) / parseInt(IO.value);
      }
      IO.value = ans;
      oprationSelected = null;
      tempvalue = null;
    }
  } else {
    IO.value = IO.value + para.value;
  }
}
