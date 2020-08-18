<?php

// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$message = $_POST['message'];

if (!empty($email)) {
    // Формирование самого письма
$title = "New message from Universal";
$body = "
<h2>New message</h2>
<b>Email:</b> $email
";}
else {
    // Формирование самого письма
$title = "New message from Universal";
$body = "
<h2>New message</h2>
<b>Message: </b> $message
";}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'mail.ary-right.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'aryri@ary-right.ru'; // Логин на почте
    $mail->Password   = '123Qwerty'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('aryri@ary-right.ru', 'ary-right.ru'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('Rysmary@yandex.ru');  
    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    



// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

if (!empty($email)) {
// Отображение результата
header('Location: thankyou.html');
}
else {
// Отображение результата
header('Location: thankyou-travel.html');
}
header('Location: thankyou-travel.html');

