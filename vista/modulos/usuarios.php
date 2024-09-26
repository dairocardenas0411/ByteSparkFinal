<script src="vista/js/cl_usuario.js"></script>
<script src="vista/js/cl_tipoUsuario.js"></script>

<div class="body-wrapper">

    <?php include_once "header.php"; ?>

    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <!-- Button trigger modal -->
                <button id="btnModalRegistro" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Registrar Usuarios
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="formRegistroUsuarios" class="needs-validation" novalidate>
                                    <div class="mb-3">
                                        <label for="txt_documento" class="form-label">Documento</label>
                                        <input type="text" class="form-control" id="txt_documento"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="txt_nombres" class="form-label">Nombres</label>
                                        <input type="text" class="form-control" id="txt_nombres"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="txt_apellidos" class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="txt_apellidos"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="txt_email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="txt_email"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="selectTipoUsuario" class="form-label">Tipo Usuario</label>
                                        <select class="form-select" id="selectTipoUsuario" required>

                                        </select>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" class="btn btn-primary">Guardar</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Actualizar</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="formActualizarUsuarios" class="needs-validation" novalidate>
                                    <div class="mb-3">
                                        <label for="txt_documento" class="form-label">Documento</label>
                                        <input type="text" class="form-control" id="txt_documento"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="txt_nombres" class="form-label">Nombres</label>
                                        <input type="text" class="form-control" id="txt_nombres"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="txt_apellidos" class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="txt_apellidos"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="txt_email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="txt_email"
                                            aria-describedby="emailHelp" required>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="selectTipoUsuario" class="form-label">Tipo Documento</label>
                                        <select class="form-select" id="selectTipoUsuario" required>

                                        </select>
                                        <div class="invalid-feedback">
                                            Este campo es Requerido.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" class="btn btn-primary">Actualizar</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="table-responsive">
        <table id="tablaUsuarios" class="table table-primary" style="width: 100%;">
            <thead>
                <tr>
                    <th scope="col">Documento</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tipo Documento</th>
                    <th scope="col">Imagen</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>


    </div>
</div>
<script src="vista/js/usuario.js"></script>