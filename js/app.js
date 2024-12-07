"use strict";
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hour = document.querySelector(".hour");
const day = document.querySelector(".day");
function christmasCountDown() {
    const today = new Date();
    const christmasDate = new Date(2024, 11, 25, 0, 0, 0);
    const difference = christmasDate.getTime() - today.getTime();
    const seconds_diff = Math.floor((difference % (1000 * 60)) / 1000);
    const minutes_diff = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const hour_diff = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const day_diff = Math.floor(difference / (1000 * 60 * 60 * 24));
    if (seconds && minutes && hour && day) {
        seconds.textContent = seconds_diff.toString().padStart(2, '0');
        minutes.textContent = minutes_diff.toString().padStart(2, '0');
        hour.textContent = hour_diff.toString().padStart(2, '0');
        day.textContent = day_diff.toString().padStart(2, '0');
    }
}
setInterval(() => {
    christmasCountDown();
}, 1000);
