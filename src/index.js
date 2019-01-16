//variables globales
const box1=document.getElementById('box1');//caja principal
const box2=document.getElementById('box2');//caja muestra el cifrado
const box3=document.getElementById('box3');//caja que muestra el descifrado
const encriptar=document.getElementById('encriptar');
const desencriptar=document.getElementById('desencriptar');
const volver1= document.getElementById('volver1');
const volver2=document.getElementById('volver2');
const mnsjEncriptado=document.getElementById('mnsj-encriptado')
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
   box2.classList.remove('hideElement');


//cipher.decode(descifrar,desplazamiento);
})

volver1.addEventListener('click',()=>{
   box2.classList.add('hideElement');
   box1.classList.remove('hideElement');
})

volver2.addEventListener('click',()=>{
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
