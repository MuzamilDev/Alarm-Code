function currentTime(){
    let date = new Date();
    let now = date.toLocaleString('en-US', {hour12: false});
    document.getElementById('currentTime').innerHTML = now;

}
setInterval(currentTime,1);

var alarmSound = new Audio("./assets/mixkit-tech-house-vibes-130.mp3");

function setAlarm(){
    let alarmTime = document.getElementById('alarmTime').value;
    let now = new Date();
    let alarm = new Date(now.toDateString() + " " + alarmTime);
    let remaining = alarm - now;
    setTimeout(playAlarm, remaining);

    document.getElementById('alarmTime').disabled = true;
}

function playAlarm(){
    alarmSound.play();
    document.getElementById('alarmTime').disabled = false;
}