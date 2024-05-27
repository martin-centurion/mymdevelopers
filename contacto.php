<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Configuración del correo
    $destinatario = "martinalejandrocenturion@gmail.com"; // Reemplaza con tu dirección de correo
    $asunto = "Nuevo mensaje de contacto";
    
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo electrónico: $email\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Encabezados
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
