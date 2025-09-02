<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = $_POST["name"];
    $empresa = $_POST["company"];
    $email = $_POST["email"];
    $asunto = $_POST["subject"];
    $mensaje = $_POST["message"];

    $to = "hola@mymdevelopers.com.ar"; // tu correo
    $subject = "Nuevo mensaje desde la web: $asunto";
    $body = "Nombre: $nombre\nEmpresa: $empresa\nEmail: $email\n\nMensaje:\n$mensaje";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
