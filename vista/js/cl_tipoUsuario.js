class tipoUsuario {
    constructor(objData) {
        this._objData = objData;
    }

    listaTipoUsuarios() {
        let objDataTipoUsuarios = new FormData();
        objDataTipoUsuarios.append("listaTipoUsuarios", this._objData.listarTipoUsuarios);

        fetch("controlador/tipoUsuarioControlador.php", {
            method: 'POST',
            body: objDataTipoUsuarios
        })
            .then(response => response.json()).catch(error => {
                console.log(error);
            })
            .then(response => {
                console.log(response);

                if (response["codigo"] == "200") {
                    const select = document.getElementById(this._objData.idSelect);
                    select.innerHTML = "";
                    let opcion = document.createElement('option');
                    opcion.setAttribute("value", "");
                    opcion.innerHTML = "Seleccione:";
                    select.append(opcion);

                    response["listaTipoUsuarios"].forEach(item => {
                        let opcion = document.createElement('option');
                        opcion.setAttribute("value", item.idtipo_usuario);
                        opcion.innerHTML = item.descripcion;
                        select.append(opcion);
                    })
                }
            })
    }
}