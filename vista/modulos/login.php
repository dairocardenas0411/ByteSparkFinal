<script src="vista/js/cl_usuario.js"></script>

<div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
        class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div class="d-flex align-items-center justify-content-center w-100">
            <div class="row justify-content-center w-100">

                <div class="col-md-4 col-lg-6 col-xxl-3">
                    <div class="card mb-0">
                        <div class="card-body">
                            <a href="login" class="text-nowrap logo-img text-center d-block py-3 w-100">
                                <img src="archivos/login.png" width="100" alt="100">
                            </a>
                            <p class="text-center">Inicio Sesion</p>
                            <form id="formLogin" class="needs-validation" novalidate>
                                <div class="mb-2">
                                    <label for="txt_email" class="form-label">Usuario</label>
                                    <input type="email" class="form-control" id="txt_email" aria-describedby="emailHelp"
                                        required>
                                    <div class="invalid-feedback">
                                        Este campo es Requerido.
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label for="txt_password" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id="txt_password" required>
                                    <div class="invalid-feedback">
                                        Este campo es Requerido.
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <a class="text-primary fw-bold" href="./index.html">¿Olvido su Contraseña?</a>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button type="submit" class="btn btn-success w-50 py-8 fs-4 mb-4 rounded-2">Iniciar
                                        Sesion</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="vista/js/login.js"></script>