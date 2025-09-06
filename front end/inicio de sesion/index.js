let usuario = document.getElementById("dondevaelmail");
let contraseña = document.getElementById("dondevalacontra");
let boton = document.getElementById("iniciar");
let mensajeLogin = document.getElementById("mensaje");

function iniciosesion() {
    let mail = usuario.value;
    let contra = contraseña.value;
 
   if (mail === "" || contra === "") {
     mensajeLogin.textContent = "Completá ambos campos";
     mensajeLogin.style.color = "red";
     return;
   }
 
   const indice = usuarios.indexOf(mail);
 
   if (indice === -1) {
     mensajeLogin.textContent = "El usuario no existe";
     mensajeLogin.style.color = "red";
     return;
   }
 
   if (contraseñas[indice] !== contra) {
     mensajeLogin.textContent = "Contraseña incorrecta";
     mensajeLogin.style.color = "red";
     return;
   }
 
   mensajeLogin.textContent = "¡Inicio de sesión exitoso!";
   mensajeLogin.style.color = "green";
 }


boton.addEventListener("click",iniciosesion);

