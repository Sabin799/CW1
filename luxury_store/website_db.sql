CREATE DATABASE luxury_store_db;
USE luxury_store_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    card_number VARCHAR(20) NOT NULL,
    exp_month VARCHAR(2) NOT NULL,
    exp_year VARCHAR(4) NOT NULL,
    cvv VARCHAR(4) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

