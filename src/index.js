//constantes globales
const box1 = document.getElementById('box1'); //caja principal
const box2 = document.getElementById('box2'); //caja muestra el cifrado
const box3 = document.getElementById('box3');//caja que muestra el descifrado
const box4 = document.getElementById('box4');//caja con la guía de usuario 
const encriptar = document.getElementById('encriptar'); //boton para cifrar
const desencriptar = document.getElementById('desencriptar'); //boton para descifrar
const volver1 = document.getElementById('volver1'); //regreso a pagina principal
const volver2 = document.getElementById('volver2'); //regreso a pagina principal
const volver3 = document.getElementById('volver3');
const mnsjEncriptado = document.getElementById('mnsj-encriptado'); //mensaje cifrado
const mnsjDesencriptado = document.getElementById('mnsj-desencriptado');//mensaje ya descifrado
const guiaUsuario = document.getElementById('guia-usuario');// Boton para mostrar guia usuario

//El boton encriptar tiene la funcion de ocultar las cajas(div) y obtiene el valor de textarea e input
//ingresado por el usuario.Al offset se le aplico el metodo parseInt por que el 
//input number devuelve un string.
//Por medio de window.cipher.encode invocamos la función y pasamos argumentos obtenidos.
//Con el innerHtml pintamos en la pantalla el resultado de la función.

encriptar.addEventListener('click', () => {
  box1.classList.add('hideElement');
  box2.classList.remove('hideElement');
  const mensajeCifrado = document.getElementById('mensaje-usuario').value;
  const offset = parseInt(document.getElementById('offset').value);
  if(offset ==''){
    alert('No has ingresado un número de desplazamiento');
  }
  const mensajito = window.cipher.encode(offset, mensajeCifrado);
  mnsjEncriptado.innerHTML = mensajito;
})

desencriptar.addEventListener('click', () => {
  box1.classList.add('hideElement');
  box3.classList.remove('hideElement');
  const mensajeDescifrado = document.getElementById('mensaje-usuario').value;
  const offset2 = parseInt(document.getElementById('offset').value);

  const mensajitoRevelado = window.cipher.decode(offset2, mensajeDescifrado);
  mnsjDesencriptado.innerHTML = mensajitoRevelado;


})
//Integrando la guía de Usuario
guiaUsuario.addEventListener('click', () => {
box1.classList.add('hideElement');
box4.classList.remove('hideElement');
})

//los botones volver1, volver 2 y volver 3 tienen la función de refrescar la pagina 
//y nos regresan a la caja principal.

volver1.addEventListener('click', () => {
  location.reload();
  box2.classList.add('hideElement');
  box1.classList.remove('hideElement');
});

volver2.addEventListener('click', () => {
  location.reload();
  box3.classList.add('hideElement');
  box1.classList.remove('hideElement');
});

volver3.addEventListener('click', () => {
box4.classList.add('hideElement');
box1.classList.remove('hideElement');
})
