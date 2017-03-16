<?php
// echo '<p>Hello World</p >';

// $servername = "localhost";
// $username = "lei";
// $password = "lz2343";

// // Create connection
// $conn = new mysqli($servername, $username, $password);

// // Check connection
// if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
// }
// echo 'Connected successfully';

// Fetching Values From URL
$name2 = $_POST['name1'];
$password2 = $_POST['password1'];
$verifyPassword2 = $_POST['verifyPassword1'];
$email2 = $_POST['email1'];
$verifyEmail2 = $_POST['verifyEmail1'];
$securityAnswer12 = $_POST['securityAnswer11'];
$securityAnswer22 = $_POST['securityAnswer21'];
$cmobile2 = $_POST['mobile1'];
$address2 = $_POST['address1'];
$interestedArea2 = $_POST['interestedArea1'];

$servername = "localhost";
$username = "lei";
$password = "lz2343";



$connection = mysql_connect("localhost", "lei", "lz2343"); // Establishing Connection with Server..
$db = mysql_select_db("userInfo", $connection); // Selecting Database
if (isset($_POST['name1'])) {
$query = mysql_query("insert into form_element(username, password, verifyPassword, email, VerifyEmail, securityAnswer1,
securityAnswer2, mobile, address, interestedArea) values
('$name2', '$password2', '$verifyPassword2','$email2', '$verifyEmail2', '$securityAnswer12',
'$securityAnswer22','$cmobile2','$address2','$interestedArea2')"); //Insert Query
echo "Form Submitted succesfully";
}
mysql_close($connection); // Connection Closed
?>
