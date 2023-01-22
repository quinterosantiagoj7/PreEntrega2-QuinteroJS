// Bienvenida para estudiante.
let ingreso = prompt("¿Cómo te llamas?", " ")
alert("Bienvenid@ comprador " + ingreso); // Muestra nombre ingresado.

// Formulario para hacer LogIn.
function login() {
    let user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;


    if (user == "homero" && pass == "1234") {

        window.location = "./html/pag2.html";
    }

    else {
        alert("Por favor, ingrese nombre de usuario y contraseña correctos.");
    }


}