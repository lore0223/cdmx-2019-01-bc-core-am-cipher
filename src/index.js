//constantes globales
const box1=document.getElementById('box1');//caja principal
const box2=document.getElementById('box2');//caja muestra el cifrado
const box3=document.getElementById('box3');//caja que muestra el descifrado
const encriptar=document.getElementById('encriptar');//boton para cifrar
const desencriptar=document.getElementById('desencriptar');//boton para descifrar
const volver1= document.getElementById('volver1');//regreso a pagina principal
const volver2=document.getElementById('volver2');//regreso a pagina principal
const mnsjEncriptado=document.getElementById('mnsj-encriptado');//mensaje cifrado
const mnsjDesencriptado=document.getElementById('mnsj-desencriptado');//mensaje ya descifrado

//el boton encriptar tiene la funcion de ocultar las cajas,obtiene el valor del input
//ingresado por el usuario.Al offset se le aplico el metodo parseInt por que el 
//input number devuelve un string.
//por medio de window.cipher.encode invocamos la función y pasamos argumentos
//con el innerHtml pintamos en la pantalla el resultado de la función
encriptar.addEventListener('click',()=>{
   box1.classList.add('hideElement');
   box2.classList.remove('hideElement');
   const mensajeCifrado= document.getElementById('mensaje-usuario').value; 
   const offset=parseInt(document.getElementById('offset').value);

  const mensajito=window.cipher.encode(offset,mensajeCifrado);
  mnsjEncriptado.innerHTML=mensajito;
})

desencriptar.addEventListener('click',()=>{
   box1.classList.add('hideElement');
   box3.classList.remove('hideElement');
   const mensajeDescifrado=document.getElementById('mensaje-usuario').value;
   const offset2=parseInt(document.getElementById('offset').value);

   const mensajitoRevelado=window.cipher.decode(offset2,mensajeDescifrado);
   mnsjDesencriptado.innerHTML=mensajitoRevelado;


})

volver1.addEventListener('click',()=>{
   location.reload();
   box2.classList.add('hideElement');
   box1.classList.remove('hideElement');
})

volver2.addEventListener('click',()=>{
   location.reload()
    box3.classList.add('hideElement');
    box1.classList.remove('hideElement');
 })
 
 
    
   






// function prueba(num1,num2){
//     return num1+num2
// }

// const prueba = function(num1,num2){
//     return num1+num2
// }

// const prueba = num1 =>  num1+num2
