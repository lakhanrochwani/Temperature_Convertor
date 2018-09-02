var celciusInput= document.querySelector('#celcius > input');
var fahrehneitInput = document.querySelector('#fahrehneit > input');
var kelvinInput = document.querySelector('#kelvin > input');
function roundNum(x){
  return Math.round(x * 100)/100;
}

function CelciusToFahrehneitAndKelvin() {
  var cTemp = parseFloat(celciusInput.value);
  var fTemp=(cTemp * 1.8) + 32;
  var kTemp= cTemp + 273.15;
  fahrehneitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}
function FahrehneitToCelciusAndKelvin(){
  var faTemp = parseFloat(fahrehneitInput.value);
  var ceTemp = (faTemp - 32)/1.8;
  var keTemp = ((faTemp-32)/1.8) + 273.15;
  celciusInput.value = roundNum(ceTemp);
  kelvinInput.value = roundNum(keTemp);
}
function KelvinToFahrehneitAndCelcius(){
  var ktempo = parseFloat(kelvinInput.value);
  var ftempo = ((ktempo - 273.15)*1.8) + 32;
  var ctempo = (ktempo - 273.15);
  celciusInput.value = roundNum(ctempo);
  fahrehneitInput.value = roundNum(ftempo);
}


celciusInput.addEventListener('input',CelciusToFahrehneitAndKelvin);
fahrehneitInput.addEventListener('input',FahrehneitToCelciusAndKelvin);
kelvinInput.addEventListener('input',KelvinToFahrehneitAndCelcius);



// ℉=(℃*1.8)+32
// K=℃+273.15
//
// ℃=(℉-32)/1.8
// K=((℉-32)/1.8)+273.15
//
// ℉=((K-273.15)*1.8)+32
// ℃=K-273.15
