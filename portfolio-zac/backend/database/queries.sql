CREATE DATABASE IF NOT EXISTS portfolio_contacts;
USE portfolio_contacts;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT,
    created_at DATETIME NOT NULL,
    is_read BOOLEAN DEFAULT FALSE
);