window.cipher = {
  encode: (desplazamiento, cifrar) => {
    let mayusculas = cifrar.toUpperCase(); //convirtiendo a mayusculas el mensaje ingresado.
    let nuevoCifrado = '';
    
    //aqui vamos a iterar el mensaje,convertir la letra a codigo ascii y aplicarle la formula,
    // convertir el resultado de la formula de nuevo a string
    // y obtener así el nuevo cifrado
    
    for (let i = 0; i < mayusculas.length; i++) {
      const letraAscii = mayusculas.charCodeAt(i);
      const formula = (letraAscii - 65 + parseInt(desplazamiento)) % 26 + 65;
      const resultado = String.fromCharCode(formula);
      nuevoCifrado += resultado;
    }
    return nuevoCifrado;
  },
   //función para decodificar el mensaje, basicamente se realizan los mismos pasos
   //y en la formula se invierte la resta por una suma y la suma por una resta.
  decode: (desplazamiento2, descifrar) => {
    let mayusculas = descifrar.toUpperCase();
    let mnsjDescifrado = '';

    for (let i = 0; i < mayusculas.length; i++) {
      const letraAscii = mayusculas.charCodeAt(i);
      const formulaDescifrar = (letraAscii + 65 - parseInt(desplazamiento2)) % 26 + 65;
      const resultado2 = String.fromCharCode(formulaDescifrar);
      mnsjDescifrado += resultado2;

    }
    return mnsjDescifrado
  }

};
