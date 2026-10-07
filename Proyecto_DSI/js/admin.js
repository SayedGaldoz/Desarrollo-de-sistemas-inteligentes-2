// Si no hay sesión, regresa al login
if (sessionStorage.getItem("sesion") !== "ok") {
  window.location.href = "login.html";
}

// Botón Salir
document.getElementById("btnSalir").addEventListener("click", function () {
  sessionStorage.removeItem("sesion");
  window.location.href = "login.html";
});

// Menú: muestra solo la sección elegida
document.querySelectorAll("[data-seccion]").forEach(function (enlace) {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".seccion").forEach(function (s) {
      s.classList.add("d-none");
    });
    document.getElementById(enlace.dataset.seccion).classList.remove("d-none");
  });
});
