<?php
	session_start();
	if($_POST['name']=='')
	{
		echo "Name field is required";
	}
	elseif($_POST['email']==''){
		echo "Email field is required";
	}
        elseif(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
		echo "Not valid email";
	}
	elseif($_POST['subject']==''){
		echo "Subject field is required";
	}
	elseif($_POST['message']==''){
		echo "Message field is required";
	}
	else{
	try
	{
					//error_reporting(E_STRICT);
		require_once('phpgmailer/class.phpmailer.php');
		$mail             = new PHPMailer();
					$mail->IsSMTP(); // telling the class to use SMTP
					//$mail->Host       = "smtp.gmail.com"; // SMTP server
					//$mail->SMTPDebug  = ;                     // enables SMTP debug information (for testing)
			                                           // 1 = errors and messages
			                                           // 2 = messages only
					$mail->SMTPAuth   = true;  
					$mail->SMTPSecure = "ssl";                // enable SMTP authentication
					$mail->Host       = "smtp.gmail.com"; // sets the SMTP server
					$mail->Port       = 465;                    // set the SMTP port for the GMAIL server
					$mail->Username   = "admin@enzystudios.com"; // SMTP account username
					$mail->Password   = "qwas@123";        // SMTP account password
					$mail->SetFrom('contact@enzystudios.com', 'ENZY Contact');
					$mail->AddReplyTo($_POST['email'],$_POST['name']);
					$mail->Subject    = 'Contact for ENZY Studios from '.$_POST['name'];	

$message="Name: ".$_POST['name']."<br/>".
"Email: ".$_POST['email']."<br/>".
"Subject: ".$_POST['subject']."<br/>".
"Message: ".$_POST['message']."<br/>";
					$mail->MsgHTML($message);
					$mail->AddAddress('contact@enzystudios.com','ENZY Contact');
					$mail->Send();
				}
				catch (phpmailerException $e) {
					//echo $e->errorMessage();
					//header('Location: http://www.enzystudios.com/');
				}
		echo "Message Sent Successfully";
	}
	session_destroy();
	//header('Location: http://www.enzystudios.com/');
?>
