window.cipher = {
  encode:(desplazamiento,cifrar) =>{
  let mayusculas=cifrar.toUpperCase();//convirtiendo a mayusculas el mensaje
  

//aqui vamos a iterar el mensaje y aplicarle la formula,
 //y convertir el resultado de la formula de nuevo a string
 // y obtener así el nuevo cifrado
let nuevoCifrado= '';
  for(let i=0;i<mayusculas.length; i++){
    const letraAscii=mayusculas.charCodeAt(i);
    const formula=(letraAscii-65+parseInt(desplazamiento))%26+65;
    const resultado= String.fromCharCode(formula);
    nuevoCifrado += resultado;
  }
  return nuevoCifrado;
  },
    
  decode:() => {

  }
  // obtiene el codigo ascii y convierte a mayusculas
/*function mnsj(){
  let mensajeObtenido= mensaje.value;
let mayuscula= mensajeObtenido.toUpperCase();
let mayus=mayuscula.charCodeAt();

for(let i=0; i<mayuscula.length; i++){
  let letraAscii=mayuscula.charCodeAt(i);
  let formula=(letraAscii-65+ offset)%26+65;
  let resultado= String.fromCharCode(formula);
  nuevoCifrado += resultado;
}
alert (nuevoCifrado);*/

};