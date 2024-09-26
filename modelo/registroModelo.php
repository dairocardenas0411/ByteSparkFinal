<?php

include_once "conexion.php";

class registroModelo {
    public static function mdlRegistroModelo($documento, $nombre, $apellido, $email, $password,
     $url, $tipo_usuario_idtipo_usuario) {
        $mensaje = array();

        $password = $documento;

        $url = "archivos/login.png"; // Asignación fija de URL

        try {
            $objRespuesta = Conexion::conectar()->prepare(
                "INSERT INTO usuario (documento, nombre, apellido, email, password, url, tipo_usuario_idtipo_usuario) 
                VALUES (:documento, :nombre, :apellido, :email, :password, :url, :tipo_usuario_idtipo_usuario)"
            );
            $objRespuesta->bindParam(":documento", $documento);
            $objRespuesta->bindParam(":nombre", $nombre);
            $objRespuesta->bindParam(":apellido", $apellido);
            $objRespuesta->bindParam(":email", $email);
            $objRespuesta->bindParam(":password", $password);
            $objRespuesta->bindParam(":url", $url);
            $objRespuesta->bindParam(":tipo_usuario_idtipo_usuario", $tipo_usuario_idtipo_usuario);
            
            if ($objRespuesta->execute()) {
                $mensaje = array("codigo" => "200", "mensaje" => "Usuario registrado correctamente en la base de datos");
            } else {
                $mensaje = array("codigo" => "401", "mensaje" => "Error al registrar el usuario en la base de datos");
            }
        } catch (Exception $e) {
            $mensaje = array("codigo" => "401", "mensaje" => $e->getMessage());
        }

        return $mensaje;
    }
}