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
	elseif($_POST['phone']==''){
		echo "Phone field is required";
	}
	elseif(!preg_match('/^((\+){0,1}(\d{1,4})(\s){0,1}(\-){0,1}(\s){0,1})?([0-9]{10})$/', $_POST['phone'],$matches)){
		echo "Not valid phone number";
	}
	elseif($_POST['brand']==''){
		echo "Company/Band field is required";
	}
	elseif($_POST['date']==''){
		echo "Preferred Date field is required";
	}
	elseif($_POST['duration']==''){
		echo "Duration of Booking field is required";	
	}
	elseif($_POST['message']==''){
		echo "Message field is required";	
	}
    elseif($_POST['ter']!='terms'){
		echo "Please Accept Terms and Condition";	
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
					$mail->Subject    = 'Booking Enquiry From Company/Band : '.$_POST['brand'];
					$message="Name: ".$_POST['name']."<br/>".
					"Email: ".$_POST['email']."<br/>".
					"Phone: ".$_POST['phone']."<br/>".
					"Company/Band: ".$_POST['brand']."<br/>".
					"Preferred Date: ".$_POST['date']."<br/>".
					"Duration Of Booking: ".$_POST['duration']." ".$_POST['time']."<br/>".
					"Project Description: ".$_POST['message']."<br/>";
					$mail->MsgHTML($message);
					$mail->AddAddress('contact@enzystudios.com','ENZY Contact');
					if($mail->Send()){
						echo "Message Sent Successfully";
					}
				}
				catch (phpmailerException $e) {
					//echo $e->errorMessage();
					//header('Location: http://www.enzystudios.com/');
				}
		
	}
	session_destroy();
	//header('Location: http://www.enzystudios.com/');
?>
