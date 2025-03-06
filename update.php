<?php
// admin.php

// Include the database connection
include 'connection.php'; // Ensure this is included

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $usernameOrEmail = $_POST['login'];
    $password = $_POST['password'];

    // Check if 'remember me' was checked
    $rememberMe = isset($_POST['memo']) ? 1 : 0;

    // Prepare and execute the query to fetch the user by email or username
    $query = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $usernameOrEmail); // "ss" means two string parameters
    $stmt->execute();
    $result = $stmt->get_result();

    $user = $result->fetch_assoc();

    if ($user) {
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Login successful
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['email'] = $user['email'];

            // If "remember me" is checked, set a cookie for persistent login
            if ($rememberMe) {
                setcookie('user_id', $user['id'], time() + 3600 * 24 * 30, '/'); // 30 days
            }

            // Return a success response as JSON
            echo "<script> window.location.href='/textstudiodev/admin.php';</script>";
        } else {
            // Password is incorrect
            echo json_encode(['success' => false, 'message' => 'Invalid password.']);
        }
    } else {
        // User not found
        echo json_encode(['success' => false, 'message' => 'No user found with that username or email.']);
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
