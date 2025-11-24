const nombre = prompt("Ingresa tu nombre completo:");
const email = prompt("Ingresa tu correo electrónico:");
const contrasena = prompt("Ingresa tu contraseña:");

if (!nombre || nombre.trim() === "") {
    console.log("Error: El campo 'nombre' no puede estar vacío.");
} else if (!email || email.trim() === "") {
    console.log("Error: El campo 'email' no puede estar vacío.");
} else if (!contrasena || contrasena.trim() === "") {
    console.log("Error: El campo 'contraseña' no puede estar vacío.");
} else if (contrasena.trim().length < 8) {
    console.log("Error: La contraseña debe tener al menos 8 caracteres.");
} else {
    console.log(`✅ Registro exitoso. ¡Bienvenido, ${nombre}!`);
}