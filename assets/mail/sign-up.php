<?php
// Check for empty fields
if(empty($_POST['email'])      ||
   empty($_POST['password'])     ||
   empty($_POST['passwordConfirmation'])     ||
   empty($_POST['tradingName'])   ||
   empty($_POST['registeredName'])      ||
   empty($_POST['firstName'])      ||
   empty($_POST['lastName'])      ||
   empty($_POST['street1'])      ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided!";
    return false;
   }
$email = strip_tags(htmlspecialchars($_POST['email']));  
$password =strip_tags(htmlspecialchars($_POST['password']));
$passwordConfirmation =strip_tags(htmlspecialchars($_POST['passwordConfirmation']));
$tradingName =strip_tags(htmlspecialchars($_POST['tradingName']));
$registeredName =strip_tags(htmlspecialchars($_POST['registeredName']));
$title =strip_tags(htmlspecialchars($_POST['title']));
$firstName = strip_tags(htmlspecialchars($_POST['firstName']));
$lastName =strip_tags(htmlspecialchars($_POST['lastName']));
$position =strip_tags(htmlspecialchars($_POST['position']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$mobile = strip_tags(htmlspecialchars($_POST['mobile']));
$fax =strip_tags(htmlspecialchars($_POST['fax']));
$attentionTo =strip_tags(htmlspecialchars($_POST['attentionTo']));
$street1 =strip_tags(htmlspecialchars($_POST['street1']));
$street2 =strip_tags(htmlspecialchars($_POST['street2']));
$suburb =strip_tags(htmlspecialchars($_POST['suburb']));
$postcode =strip_tags(htmlspecialchars($_POST['postcode']));
$country =strip_tags(htmlspecialchars($_POST['country']));
$state =strip_tags(htmlspecialchars($_POST['state']));
$billAddressCheckbox =strip_tags(htmlspecialchars($_POST['billAddressCheckbox']));
$attentionToBill =strip_tags(htmlspecialchars($_POST['attentionToBill']));
$street1Bill =strip_tags(htmlspecialchars($_POST['street1Bill']));
$street2Bill =strip_tags(htmlspecialchars($_POST['street2Bill']));
$suburbBill =strip_tags(htmlspecialchars($_POST['suburbBill']));
$postcodeBill =strip_tags(htmlspecialchars($_POST['postcodeBill']));
$countryBill =strip_tags(htmlspecialchars($_POST['countryBill']));
$stateBill =strip_tags(htmlspecialchars($_POST['stateBill']));
$mailingListCheckbox =strip_tags(htmlspecialchars($_POST['mailingListCheckbox']));
$foundUs =strip_tags(htmlspecialchars($_POST['foundUs']));
   
// Create the email and send the message
$to = 'kseniia.kandaurova@gmail.com'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Sign Up Form:  $tradingName";
$email_body = "You have received a new message from your website sign up form.\n\n"."Here are the details:\n\nEmail: $email\n\nPassword: $password\n\nPassword confirmation: $passwordConfirmation\n\n Trading name: $tradingName\n\nRegistered name: $registeredName\n\nTitle: $title\n\nFirst name: $firstName\n\nLast name: $lastName\n\nPosition: $position\n\nPhone: $phone\n\nMobile: $mobile\n\nFax: $fax\n\nAttention to: $attentionTo\n\nStreet1: $street1\n\nStreet2: $street2\n\nSuburb: $suburb\n\nPostcode: $postcode\n\nCountry: $country\n\nState: $state\n\nBilling address same as shipping: $billAddressCheckbox\n\nAttention to (bill): $attentionToBill\n\nStreet1 (bill): $street1Bill\n\nStreet2 (bill): $street2Bill\n\nSuburb (bill): $suburbBill\n\nPostcode (bill): $postcodeBill\n\nCountry (bill): $countryBill\n\nState (bill): $stateBill\n\nMailing list: $mailingListCheckbox\n\nFound us: $foundUs";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>