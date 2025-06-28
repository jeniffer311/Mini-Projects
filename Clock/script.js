let ampm=document.getElementById('ampm')
function displayTime(){
    let today=new Date()
    let hrs=today.getHours()
    let mins=padZero(today.getMinutes())
    let secs=padZero(today.getSeconds())
    if(hrs>12){
        hrs-=12
        ampm.innerHTML='PM'
    }
    document.getElementById('hours').innerHTML=padZero(hrs)
    document.getElementById('minutes').innerHTML=mins
    document.getElementById('seconds').innerHTML=secs
}
function padZero(num){
    return num<10?'0'+num:num
}
setInterval(displayTime,500)