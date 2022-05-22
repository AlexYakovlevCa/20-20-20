let timer = 19
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
            document.querySelector('body').classList.add('red')
            clearInterval(timerInt)
            setTimeout(()=>{
                window.close()

            },20000)
        }
        elTimer.innerText = timer.toLocaleString()
          timer --
      },1000)
      setTimeout(()=>{
        window.close()
      },90000)
}
function startTimerKeyBoard(ev){
    if(ev.code!== 'Space') return
    startTimer(ev)
}