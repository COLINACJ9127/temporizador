let secondsSpan = document.querySelector('#seconds'); 
let minutesSpan = document.querySelector('#minutes'); 
let buttonTimer = document.querySelector('#timer-button'); 

let hero = document.querySelector('#principal'); 


        /* Se declara el valor delos segundos y los minutos */
let secondsValue = 0;  
let minutesValue = 0; 

let currentButton = true;  // (2) declaramos una variable en blacno 
let currentInterval = 0; 

function formatValue(value){        //  funcion utlizada para los minutesSpan and secondsSpan
    return ('0' + value ).slice(-2); 
};


/* function                             s   t   a   r   t    chronometer */

function startChronometer(){
    currentButton = event.target; //envet.target es donde estamos haciendo click en este momento
    currentButton.disabled = true; // (2)una vez iniciada esta funcion, este se desactivará
    currentInterval = setInterval(() => {
        secondsValue += 1; 
        if(secondsValue === 60){
            secondsValue = 0; // el valor se resetea
            minutesValue += 1; // entonces sumamos 1 al minuto
        };
        secondsSpan.textContent = formatValue(secondsValue) ;
        minutesSpan.textContent =formatValue(minutesValue); // se agregan los minutos
    }, 1000);
}; // a la etiqueta second value, y al contenido que tenga como texto le pasaremos el valor de los segundos 

/* funcition                        s   t   o   p    */

function stopChronometer (){
    currentButton.disabled = false; //(2) ahora desactivmos el curretnButton
    clearInterval(currentInterval); 
};// se manda denter la variable, no la funcion



/* function                         R   E   S   E   T  */

function resetIChronometer(){
    secondsValue = 0; 
    secondsSpan.textContent = secondsValue; 
    minutesValue = 0; 
    minutesSpan.textContent = minutesValue; 
   stopChronometer();
};



/* function                         e   x   e   c   u   t   e   -    chronometer  */

function executeChronometer(){
    
    hero.innerHTML = `
    <h1 class="hero--title" > CRONOMETRO</h1>
    <div class="hero--time">
    <p id="time"> <span id="minutes">00</span> <span>:</span> <span id="seconds">00</span>  </p>
    </div>
    
    <div class="buttons-play-stop">
    <div class="hero--buttons">
    <button onclick="startChronometer()" class="button header--butons" type="button"> <i class="fa-solid fa-play"></i> </button>
    <button onclick="stopChronometer ()" class="button header--butons" type="button"> <i class="fa-solid fa-stop"></i></button>
    <button onclick="resetIChronometer()" class="button header--butons" type="button"> <p>Reset</p> </button>
    
    </div>
    </div>
    `;
    secondsSpan = document.querySelector('#seconds'); 
    minutesSpan = document.querySelector('#minutes'); 
}; 




/*                                      Excecute        t   i   m   e   r */
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
                    <button type="submit" class="button" > <i class="fa-solid fa-play"></i> </button>
               </form> 
            
            </div>
        </d `; 

        secondsSpan = document.querySelector('#seconds');  // #clse seconds del span dentro de hero--time
        minutesSpan = document.querySelector('#minutes');   //clase #minutes del span dentro de hero--time
       

}; 


/*                                      Excecute        P   o   m   o   d   o   r   o */
function executePomodoro(){ 
    hero.innerHTML = `
        <h1 class="hero--title" > P O M O D O R O </h1>
        <div class="hero--time">
            <p id="time"> <span id="minutes">00</span> <span>:</span> <span id="seconds">00</span>  </p>
        </div>

        <div class="buttons-play-stop">
            <div class="hero--buttons">
               <form onsubmit="startTimer()" > 
                    <button type="button" class="button" onclick="startPomodoro()" > <i class="fa-solid fa-play"></i></button>
            </div>
        </d `;                          // agregamos l funcion onclick="startPomodoro"

        secondsSpan = document.querySelector('#seconds');  // #clse seconds del span dentro de hero--time
        minutesSpan = document.querySelector('#minutes');   //clase #minutes del span dentro de hero--time
      

}; 

/*  FUNCTION                    P   O   M   O   D   O   R   O */

    function startPomodoro(){
        currentButton = event.target; //envet.target es donde estamos haciendo click en este momento
    currentButton.disabled = true; // (2)una vez iniciada esta funcion, este se desactivará
        secondsValue = 0; 
        minutesValue = 25; 

        currentInterval = setInterval(() => { // declaramos un intervalo, en la variable currentInterval
            secondsValue -= 1;
    
            if(secondsValue == -1){
                secondsValue = 59;
                minutesValue -= 1
            };
    
            if(minutesValue === 0 & secondsValue === 0){ // cuando lleguen a cero, vamos a detener el intervalo
                const container = document.querySelector('.hero--title');
                const title = document.createElement("h2"); // vamos a crear un h2
                title.textContent = 'El pomodoro ha terminado'; // este es el contenido de h2
                secondsValue = 0;
                minutesValue = 0; 
                container.appendChild(title); // y va ubicado dentro de container
                clearInterval(currentInterval); // deteneos el intervalo llamado currentIntreval
            };
    
    
            secondsSpan.textContent = formatValue(secondsValue); // se agregan los segundos 
            minutesSpan.textContent =formatValue(minutesValue); // se agregan los minutos
    
        }, 100);
        
        
    };



/*  FUNCTION                    T   I   M   E   R */


function startTimer(){ 
    event.preventDefault(); // si tienes un comportamiento por decfeto, no lo hagas. (button-submit)   
    const minutes = parseInt(event.target.minutes.value) ; // entramos al valor sobreEscrito del imnput a travez de name
    const seconds = parseInt(event.target.seconds.value); // con partesInt los hacamos numeros enteros

    minutesSpan.textContent = minutes; //minutes span es igual a los minutos ingresdos al input
    secondsSpan.textContent = seconds; 
    
    secondsValue = seconds; // secondsValue es igual al valor ingresado en el input seconds Eti.Name
    minutesValue = minutes; 

     currentInterval = setInterval(() => { // declaramos un intervalo, en la variable currentInterval
        secondsValue -= 1;

        if(secondsValue == -1){
            secondsValue = 59;
            minutesValue -= 1
        };

        if(minutesValue === 0 & secondsValue === 0){ // cuando lleguen a cero, vamos a detener el intervalo
            const container = document.querySelector('.hero--title');
            const title = document.createElement("h2"); // vamos a crear un h2
            title.textContent = 'El timer ha terminado'; // este es el contenido de h2
            secondsValue = 0;
            minutesValue = 0; 
            container.appendChild(title); // y va ubicado dentro de container
            clearInterval(currentInterval); // deteneos el intervalo llamado currentIntreval
        };


        secondsSpan.textContent = formatValue(secondsValue); // se agregan los segundos 
        minutesSpan.textContent =formatValue(minutesValue); // se agregan los minutos

    }, 100);
    
  
}

