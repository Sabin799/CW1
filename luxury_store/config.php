<?php
$servername = "localhost";
$username = "root";
$password = ""; // Empty password for XAMPP
$dbname = "luxury_store_db";
$port="3307";

$conn = new mysqli($servername, $username, $password, $dbname,$port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
