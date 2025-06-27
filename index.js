const startE1 = document.getElementById("start")
const stopE1 = document.getElementById("stop")
const resetE1 = document.getElementById("reset")
const TimerE1 = document.getElementById("Timer")

let interval ;
let timeLeft = 1500;

function updateTime(){
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2,"0")}  :  ${seconds.toString().padStart(2,"0")}`

    TimerE1.innerHTML = formattedTime;
}

function startTime(){
    if(interval) return;
    interval = setInterval(() => {
        timeLeft--;
        updateTime();
        if(timeLeft === 0){
            clearInterval(interval);
            interval = null ;
            alert("time's up !");
            timeLeft = 1500;
            updateTime();
        }
       
    },1000);
}
function stopTime(){
    clearInterval(interval);
    interval = null;
    
}
function resetTime(){
    clearInterval(interval)
    interval = null;
    timeLeft = 1500;
    updateTime();
}


startE1.addEventListener("click", startTime)
stopE1.addEventListener("click",stopTime)
resetE1.addEventListener("click",resetTime)
