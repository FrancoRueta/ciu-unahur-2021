//nos traemos el boton.
const button = document.getElementById('buttonLogin');


const REGEX_NOMBRE = new RegExp("/^\d+$/");
const REGEX_CONTIENE_LETRAS = new RegExp(/[a-zA-Z]/);
const REGEX_CONTIENE_NUMEROS = new RegExp(/\d/)

let nombreInvalido = (nombre) =>{
    return (nombre.length < 8 || isNaN(nombre));
}

let passInvalido = (pass) =>{
    return(!REGEX_CONTIENE_NUMEROS.test(pass) || !REGEX_CONTIENE_LETRAS.test(pass) || pass.length < 6);
}



//agregamos un evento al submit del formulario mediante una arrow function.
button.addEventListener('click', (event) => {
    //para evitar que el formulario se envie al apretar el boton.
    event.preventDefault();

    //nos guardamos el nombre y la password
    let nombre = document.getElementById("username").value;
    let contrasenia = document.getElementById("password").value;
    console.log(nombre);
    console.log(contrasenia);

    //chequeamos que el nombre sea numerico.
    if (nombreInvalido(nombre)){
        alert("El nombre debe contener solo caracteres numericos, y ser de 8 caracteres o mas.")
        console.log(nombreInvalido(nombre));
        return;
    }
    if(passInvalido(contrasenia)){
        alert("La contraseña debe contener solo numeros y letras, y ser de 6 caracteres o mas.")
        console.log(passInvalido(contrasenia));
        return;
    }

    
    document.location.href = "main.html";
});