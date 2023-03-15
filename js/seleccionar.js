function myFunction(x) {
    var checkBox = document.getElementById("myCheck"+x);
    var text = document.getElementById("text"+x);
    if (checkBox.checked == true) {
       text.style.display = "block";
    }
    else {
       text.style.display = "none";
    }
  }