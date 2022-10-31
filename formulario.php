<?php
    if (isset($_POST['enviar'])) {
        if (!empty($_POST['nombre']) && !empty($_POST['apellido']) && !empty($_POST['email']) 
        && !empty($_POST['telefono']) && !empty($_POST['mensaje']));
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $asunto = $_POST['PM25'];
    $mensaje = $_POST['mensaje'];
    $emaill = "martinmessner95@gmail.com";
    
    $body = <<<HTML
    <h1>Contacto desde la web</h1>
    <p>De: $nombre, $apellido, Telefono: $telefono Email: $email</p>
    <h2>Mensaje</h2>
    $mensaje
HTML;

$header = "Content-type: text/html; charset=utf-8 \r\n";

    $mail = mail($emaill,$asunto,$body,$header);
     if ($mail) {
        echo '<script>alert("Mensaje Enviado Correctamente"), window.location.href = "contacto.html";</script>';
        }
    }
?>
    

