(function () {

    const btnRegistro = document.getElementById('btnModalRegistro');
    btnRegistro.addEventListener("click", () => {
        let objData = { "listarTipoUsuarios": "ok", "idSelect": "selectTipoUsuario" }
        let objTipoUsuarios = new tipoUsuario(objData);
        objTipoUsuarios.listaTipoUsuarios();

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('#formRegistroUsuarios')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        event.preventDefault()

                        if (!form.checkValidity()) {
                            event.stopPropagation()
                            form.classList.add('was-validated')
                        } else {
                            let documento = document.getElementById('txt_documento').value;
                            let nombres = document.getElementById('txt_nombres').value;
                            let apellidos = document.getElementById('txt_apellidos').value;
                            let email = document.getElementById('txt_email').value;
                            let tipoUsuario = document.getElementById('selectTipoUsuario').value;
                            let objData = { "registrarUsuario": "ok", "documento": documento, "nombre": nombres, "apellido": apellidos, "email": email, "tipoUsuario": tipoUsuario };
                            let objRegistrUsuario = new usuario(objData);
                            objRegistrUsuario.registrarUsuario();
                        }

                    }, false)
                })
        })()
    })

    listarUsuarios();

    function listarUsuarios() {
        let objData = { "listarUsuarios": "ok", "idTabla": "#tablaUsuarios" };
        let objUsuarios = new usuario(objData);
        objUsuarios.listadoUsuarios();
    }

    $("#tablaUsuarios").on("click", "#btnEliminar", function () {

        let idUsuario = $(this).attr("idusuario");
        let urlImagen = $(this).attr("imagen");
        let objData = { "eliminarUsuario": "ok", "listarUsuarios": "ok", "idusuario": idUsuario, "urlImagen": urlImagen };
        let objUsuario = new usuario(objData);
        objUsuario.eliminarUsuario();

    })

    // Evento del botón Editar
    const btnEditar = document.getElementById('btnEditar');
    btnEditar.addEventListener("click", () => {
        let objData = { "listarTipoUsuarios": "ok", "idSelect": "selectTipoUsuario" }
        let objTipoUsuarios = new tipoUsuario(objData);
        objTipoUsuarios.listaTipoUsuarios();

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('#formActualizarUsuarios')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        event.preventDefault()

                        if (!form.checkValidity()) {
                            event.stopPropagation()
                            form.classList.add('was-validated')
                        } else {
                            let documento = document.getElementById('txt_documento').value;
                            let nombres = document.getElementById('txt_nombres').value;
                            let apellidos = document.getElementById('txt_apellidos').value;
                            let email = document.getElementById('txt_email').value;
                            let tipoUsuario = document.getElementById('selectTipoUsuario').value;
                            let objData = { "registrarUsuario": "ok", "documento": documento, "nombre": nombres, "apellido": apellidos, "email": email, "tipoUsuario": tipoUsuario };
                            let objEditarUsuario = new usuario(objData);
                            objEditarUsuario.editarUsuario();

                        }

                    }, false)
                })
        })()
    })
})();