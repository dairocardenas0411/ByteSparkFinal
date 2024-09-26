<?php
include_once "conexion.php";
class TipoUsuarioModelo{
    public static function mdlListaTipoUsuarios(){
        $mensaje = array();
        try {
            $objRespuesta = Conexion::conectar()->prepare("SELECT * FROM tipo_usuario");
            $objRespuesta->execute();
            $listaTipoUsuarios = $objRespuesta->fetchAll();
            $mensaje = array("codigo"=>"200","listaTipoUsuarios"=>$listaTipoUsuarios);
            $objRespuesta = null;
        } catch (Exception $e) {
            $mensaje = array("codigo"=>"401","mensaje"=>$e->getMessage());
        }
        return $mensaje;
    }
}