<?php
require_once('database.php');

if($_SERVER['REQUEST_METHOD']==='POST'){

} else{
    $accion= $_GET['accion'];

    if ($accion === 'listar') {
        $sql = "SELECT * FROM `departamentos`";
        $departamento = $db->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        if (count($departamento) > 0) {
            $respuesta = [
                "codigo" => 200,
                "data" => $departamento
            ];
        }else{
            $respuesta = [
                "codigo" => 404,
                "mensaje" => "No hay data Disponible"
            ];
        }
        echo json_encode($respuesta);
    }
}