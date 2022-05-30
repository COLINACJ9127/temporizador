let secondsSpan = document.querySelector('#seconds'); 
let secondsValue = 0; // es el valor de los segundos 
let minutesSpan = document.querySelector('#minutes'); 
let minutesValue = 0; 
let buttonTimer = document.querySelector('#timer-button'); 
let hero = document.querySelector('#principal'); 


let currentButton = true;  // (2) declaramos una variable en blacno 
let currentInterval = 0; 

function formatValue(value){        //  funcion utlizada para los minutesSpan and secondsSpan
    return ('0' + value ).slice(-2); 
}

function startChronometer(){
    currentButton = event.target; //envet.target es donde estamos haciendo click en este momento
    currentButton.disabled = true; // (2)una vez iniciada esta funcion, este se desactivará
    currentInterval = setInterval(() => {
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
    currentButton.disabled = false; //(2) ahora desactivmos el curretnButton
    clearInterval(currentInterval); 
}// se manda denter la variable, no la funcion

/* function RESET  */

function resetIChronometer(){
    secondsValue = 0; //Solo se muestran los 2 ultimos numeros
    secondsSpan.textContent = secondsValue; 
    minutesValue = 0; 
    minutesSpan.textContent = minutesValue; 
   stopChronometer(); // llamamos StopChronometer para que no siga despues del reset
}



/*  vamos a trbajar con los botones header */


function startTimer(){ 
    event.preventDefault(); // si tienes un comportamiento por decfeto, no lo hagas. (button-submit)   
    const minutes = parseInt(event.target.minutes.value) ; // entramos al valor sobreEscrito del imnput a travez de name
    const seconds = parseInt(event.target.seconds.value); // con partesInt los hacamos numeros enteros

    minutesSpan.textContent = minutes; // variable tomada del id="minutes"del span
    secondsSpan.textContent = seconds; 
    
    secondsValue = seconds;
    minutesValue = minutes; 

    setInterval(() => {
        secondsValue -= 1;

        if(secondsValue == -1){
            secondsValue = 59;
            minutesValue -= 1
        }

        if(minutesValue ==0 & secondsValue == 0){ // cuando lleguen a cero, vamos a detener el intervalo
            clearInterval(currentInterval);     // entonces se ejectua esto
        }


        secondsSpan.textContent = formatValue(secondsValue); // se agregan los segundos 
        minutesSpan.textContent =formatValue(minutesValue); // se agregan los minutos

    }, 100);
    
  
}
function executeTimer(){ 
    hero.innerHTML = `
        <h1 class="hero--title" > TIMER </h1>
        <div class="hero--time">
            <p id="time"> <span id="minutes">00</span> <span>:</span> <span id="seconds">00</span>  </p>
        </div>

        <div class="buttons-play-stop">
            <div class="hero--buttons">
               <form onsubmit="startTimer()" > 
                    <input type="number" placeholder="escribe los minutos" id="minutsInput" name="minutes">  
                    <input type="number" placeholder="escribe los segundos" id="secondsInput" name="seconds"> 
                    <button type="submit" class="button" > start </button>
               </form> 
            
            </div>
        </d `; 

        secondsSpan = document.querySelector('#seconds');   
        minutesSpan = document.querySelector('#minutes'); 
       console.log(secondsSpan, minutesSpan); 

}; 
