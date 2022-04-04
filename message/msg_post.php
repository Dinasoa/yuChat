<?php 
    try
    {
        $conn = new PDO('mysql:host=localhost;dbname=userdb', 'root', '');
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $e) {
        echo 'error : ' . $e->getMessage();
    }

    $req = $conn->prepare('INSERT INTO yuchat(name, message) VALUES(?, ?)');
    // prepare insert request

    if (isset($_POST['name']) AND isset($_POST['message'])) {
        $req->execute(array($_POST['name'], $_POST['message']));
        // execute the request with the given parametters (name, message)
    }

    $req->closeCursor();

    header('Location: display_msg.php');
    // redired to display_msg.php after inserting data into the TABLE
?>