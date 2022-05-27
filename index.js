let secondsSpan = document.querySelector('#seconds'); 
let secondsValue = 0; // es el valor de los segundos 
let minutesSpan = document.querySelector('#minutes'); 
let minutesValue = 0; 



let currentChronometer = 0; 

function startChronometer(){
    currentChronometer = setInterval(() => {
        secondsValue += 1; 
        if(secondsValue === 60){
            secondsValue = 0; // el valor se resetea
            minutesValue += 1; // entonces sumamos 1 al minuto
        }else{

        }
        secondsSpan.textContent = ('0' + secondsValue).slice(-2) ;
        minutesSpan.textContent =('0' + minutesValue).slice(-2); // se agregan los minutos
    }, 1000);
}; // a la etiqueta second value, y al contenido que tenga como texto le pasaremos el valor de los segundos 

function stopChronometer (){
    clearInterval(currentChronometer); 
}// se manda denter la variable, no la funcion

/* function RESET  */

function resetIChronometer(){
    secondsValue = 00; 
    secondsSpan.textContent = secondsValue; 
    minutesValue = 00; 
    minutesSpan.textContent = minutesValue; 
}
