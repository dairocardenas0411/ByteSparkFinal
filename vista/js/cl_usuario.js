class usuario {
    constructor(objData) {
        this._objData = objData;
    }

    iniciarSesion() {
        let objDataUsuario = new FormData();
        objDataUsuario.append("emailUsuario", this._objData.email);
        objDataUsuario.append("passwordUsuario", this._objData.password);
        objDataUsuario.append("iniciarSesion", this._objData.iniciarSesion);

        fetch("controlador/usuarioControlador.php", {
            method: 'POST',
            body: objDataUsuario
        })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            })
            .then(response => {
                console.log(response);
                if (response["codigo"] == "200") {
                    window.location = "inicio";
                } else {
                    alert(response["mensaje"]);
                }
            });
    }

    registrarUsuario() {
        console.log(this._objData.tipo_usuario_idtipo_usuario);
        let objData = new FormData();
        objData.append("documento", this._objData.documento);
        objData.append("nombre", this._objData.nombre);
        objData.append("apellido", this._objData.apellido);
        objData.append("email", this._objData.email);
        objData.append("tipo_usuario_idtipo_usuario", this._objData.tipoUsuario);
        objData.append("registrarUsuario", "ok");

        fetch("controlador/usuarioControlador.php", {
            method: 'POST',
            body: objData
        })
            .then(response => response.json()).catch(error => {
                console.log(error);
            })
            .then(response => {
                alert(response["mensaje"]);
                location.reload();
            })
    }

    editarUsuario() {
        let objData = new FormData();
        objData.append("documento", this._objData.documento);
        objData.append("nombre", this._objData.nombre);
        objData.append("apellido", this._objData.apellido);
        objData.append("email", this._objData.email);
        objData.append("tipo_usuario_idtipo_usuario", this._objData.tipoUsuario);
        objData.append("editarUsuario", "ok");

        fetch("controlador/usuarioControlador.php", {
            method: 'POST',
            body: objData
        })
            .then(response => response.json()).catch(error => {
                console.log(error);
            })
            .then(response => {
                alert(response["mensaje"]);
                location.reload();
            })


    }

    eliminarUsuario() {
        let objEliminarUsuario = new FormData();
        objEliminarUsuario.append("eliminarUsuario", this._objData.eliminarUsuario);
        objEliminarUsuario.append("idusuario", this._objData.idusuario);
        fetch("controlador/usuarioControlador.php", {
            method: 'POST',
            body: objEliminarUsuario
        })
            .then(response => response.json()).catch(error => {
                console.log(error);

            })
            .then(response => {
                alert(response["mensaje"]);
                location.reload();
            })
    }

    listarUsuario() {
    }

    listadoUsuarios() {
        let objListaUsuarios = new FormData();
        objListaUsuarios.append("ListadoUsuarios", this._objData.listadoUsuarios);
        fetch("controlador/usuarioControlador.php", {
            method: 'POST',
            body: objListaUsuarios
        })
            .then(response => response.json()).catch(error => {
                console.log(error);
            })
            .then(response => {
                console.log(response);

                let dataSet = [];
                response["listadoUsuarios"].forEach(item => {
                    var Imagen = '<img src="' + item.url + '"width="80" height="80">';

                    let botones = '<div class="btn-group" role="group" aria-label="Basic mixed styles example">';
                    botones += '<button id="btnEditar" idUsuario="' + item.idusuario + '" nombre="' + item.nombre +
                        '" apellido="' + item.apellido + '" email="' + item.email + '" idTipoUsuario="' + item.idtipo_usuario +
                        '"descripcion="' + item.descripcion + '" imagen="' + item.url + '" imagen="' + item.url + '" type="button" class="btn btn-info">Editar</button>';


                    botones += '<button id="btnEliminar" idUsuario="' + item.idusuario + '" type="button" class="btn btn-danger">Eliminar</button>';
                    botones += '</div>';

                    dataSet.push([item.documento, item.nombre + " " + item.apellido, item.email, item.descripcion, Imagen, botones]);
                })
                $(this._objData.idTabla).DataTable({
                    buttons: [{
                        extend: "colvis",
                        text: "Columnas Visibles"
                    },
                        "excel",
                        "pdf",
                        "csv",
                    {
                        extend: "print",
                        text: "Imprimir"
                    },
                    ],
                    dom: "Bfrtip",
                    destroy: true,
                    data: dataSet,
                    responsive: true
                });
            })

    }
}
