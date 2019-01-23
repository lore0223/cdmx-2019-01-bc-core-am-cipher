window.cipher = {
  encode: (desplazamiento, cifrar) => {
     
    let nuevoCifrado = '';
    
    //aqui vamos a iterar el mensaje,convertir la letra a codigo ascii y aplicarle la formula,
    // convertir el resultado de la formula de nuevo a string
    // y obtener así el nuevo cifrado
    
    for (let i = 0; i < cifrar.length; i++) {
      const letraAscii = cifrar.charCodeAt(i);

       if(letraAscii>=65 && letraAscii<= 90){
        const formula=(letraAscii - 65 + parseInt(desplazamiento)) % 26 + 65;
        const resultado=String.fromCharCode(formula);
        nuevoCifrado += resultado;
      }
      else if(letraAscii>=97 && letraAscii <=122){
      const formula = (letraAscii - 97 + parseInt(desplazamiento)) % 26 + 97;
      const resultado = String.fromCharCode(formula);
      nuevoCifrado += resultado;
    }
    else{
      const resultado=String.fromCharCode(letraAscii);
      nuevoCifrado += resultado;
    }
    
  }
  return nuevoCifrado;
},
   //función para decodificar el mensaje, basicamente se realizan los mismos pasos
   //y en la formula se invierte la resta por una suma y la suma por una resta.
  decode: (desplazamiento2, descifrar) => {
    let mnsjDescifrado = '';

    for (let i = 0; i < descifrar.length; i++) {
      const letraAscii = descifrar.charCodeAt(i);

       if(letraAscii >= 65 && letraAscii <= 90){
        const formulaDescifrar=(letraAscii+ 65 - parseInt(desplazamiento2)) % 26 + 65;
        const resultado= String.fromCharCode(formulaDescifrar);
        mnsjDescifrado += resultado;
    
      }
      else if (letraAscii >= 97 && letraAscii <= 122){
      const formulaDescifrar = (letraAscii-122-parseInt(desplazamiento2)) % 26 + 122;
      const resultado= String.fromCharCode(formulaDescifrar);
      mnsjDescifrado += resultado;
    }
   else{
     const resultado=String.fromCharCode(letraAscii);
     mnsjDescifrado += resultado;
   }

    
    
  }
  return mnsjDescifrado;
  }
};
