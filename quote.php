<?php
	header ("Location: index.html");
	$name = $_POST['quoteName'];
	$emailAddress = $_POST['quoteEmail'];
	$phone = $_POST['quotePhone'];
	$message = $_POST['quoteComments'];
	
	$email_to = "allphaseblinds@gmail.com";
	$email_from = "All-Phase Contact Form <CustomerService@allphaseblinds.com>";
	$email_subject = "Quote Request";
	$email_body = "From: $name\n" .
				   "Email: $emailAddress\n" .
				   "Phone: $phone\n\n" .
				   "$message";	
	$email_headers = "From: $email_from \r\n" .
				"Reply-To: $emailAddress \r\n";
	
	mail($email_to, $email_subject, $email_body, $email_headers);
	exit;
?>