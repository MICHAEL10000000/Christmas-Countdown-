const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")
const hour = document.querySelector(".hour")
const day = document.querySelector(".day")

function christmasCountDown(){
    const today = new Date()
    const christmasDate = new Date( 2024, 11, 25, 0, 0, 0)
    const difference: number = christmasDate.getTime() - today.getTime() 



    const seconds_diff = Math.floor((difference % (1000 * 60))/ 1000)
    const minutes_diff = Math.floor((difference %(1000 * 60 * 60))/ (1000 * 60)) ///The amount of minute after removing the hour
    const hour_diff = Math.floor((difference % (1000 * 60 * 60 *24 ))/ (1000 * 60 * 60))
    const day_diff = Math.floor(difference /(1000 * 60 * 60 * 24))

    if (seconds && minutes && hour && day )
    {
        seconds.textContent = seconds_diff.toString().padStart(2, '0')
        minutes.textContent = minutes_diff.toString().padStart( 2, '0')
        hour.textContent = hour_diff.toString().padStart(2, '0')
        day.textContent = day_diff.toString().padStart(2, '0')
    }
}
setInterval(() => {
    christmasCountDown()
}, 1000);

//differnces in milliseconds between christmas day and today date
//what is needed majorly is the difference
// Also you can always keep gettin the current date every milliseconds



/* function decreaseSeconds(){
    if (seconds && seconds?.innerHTML != "00") {
        seconds.innerHTML = (parseInt(seconds?.innerHTML) - 1).toString().padStart(2, '0')
    }
}
function decreaseMinutes(){
    if (minutes && seconds && minutes?.innerHTML != "00") {
        minutes.innerHTML = (parseInt(minutes?.innerHTML) - 1).toString().padStart(2, '0')
        seconds.innerHTML = "60"
    } 
}
function decreaseHour(){
    if (hour && minutes && hour?.innerHTML != "00") {
        hour.innerHTML = (parseInt(hour?.innerHTML) - 1).toString().padStart(2, '0')
        minutes.innerHTML = "60"
    } 
}
function decreaseDay(){
    if (day && hour && day?.innerHTML != "00") {
        day.innerHTML = (parseInt(day?.innerHTML) - 1).toString().padStart(2, '0')
        hour.innerHTML = "24"
    } 
}

setInterval(() => {
decreaseSeconds()
}, 1000); 
setInterval(() => {
decreaseMinutes()
}, 60000); 
setInterval(() => {
decreaseHour()
}, 3600000); 
setInterval(() => {
decreaseDay()
}, 7200000);  */

