<?php
$success;
if(!empty($_POST['website'])){
    $success = "No one likes a spammer!";
}
else{
    $name = trim($_POST['name']); 
    $email = trim($_POST['email']);
    $comments = trim($_POST['message']);
    try {
        if (strlen($name) > 2 && strlen($name) < 21) {
            if (strlen($email) > 5 && strlen($email) < 255) {
                if (strlen($comments) > 10 && strlen($comments) < 1000) {
                    if (strpos($email, "@")){
                        $to = "ryan@ryanlewis.co.uk";
                        $from = "From: $name";
                        $headers = "Reply to: $email";
                        $message = "Message: $comments"; 
            
                        //echo($to + $from + $message + $headers);
                        mail($to, $from, $message, $headers);  
                        $success = "Thanks for your message $name, I will be in touch soon!";
                    }
                    else {
                        $success = "Message failed! Please enter a valid email address";
                    }
                } else { $success = "Message failed! Please make your message is between 10 and 1000 characters.";}
            } else { $success = "Message failed! Enter a valid email address."; }
        } else { $succes = "Message failed! Please enter a name between 2 and 20 characters."; }
    }
    catch (Exception $e) { echo "Message failed! Please make sure all fields are filled out properly."; }
}
if (strlen($success) < 1) {
    $success = "Message failed! Please make sure all fields are filled out properly.";
    echo($success);
    //header("Location:success.php?Success=$success");
}
else {
    echo($success);
}
?>