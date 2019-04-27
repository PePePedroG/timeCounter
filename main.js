// Stoper 
let hours = document.querySelector('.counter__hours');
let minutes = document.querySelector('.counter__minutes');
let seconds = document.querySelector('.counter__seconds');
// Buttons
const startBtn = document.querySelector('.btnStart');
const clearBtn = document.querySelector('.btnClear');
const stopBtn = document.querySelector('.btnStop');
// Default time
let numberOfSeconds = 0;
let numberOfMinutes = 0;
let numberOfHours = 0;

let loop;
// Events
function stopCounting(){
    clearInterval(loop);
    return isStartCountingActive = false
};
let isStartCountingActive = false;
// Start
startBtn.addEventListener('click', function(){
    if(isStartCountingActive === false){
        startCounting();
        return isStartCountingActive = !isStartCountingActive;
    }
    else{
        return false
    }
});

function startCounting(){
    numberOfSeconds++;
    if(numberOfSeconds >= 10){
        if(numberOfSeconds == 60){
            numberOfSeconds = 0;
            seconds.textContent = `0${numberOfSeconds}`;
            updateMinutes();
        }
        else{
            seconds.textContent = numberOfSeconds;
        }
    }
    else{
        seconds.textContent = `0${numberOfSeconds}`;
    }
    
    
    loop = setTimeout(startCounting, 1000);
}

function updateMinutes(){
    numberOfMinutes++;
    if(numberOfMinutes >= 10){
        if(numberOfMinutes == 60){
            numberOfMinutes = 0;
            minutes.textContent = `0${numberOfMinutes}`;
            updateHours();
        }
        else{
            minutes.textContent = numberOfMinutes;
        }
    }
    else{
        minutes.textContent = `0${numberOfMinutes}`;
    }
}

function updateHours(){
    numberOfHours++;
    if(numberOfHours >= 10){
        hours.textContent = numberOfHours;
    }
    else{
        hours.textContent = `0${numberOfHours}`;
    }
}
//Stop
stopBtn.addEventListener('click', stopCounting);
 
//Clear
clearBtn.addEventListener('click', clearCounter);

function clearCounter(){
    numberOfSeconds = 0;
    numberOfMinutes = 0;
    numberOfHours = 0;
    seconds.textContent = `0${numberOfSeconds}`;       
    minutes.textContent = `0${numberOfMinutes}`;  
    hours.textContent = `0${numberOfHours}`;    
    return stopCounting();       
} 