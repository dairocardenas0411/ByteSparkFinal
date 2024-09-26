<?php
include_once "../modelo/tipoUsuarioModelo.php";
class TipoUsuarioControlador{
    public $id_tipoUsuario;
    public $descripcion;

    public function ctrListaTipoUsuarios(){
        $objRespuesta = TipoUsuarioModelo::mdlListaTipoUsuarios();
        echo json_encode($objRespuesta);
    }
}
if(isset($_POST["listaTipoUsuarios"]) == "ok"){
    $objTipoUsuario = new TipoUsuarioControlador();
    $objTipoUsuario ->ctrListaTipoUsuarios();
}