function converter() {
    
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let unidadeConvertida;
    let temperaturaConvertida;

    if (isNaN(temperatura)){
      alert("Digite uma temperatura");
      return;
    }
    if(origem === "Celsius"){
      if(destino === "Fahrenheit") { 
        temperaturaConvertida = (temperatura * 9/5) + 32;
      } else if(destino === "Kelvin"){
        temperaturaConvertida = temperatura + 273.15;       
      } else {
        temperaturaConvertida = temperatura;
      }
    }
    
    if(origem === "Fahrenheit"){
      if(destino === "Celsius") { 
        temperaturaConvertida = (temperatura - 32) * 5/9;
      } else if(destino === "Kelvin"){
        temperaturaConvertida = (temperatura - 32) * 5/9 + 273.15;       
      } else {
        temperaturaConvertida = temperatura;
      }
    }

    if(origem === "Kelvin"){
      if(destino === "Celsius") { 
        temperaturaConvertida = temperatura - 273.15;
      } else if(destino === "Fahrenheit"){
        temperaturaConvertida = (temperatura - 273.15) * 9/5 +32;       
      } else {
        temperaturaConvertida = temperatura;
      }
    }
    
    if(destino === 'Kelvin'){
      unidadeConvertida = 'K';
    } else if(destino === 'Celsius'){
      unidadeConvertida = '°C';
    } else {
      unidadeConvertida = '°F';
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<span>${temperaturaConvertida.toFixed(2)} ${unidadeConvertida}</span>`;
  }