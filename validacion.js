// Validación del formulario contacto

document.getElementById("formularioContacto").addEventListener("submit", function (event) {
    event.preventDefault();
    validar();
});

function mostrarError(id, mensaje) {
    const campo = document.getElementById(id);
    const feedback = document.getElementById("error-" + id);
    campo.classList.add("is-invalid");
    feedback.textContent = mensaje;
}

function limpiarErrores() {
    const campos = ["nombre", "apellido", "mail", "mensaje"];
    campos.forEach(id => {
        const campo = document.getElementById(id);
        campo.classList.remove("is-invalid");
        const feedback = document.getElementById("error-" + id);
        feedback.textContent = "";
    });
}

function validar() {
    limpiarErrores();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hayErrores = false;

    if (!nombre) {
        mostrarError("nombre", "Campo obligatorio");
        hayErrores = true;
    }
    if (!apellido) {
        mostrarError("apellido", "Campo obligatorio");
        hayErrores = true;
    }
    if (!mail) {
        mostrarError("mail", "Campo obligatorio");
        hayErrores = true;
    } else if (!mailValido.test(mail)) {
        mostrarError("mail", "Email inválido");
        hayErrores = true;
    }
    if (!mensaje) {
        mostrarError("mensaje", "Campo obligatorio");
        hayErrores = true;
    }

    if (hayErrores) return;

    document.getElementById("formularioContacto").reset();
    document.getElementById("mensajeEnviado").classList.remove("d-none");
    setTimeout(() => {
      document.getElementById("mensajeEnviado").classList.add("d-none");
    }, 5000);
}