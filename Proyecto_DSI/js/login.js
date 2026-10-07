// Usuario de prueba (solo para la práctica)
const USUARIO = "admin@dsi.com";
const CLAVE = "admin123";

document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault(); // que no se recargue la página

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === USUARIO && password === CLAVE) {
    sessionStorage.setItem("sesion", "ok");
    window.location.href = "admin.html";
  } else {
    document.getElementById("alertaError").classList.remove("d-none");
  }
});
