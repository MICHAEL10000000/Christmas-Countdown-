const seconds = document.querySelectorAll(".seconds")
const minutes = document.querySelectorAll(".minutes")
const hours = document.querySelectorAll(".hour")
const days = document.querySelectorAll(".day")

function christmasCountDown(){
    const today = new Date()
    const christmasDate = new Date( 2024, 11, 25, 0, 0, 0)
    const difference: number = christmasDate.getTime() - today.getTime() 



    const seconds_diff = Math.floor((difference % (1000 * 60))/ 1000)
    const minutes_diff = Math.floor((difference %(1000 * 60 * 60))/ (1000 * 60)) ///The amount of minute after removing the hour
    const hours_diff = Math.floor((difference % (1000 * 60 * 60 *24 ))/ (1000 * 60 * 60))
    const days_diff = Math.floor(difference /(1000 * 60 * 60 * 24))

    if (seconds && minutes && hours && days )
    {
        seconds.forEach(second => {
            if (second.textContent != seconds_diff.toString().padStart(2, '0')){                
                second.closest(".bottom")?.classList.add("animation")
            } else{
                second.closest(".bottom")?.classList.remove("animation")
           }
            second.textContent = seconds_diff.toString().padStart(2, '0')
        
        })
        minutes.forEach(minute => {
            if (minute.textContent !=  minutes_diff.toString().padStart(2, '0')){                
                minute.closest(".bottom")?.classList.add("animation")
                console.log(minute.textContent,  minutes_diff.toString().padStart(2, '0'))
            } else{
                minute.closest(".bottom")?.classList.remove("animation")
           }
            minute.textContent = minutes_diff.toString().padStart(2, '0')
           
        })
        hours.forEach(hour => {
            if (hour.textContent != hours_diff.toString().padStart(2, '0')){                
                hour.closest(".bottom")?.classList.add("animation")
            } else{
                hour.closest(".bottom")?.classList.remove("animation")
           }
            hour.textContent = hours_diff.toString().padStart(2, '0')

        })
       days.forEach(day => {
        if (day.textContent != days_diff.toString().padStart(2, '0')){                
            day.closest(".bottom")?.classList.add("animation")
        } else{
            day.closest(".bottom")?.classList.remove("animation")
       }
           day.textContent =days_diff.toString().padStart(2, '0')
        })
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

