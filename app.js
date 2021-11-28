window.onload = showTime()
window.onload = showDay()




function showTime() {
    let time = new Date()
    document.querySelector("#hour").innerHTML = time.getHours()
    document.querySelector("#minute").innerHTML = time.getMinutes()
    document.querySelector("#second").innerHTML = time.getSeconds()


    setTimeout('showTime()', 1000)
}

function showDay(){
    let date = new Date()
    document.querySelector("#day").innerHTML = date.getDate()
    document.querySelector("#month").innerHTML += date.getMonth() + 1 
    document.querySelector("#year").innerHTML += date.getFullYear()
}
