$('#myform').submit(function(){
 return false;
});

$('#insert').click(function(){
 $.post(
 $('#myform').attr('action'),
 $('#myform :input').serializeArray(),
 function(result){
 $('#result').html(result);
 }
 );
});



// function myFunction() {
// 	var name = document.getElementById("userID").value;
// 	var password = document.getElementById("password").value;
// 	var verifyPassword = document.getElementById("verifyPassword").value;
// 	var email = document.getElementById("email").value;
// 	var verifyEmail = document.getElementById("verifyEmail").value;
// 	var securityAnswer1 = document.getElementById("securityAnswer1").value;
// 	var securityAnswer2 = document.getElementById("securityAnswer2").value;
// 	var mobile = document.getElementById("mobile").value;
// 	var address = document.getElementById("address").value;
// 	var interestedArea = document.getElementById("inte +restedArea").value;
//
//
// 	// Returns successful data submission message when the entered information is stored in database.
// 	var dataString = 'name1=' + name + '&password1=' + password + '&verifyPassword1=' + verifyPassword +
// 	'&email1=' + email + '&verifyEmail1=' + verifyEmail + '&securityAnswer11=' + securityAnswer1 +
// 	'&securityAnswer21=' + securityAnswer2 + '&mobile1=' + mobile + '&address1=' + address +
// 	'interestedArea1=' + interestedArea;
//
// 	if (name == '' || password == '' || verifyPassword == '' || email == '' ||
// 	    verifyEmail == '' || securityAnswer1 == '' || mobile == '') {
// 		alert("Please Fill All Fields");
// 	} else {
// 	// AJAX code to submit form.
// 		$.ajax({
// 			type: "POST",
// 			url: "Registration.php",
// 			data: dataString,
// 			cache: false,
// 			success: function(html) {
// 				alert(html);
// 			}
// 		});
// 	}
// 		return false;
// }
