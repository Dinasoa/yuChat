<?php 
    try
    {
        $conn = new PDO('mysql:host=localhost;dbname=userdb', 'root', '');
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $e) {
            echo 'error : ' . $e->getMessage();
    }

    $response = $conn->query('SELECT * FROM yuchat');
    // select data from table

    while ($data = $response->fetch()) {
        $data['name'] == 'YumeT023' ? $side = 'R' : $side = '';  
        echo '<div class="msgComponent ' . $side . '">';
        echo '<header>' . htmlspecialchars($data['name']) . '</header>';
        echo '<main>' . htmlspecialchars($data['message']) . '</main>';
        echo '</div>';
    }

    $response->closeCursor();
?>