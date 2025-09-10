let form = document.getElementById("formregistro")
let usuario = document.getElementById("dondevaelmail");
let contraseña = document.getElementById("dondevalacontra");
let boton = document.getElementById("registrate");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let contraseñas = JSON.parse(localStorage.getItem("contraseñas")) || [];


function registrar(){


  const mail = usuario.value.trim();
  const contra = contraseña.value.trim();

  if(mail==="" || contra === ""){
    mensaje.textContent = "Completar ambos campos";
    mensaje.style.color = "red";
    return;
  }

  if(usuarios.includes(mail)){
    mensaje.textContent = "Este usuario ya existe";
    mensaje.style.color = "red";
    return
  }
  else{ 
    usuarios.push(mail);
    contraseñas.push(contra);
    mensaje.textContent = ""
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("contraseñas", JSON.stringify(contraseñas));
}


form.addEventListener("submit", function(e) {
  e.preventDefault();
  registrar();
});