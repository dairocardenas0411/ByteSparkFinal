<?php

session_start();

include_once "vista/modulos/cabecera.php";


if (isset($_SESSION["usuario"])) {

    if (isset($_GET["ruta"])) {

        if (
            $_GET["ruta"] == "inicio" ||
            $_GET["ruta"] == "cerrarSesion" ||
            $_GET["ruta"] == "registroDocente"||
            $_GET["ruta"]=="registroAlumno"||
            $_GET["ruta"]=="juego"||
            $_GET["ruta"]=="reciclaje"||
            $_GET["ruta"]=="biodiversidad"||
            $_GET["ruta"]=="usuarios"||
            $_GET["ruta"]=="ahorroagua"||
            $_GET["ruta"]=="registroAlumnos"




        ) {

            include_once "vista/modulos/menu.php";

            include_once "vista/modulos/" . $_GET["ruta"] . ".php";

        } else {

            include_once "vista/modulos/404.php";

        }
    } else {
        include_once "vista/modulos/menu.php";

        include_once "vista/modulos/inicio.php";
    }

} else {
    include_once "vista/modulos/login.php";
}

include_once "vista/modulos/pie.php";