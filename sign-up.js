let p1 = document.getElementById("password");
let p2 = document.getElementById("confirm_password");

let check = function() {
    if (p1.value === p2.value) 
    {
      p1.style.color = 'green';
      p2.style.color = 'green';
      p1.setCustomValidity("");
      p2.setCustomValidity("");

    } else {
      p1.style.color = 'red';
      p2.style.color = 'red';
      p1.setCustomValidity("Passwwords are not identical");
      p2.setCustomValidity("Passwwords are not identical");

    }
  }


  document.addEventListener("keyup", e => {

    check();
  }); 
