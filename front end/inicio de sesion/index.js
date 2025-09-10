let usuario = document.getElementById("dondevaelmail");
let contraseña = document.getElementById("dondevalacontra");
let boton = document.getElementById("iniciar");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("loginform")

if (!localStorage.getItem("usuarios")) {
  let usuarios = ["juan@example.com"];
  let contraseñas = ["1234"];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("contraseñas", JSON.stringify(contraseñas));
}

function iniciosesion(event) {
  event.preventDefault();

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let contraseñas = JSON.parse(localStorage.getItem("contraseñas")) || [];

  let mail = usuario.value.trim();
  let contra = contraseña.value.trim();

   if (mail === "" || contra === "") {
     mensaje.textContent = "Completá ambos campos";
     mensaje.style.color = "red";
     return;
   }
 
   let indice = -1;

   for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i] === mail) {
      indice = i;
      break;}
    }
    
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
 
   else{
    mensaje.textContent = "¡Inicio de sesión exitoso!";
    mensaje.style.color = "green";
  } 
 localStorage.setItem("usuarioLogueado", mail);
}
form.addEventListener("submit",iniciosesion);

