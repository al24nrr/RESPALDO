<?php
// submitOrder.php

$servername = "localhost";
$username = "root"; // Cambia esto si tu usuario es diferente
$password = ""; // La contraseña para el usuario root (normalmente en XAMPP está vacía)
$dbname = "burger_orders"; // Cambia esto al nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$burgerType = $_POST['burgerType'];
$quantity = $_POST['quantity'];
$paymentMethod = $_POST['paymentMethod'];

// Preparar y bindear
$stmt = $conn->prepare("INSERT INTO orders (firstName, lastName, phone, address, burgerType, quantity, paymentMethod) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssis", $firstName, $lastName, $phone, $address, $burgerType, $quantity, $paymentMethod);

// Ejecutar la consulta
if ($stmt->execute()) {
    echo "Nuevo pedido registrado exitosamente";
} else {
    echo "Error: " . $stmt->error;
}

// Cerrar conexiones
$stmt->close();
$conn->close();
?>
