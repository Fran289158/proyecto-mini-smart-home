let usuario = document.getElementById("dondevaelmail");
let contraseña = document.getElementById("dondevalacontra");
let boton = document.getElementById("registrate");

function registrar(){
  if(usuario===""){
    alert("Por favor, ingresa tu mail o  nombre de usuario.");
    return
  }