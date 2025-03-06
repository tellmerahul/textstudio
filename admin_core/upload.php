<?php
// Database connection
include 'connection.php';



if (!isset($_SESSION["username"])) {
    header('Location: login.php');
    exit();
}

// Handle file upload
 // Check for form submission
 if (isset($_FILES['font_file']) && $_FILES['font_file']['error'] == 0) {
    $fontFile = $_FILES['font_file'];
    $font = $_FILES['font_file']['name'];
    $fileName = pathinfo($font, PATHINFO_FILENAME);
    $fileExtension = pathinfo($font, PATHINFO_EXTENSION);

    // Validate file size (e.g., 10MB max)
    if ($fontFile['size'] > 10240 * 1024) { // 10MB max size
        die("File size is too large.");
    }

    // Move the file to the "fonts" directory
    $uploadDir = 'assets/fonts/';
    $filePath = $uploadDir . basename($fontFile['name']);
    
    if (move_uploaded_file($fontFile['tmp_name'], $filePath)) {
        // Store file path in the database using mysqli
        $fontFormat = strtolower($fileExtension); // Get the file format (extension) of the uploaded font

        // Prepare the SQL statement
        $stmt = $conn->prepare("INSERT INTO fonts (file_path, font_name, font_format) VALUES (?, ?, ?)");
        
        // Bind parameters to the SQL statement
        $stmt->bind_param('sss', $filePath, $fileName, $fontFormat); // 'sss' means three string parameters

        // Execute the query
        if ($stmt->execute()) {
            echo "<script>window.location.href='/textstudiodev/admin_core/font.php';</script>";
        } else {
            echo "Error inserting record: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "Failed to upload file.";
    }
} else {
    echo "No file uploaded or error in file upload.";
}



?>
