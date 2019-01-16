const box1=document.getElementById('box1');
const box2=document.getElementById('box2');
const box3=document.getElementById('box3');
const mensaje=document.getElementById('mensaje-usuario');
const encriptar=document.getElementById('encriptar');
const desencriptar=document.getElementById('desencriptar');
const offset= document.getElementById('offset');
let nuevoCifrado='';

encriptar.addEventListener('click',()=>{
   box1.classList.add('hideElement');
   box2.classList.remove('hideElement');
   const cifrar= document.getElementById('mensaje-usuario').value;
   const desplazamiento=parseInt(document.getElementById('offset').value);
   console.log(desplazamiento);
   
   // cipher.encode(cifrar,desplazamiento);
    
})

desencriptar.addEventListener('click',()=>{
   box1.classList.add('hideElement');
   box2.classList.remove('hideElement');
   const descifrar =document.getElementById('mensaje-usuario').value;
   const desplazamiento=parseInt(document.getElementById('offset').value);

//cipher.decode(descifrar,desplazamiento);
})

    
   



// obtiene el codigo ascii y convierte a mayusculas
function mnsj(){
    let mensajeObtenido= mensaje.value;
let mayuscula= mensajeObtenido.toUpperCase();
let mayus=mayuscula.charCodeAt();

for(let i=0; i<mayuscula.length; i++){
    let letraAscii=mayuscula.charCodeAt(i);
    let formula=(letraAscii-65+ offset)%26+65;
    let resultado= String.fromCharCode(formula);
    nuevoCifrado += resultado;
}
alert (nuevoCifrado);

};



// function prueba(num1,num2){
//     return num1+num2
// }

// const prueba = function(num1,num2){
//     return num1+num2
// }

// const prueba = num1 =>  num1+num2
