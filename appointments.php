<?php
	header ("Location: index.html");
	$name = $_POST['appointmentsName'];
	$emailAddress = $_POST['appointmentsEmail'];
	$phone = $_POST['appointmentsPhone'];
	$address = $_POST['appointmentsAddress'];
	$city = $_POST['appointmentsCity'];
	$subdiv = $_POST['appointmentsSubdivision'];
	$td = $_POST['appointmentsTd'];
	$message = $_POST['appointmentsComments'];
	
	$email_to = "allphaseblinds@gmail.com";
	$email_from = "All-Phase Contact Form <CustomerService@allphaseblinds.com>";
	$email_subject = "Message from online contact form";
	$email_body = "From: $name\n" .
				  "Phone: $phone\n" .
				  "Email: $emailAddress\n\n" .
				  "Address:\n" .
				  "$address\n" .
				  "$city, $subdiv\n\n" .
				  "Preferred time and date:\n" .
				  "$td\n\n" .
				   "$message";	
	$email_headers = "From: $email_from \r\n" .
				"Reply-To: $emailAddress \r\n";
	
	mail($email_to, $email_subject, $email_body, $email_headers);
	exit;
?>