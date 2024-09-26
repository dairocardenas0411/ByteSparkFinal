<?php

session_start();

include_once "../modelo/usuarioModelo.php";
include_once "../modelo/registroModelo.php";

class usuarioControlador {
    public $idUsuario;
    public $documento;
    public $nombre;
    public $apellido;
    public $email;
    public $password;
    public $url;
    public $tipo_usuario_idtipo_usuario;
    
    public function ctrIniciarSesion() {
        $objRespuesta = usuarioModelo::mdlIniciarSesion($this->email, $this->password);
        echo json_encode($objRespuesta);
    }
    
    public function ctrRegistrarUsuario() {
        $objRespuesta = registroModelo::mdlRegistroModelo(
            $this->documento,
            $this->nombre,
            $this->apellido,
            $this->email,
            $this->password,
            $this->url,
            $this->tipo_usuario_idtipo_usuario
        );
        echo json_encode($objRespuesta);
    }
    
    public function ctrEditarUsuario() {
        $objRespuesta=usuarioModelo::mdEditarUsuario(
            $this->documento,
            $this->nombre,
            $this->apellido,
            $this->email,
            $this->password,
            $this->url,
            $this->tipo_usuario_idtipo_usuario
        );
        echo json_encode($objRespuesta);
    }
    
    public function ctrEliminarUsuario() {
        $objRespuesta = usuarioModelo::mdlEliminarUsuario($this->idUsuario);
        echo json_encode($objRespuesta);
        

    }
    
    public function ctrListarUsuario() {

    }
    
    public function ctrListadoUsuarios() {
        $objRespuesta = usuarioModelo::mdlListadosUsuarios();
        echo json_encode($objRespuesta);
    }
}

if (isset($_POST["iniciarSesion"]) == "ok") {
    $objUsuario = new usuarioControlador();
    $objUsuario->email = $_POST["emailUsuario"];
    $objUsuario->password = $_POST["passwordUsuario"];
    $objUsuario->ctrIniciarSesion();
}

if (isset($_POST["registrarUsuario"])== "ok") {
    $objUsuario = new usuarioControlador();
    $objUsuario->documento = $_POST["documento"];
    $objUsuario->nombre = $_POST["nombre"];
    $objUsuario->apellido = $_POST["apellido"];
    $objUsuario->email = $_POST["email"];
    $objUsuario->tipo_usuario_idtipo_usuario = $_POST["tipo_usuario_idtipo_usuario"];
    $objUsuario->ctrRegistrarUsuario();
}
if(isset($_POST["editarUsuario"])=="ok"){
    $objUsuario= new usuarioControlador();
    $objUsuario->documento = $_POST["documento"];
    $objUsuario->nombre = $_POST["nombre"];
    $objUsuario->apellido = $_POST["apellido"];
    $objUsuario->email = $_POST["email"];
    $objUsuario->tipo_usuario_idtipo_usuario = $_POST["tipo_usuario_idtipo_usuario"];
    $objUsuario->ctrEditarUsuario();

}


if(isset($_POST["ListadoUsuarios"])=="ok"){
    $objUsuario = new usuarioControlador();
    $objUsuario->ctrListadoUsuarios();
}

if(isset($_POST["eliminarUsuario"])=="ok"){
    $objUsuario = new usuarioControlador();
    $objUsuario->idUsuario = $_POST["idusuario"];
    $objUsuario ->ctrEliminarUsuario();
}