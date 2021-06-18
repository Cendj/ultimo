function validateForm() {
    //Validate Name//
    var a = document.forms["form"]["EnterName"].value;
    if (a == "") {
      alert("Name must be completed");
      return false;
    }
  //Validate phone number//
    var b = document.forms["form"]["EnterPhone"].value;
    if (b == "") {
      alert("Phone number must be completed");
      return false;
    }
  
  //Validate Email//
    var c = document.forms["form"]["EnterEmail"].value;
    if (c == "") {
      alert("Email must be completed");
      return false;
    }
  
  //Thank you//
    else {
      alert("Thank you for enquiring at Ultimo");
      return true;
    }
  }
  
  
  