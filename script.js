let seconds= 00;
let tens= 00;
let mins=00;
let getMins=document.querySelector('.minutes')
let getSeconds= document.querySelector('.seconds')
let getTens= document.querySelector('.tens')
let btnStart= document.querySelector('.btn-start')
let btnStop= document.querySelector('.btn-stop')
let btnReset= document.querySelector('.btn-reset')
let interval

btnStart.addEventListener('click', ()=>{
    interval = setInterval(startTimer,10)
})

btnStop.addEventListener('click',()=>{
    clearInterval(interval)
})

btnReset.addEventListener('click',()=>{
    clearInterval(interval)
    tens='00'
    seconds='00'
    mins='00'
    getMins.innerHTML=mins;
    getSeconds.innerHTML=seconds;
    getTens.innerHTML=tens; 
})

function startTimer(){
    tens++;
    if(tens <=9){
        getTens.innerHTML='0'+tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }

    if(tens>99){
        seconds++;
        getSeconds.innerHTML='0'+seconds;
        tens=0;
        getTens.innerHTML='0' + 0;

    }

    if(seconds>9){
        getSeconds.innerHTML=seconds;
    }

    if(seconds>59){
        mins++;
        getMins.innerHTML='0'+mins;
        seconds=0;
        getSeconds.innerHTML=seconds+'0'

    }

    if(mins >9){
        getSeconds.innerHTML=mins
    }
}

