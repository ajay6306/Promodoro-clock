var breakTime=300;
var sessiontime=1500;
var clockType="session";
var clockTime=sessiontime;
var clockRunning= false;
let breakIndicator=document.querySelector("#break-indicator");
let sessionIndicator=document.querySelector("#session-indicator");
let clockCounter=document.querySelector("#clock-counter");

var inMinSec=function(time){
    var m=Math.floor(time/60);
    var s= time % 60; 

    if(s<10){
        s='0'+ s.toString();
    }
    return m+ ':' +s;
}
var updateClockCounter = function(){
    clockCounter.innerText= inMinSec(clockTime);
}
var resetApp= function(){
    breakTime=parseInt(breakIndicator.value)*60;
    sessiontime=parseInt(sessionIndicator.value)*60;
    clockTime=sessiontime;
    clockType='session';
    clocklable.innerText='session';
    clockbutton.innerText='start';
    updateClockCounter();
}
// parseInt(sessionIndicator.value) * 60
 updateClockCounter();
 
 let clocklable=document.querySelector("#clock-lable");
 let clockbutton=document.querySelector("#clock-button");
 let resetbutton=document.querySelector("#reset-button");

 var countdown=function(){
    if(clockTime >0 && clockRunning){
        clockTime-=1;
        updateClockCounter();
        
    }
    else if(clockTime==0 && clockRunning){
        if(clockType==='session'){
            clocklable.innerText="Break";
            clockType='break';
            clockTime=breakTime;
            alert("Take Break !")
        }
        else{
            clocklable.innerText="Session";
            clockType='session';
            clockTime=sessiontime;
            alert("Start work !")
        }
    }

 }
 var countdownID
 clockbutton.addEventListener('click', function(){
    if(!clockRunning){
        clockRunning=true;
        countdownID = window.setInterval(countdown,1000);
        clockbutton.innerText='Pause';
    }
    else{
        clockRunning=false;
        clockbutton.innerText='start';
        window.clearInterval(countdownID);
    }
 })
 resetbutton.addEventListener('click', function(){
    clockRunning=false;
    resetApp();
 })