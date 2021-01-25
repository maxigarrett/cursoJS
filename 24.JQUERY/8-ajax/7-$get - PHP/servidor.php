<?php
    if(isset($_GET['nombre']))
    {
        $nombre= $_GET['nombre'];
        echo json_encode($nombre);
    }



?>