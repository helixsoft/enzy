<?php
if ($_GET['randomId'] != "HIsuv8Vir3ESN8XIWCdLL0qej__aBzYCbLaU3gjl63CcS6k27_IpRFtu6gr83Awr") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
