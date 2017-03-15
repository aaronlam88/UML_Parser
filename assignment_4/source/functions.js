// addEventListener("keyup", function () {
//     showCon();
// });
//
// addEventListener("keyup", function () {
//     passwordFind();
// });
//
// addEventListener("keyup", function () {
//     chkPasswordStrength();
// });

function allFunction(){
    // var pass = document.getElementById("password").value;
    showCon();
    passwordFind();
    chkPasswordStrength();
}

function passwordFind(){
  var pass = document.getElementById("password").value;
  var tip = document.getElementById("password-strength-text");

  if(pass.length == 0){
      document.getElementById("password-strength-meter").value = 0;
      tip.innerHTML = " ";
  }
  else if (pass.length < 4) {
  document.getElementById("password-strength-meter").value = 3;
  tip.innerHTML = "Weak";
  }
  else if (pass.length <= 8) {
  document.getElementById("password-strength-meter").value = 6;
  tip.innerHTML = "Medium";
  }
  else if(pass.length <= 12){
  document.getElementById("password-strength-meter").value = 10;
  tip.innerHTML = "Strong";
  }
  else {
  document.getElementById("password-strength-meter").value = 15;
  tip.innerHTML = "Very strong";
  }
}

function showCon() {
        document.getElementById('message0').style.visibility='visible';
      }

function chkPasswordStrength()
 {
   document.getElementById('check6').style.visibility='visible';

   var pword = document.getElementById("password").value;
   var meter = document.getElementById("password-strength-text");
   var uID = document.getElementById("userID").value;

   //if val has at least one uppercase characters
   if ( pword.match(/[A-Z]/) ) {document.getElementById('check1').style.visibility='visible';}

   //if val has at least one lowercase characters
   if ( pword.match(/[a-z]/) ) {document.getElementById('check2').style.visibility='visible';}

   // if val has at least 8 characters
   if (pword.length > 7) document.getElementById('check4').style.visibility='visible';

   //if val has at least one number
   if (pword.match(/[0-9]/))  document.getElementById('check3').style.visibility='visible';

   //if val has at least one special caracther
   if ( pword.match(/.[!,@,#,$,%]/) ) document.getElementById('check5').style.visibility='visible';

   if (pword == uID) document.getElementById('check6').style.visibility='hidden';
   else{}
}

// function showPic() {
//         document.getElementById('my').style.visibility='visible';
//       }
//
// function hidePic() {
//         document.getElementById('my').style.visibility='hidden';
//       }
