let inputHours = document.querySelector("#input-hours");
let inputMinutes = document.querySelector("#input-min");
let inputSeconds = document.querySelector("#input-sec");

let hour =document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let startBtn = document.querySelector("#start-btn");
let stopBtn = document.querySelector("#stop-btn");
let resetBtn = document.querySelector("#reset-btn");

let h=0;
let m=0;
let s=0;

let timeUpdate;
let runningTimer = false;

const timerStarts = () =>{

    if(runningTimer){
        return;
    }

    runningTimer = true;
    
    h = Number(inputHours.value);
    m = Number(inputMinutes.value);
    s = Number(inputSeconds.value);

    hour.textContent = h.toString().padStart(2,"0");
    minute.textContent = m.toString().padStart(2,"0");
    second.textContent = s.toString().padStart(2,"0");

    timeUpdate = setInterval(() => {
        if(s>0){
        s = s - 1 ;
        }else if(m>0){
        m = m - 1 ;
        s = 59;
        }else if(h>0){
            h = h-1 ; 
            m = 59;
            s = 59;
        }
        second.textContent = s.toString().padStart(2,"0");
        minute.textContent = m.toString().padStart(2,"0");
        hour.textContent = h.toString().padStart(2,"0");

        if(h===0&&m===0&&s===0){
            clearInterval(timeUpdate);
            runningTimer = false;
            timeUpdate=null;
        }
    }, 1000);
}

const timerStops = () =>{
    clearInterval(timeUpdate);
    timeUpdate = null;
    runningTimer = false;
}

const timerResets = () =>{
    clearInterval(timeUpdate);
    runningTimer = false;

    h=0;
    m=0;
    s=0;

    hour.textContent = h.toString().padStart(2,"0");
    minute.textContent = m.toString().padStart(2,"0");
    second.textContent = s.toString().padStart(2,"0");

}
startBtn.addEventListener("click", timerStarts)
stopBtn.addEventListener("click",timerStops)
resetBtn.addEventListener("click",timerResets)