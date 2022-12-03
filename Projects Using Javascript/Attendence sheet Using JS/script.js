var temp = document.getElementsByTagName("input");
var temp2 = document.getElementById("ans");

for (i = 101; i <= 166; i++) {
  document.write(
    "<input type='checkbox' value=" + i + " onclick=ans()>" + i + "</br>"
  );
}
for (i = 201; i <= 286; i++) {
  document.write(
    "<input type='checkbox' value=" + i + " onclick=ans()>" + i + "</br>"
  );
}
for (i = 301; i <= 366; i++) {
  document.write(
    "<input type='checkbox' value=" + i + " onclick=ans()>" + i + "</br>"
  );
}

function checkall() {
  for (i = 0; i < temp.length; i++) {
    console.log(temp[i]);
    temp[i].checked = true;
  }
}

function uncheckall() {
  for (i = 0; i < temp.length; i++) {
    console.log(temp[i]);
    temp[i].checked = false;
  }
}
function ans() {
  temp2.innerHTML = "";
  for (i = 0; i < temp.length; i++) {
    if (temp[i].checked == false) {
      temp2.innerHTML += temp[i].value + ", ";
    }
  }
  temp2.innerHTML = temp2.innerHTML.substring(0, temp2.innerHTML.length - 2);
}
