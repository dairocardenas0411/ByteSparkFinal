<?php

class Conexion{
    public static function conectar(){
        $nombreServidor = "localhost";
        $usuario = "root";
        $baseDatos = "empleados";
        $password = "";

        try {
            $objConexion = new PDO('mysql:host='.$nombreServidor.';dbname='.$baseDatos.';',$usuario,$password);
            $objConexion->exec("set names utf8");
        } catch (Exception $e) {
            $objConexion = $e;
        }
        return $objConexion;
    }
}