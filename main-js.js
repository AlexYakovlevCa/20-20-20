let timer = 20
const elTimer = document.querySelector('.timer')
const elBtn = document.querySelector('button')
let timerInt;


function onInit(){
    document.addEventListener("keydown", startTimerKeyBoard)
    elBtn.addEventListener('click',startTimer)
}


function startTimer(){
 
    if(timerInt)return
   
     timerInt =  setInterval(()=>{ 
        if(timer===0){
            clearInterval(timerInt)
        }
        elTimer.innerText = timer.toLocaleString()
          timer --
      },1000)
}
function startTimerKeyBoard(ev){
    if(ev.code!== 'Space') return
    startTimer(ev)
}