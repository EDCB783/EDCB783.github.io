<?php
// Obtener los valores enviados
$name = $_POST['name'];
$correo = $_POST['email'];
$description = $_POST['description'];

// Construir el contenido del correo
$subject = 'Nuevo contacto';
$message = "Nombre: $name\n";
$message .= "Celular: $cel\n";
$message .= "Correo electrónico: $correo\n";
$message .= "Descripción: $description\n";

// Configurar los encabezados del correo
$headers = "From: $correo" . "\r\n" .
           "Reply-To: $correo" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Enviar el correo
if (mail('thekuridreams@gmail.com', $subject, $message, $headers)) {
  echo 'Correo enviado correctamente';
} else {
  echo 'Error al enviar el correo';
}
?>