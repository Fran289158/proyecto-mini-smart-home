let usuario = document.getElementById("dondevaelmail");
let contraseña = document.getElementById("dondevalacontra");
let boton = document.getElementById("iniciar");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("loginform")
let usuarios= []
let contraseñas = []

function iniciosesion() {
   
   if (mail === "" || contra === "") {
     mensaje.textContent = "Completá ambos campos";
     mensaje.style.color = "red";
     return;
   }
 
   for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i] === mail) {
      indice = i;
      break;}
 
   if (indice === -1) {
     mensaje.textContent = "El usuario no existe";
     mensaje.style.color = "red";
     return;
   }
 
   if (contraseñas[indice] !== contra) {
     mensaje.textContent = "Contraseña incorrecta";
     mensaje.style.color = "red";
     return;
   }
 
   mensaje.textContent = "¡Inicio de sesión exitoso!";
   mensaje.style.color = "green";
 }
}

boton.addEventListener("submit",iniciosesion);

