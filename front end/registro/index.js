let usuario = document.getElementById("dondevaelmail");
let contraseña = document.getElementById("dondevalacontra");
let boton = document.getElementById("registrate");
let usuarios=[] 
let contraseñas=[]

function registrar(){

  const mail = usuario.value;
  const contra = contraseña.value;

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
    
  console.log("Usuarios:", usuarios);
  console.log("Contraseñas:", contraseñas);
  }
}

boton.addEventListener("click",registrar);