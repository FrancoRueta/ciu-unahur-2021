let boton = document.querySelector('button');

boton.addEventListener('click',() => {
    let body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend','<p>BEEP<p>');
    //parte del color
    body.classList.toggle("color")});