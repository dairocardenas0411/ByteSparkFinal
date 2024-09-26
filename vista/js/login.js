// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('#formLogin')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault()

                if (!form.checkValidity()) {
                    event.stopPropagation()
                    form.classList.add('was-validated')
                }else{
                    let email = document.getElementById('txt_email').value;
                    let password = document.getElementById('txt_password').value;
                    let objData ={"iniciarSesion":"ok","email":email,"password":password};
                    let objUsuario = new usuario(objData);
                    objUsuario.iniciarSesion();
                }

            }, false)
        })



})()