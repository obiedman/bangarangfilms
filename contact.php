<?php
        $mail_to_send_to = "pat@bangarangfilms.com";
        $your_feedbackmail = "form_mailer@bangarangfilms.com";

        $sendflag = $_REQUEST['sendflag'];
                $email = $_REQUEST['Email'] ;
                $message = $_REQUEST['Notes'] ;
                $headers = "From: $your_feedbackmail" . "\r\n" . "Reply-To: $email" . "\r\n" ;
                $a = mail( $mail_to_send_to, "Feedback Form Results", $message, $headers );
                if ($a)
                {
                     print("Message was sent, you can send another one");
                } else {
                     print("Message wasn't sent, please check that you have changed emails in the bottom");
                }
?>