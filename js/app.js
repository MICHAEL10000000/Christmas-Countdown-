"use strict";
const seconds = document.querySelectorAll(".seconds");
const minutes = document.querySelectorAll(".minutes");
const hours = document.querySelectorAll(".hour");
const days = document.querySelectorAll(".day");
function christmasCountDown() {
    const today = new Date();
    const christmasDate = new Date(2024, 11, 25, 0, 0, 0);
    const difference = christmasDate.getTime() - today.getTime();
    const seconds_diff = Math.floor((difference % (1000 * 60)) / 1000);
    const minutes_diff = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const hours_diff = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days_diff = Math.floor(difference / (1000 * 60 * 60 * 24));
    if (seconds && minutes && hours && days) {
        seconds.forEach(second => {
            var _a, _b;
            if (second.textContent != seconds_diff.toString().padStart(2, '0')) {
                (_a = second.closest(".bottom")) === null || _a === void 0 ? void 0 : _a.classList.add("animation");
            }
            else {
                (_b = second.closest(".bottom")) === null || _b === void 0 ? void 0 : _b.classList.remove("animation");
            }
            second.textContent = seconds_diff.toString().padStart(2, '0');
        });
        minutes.forEach(minute => {
            var _a, _b;
            if (minute.textContent != minutes_diff.toString().padStart(2, '0')) {
                (_a = minute.closest(".bottom")) === null || _a === void 0 ? void 0 : _a.classList.add("animation");
                console.log(minute.textContent, minutes_diff.toString().padStart(2, '0'));
            }
            else {
                (_b = minute.closest(".bottom")) === null || _b === void 0 ? void 0 : _b.classList.remove("animation");
            }
            minute.textContent = minutes_diff.toString().padStart(2, '0');
        });
        hours.forEach(hour => {
            var _a, _b;
            if (hour.textContent != hours_diff.toString().padStart(2, '0')) {
                (_a = hour.closest(".bottom")) === null || _a === void 0 ? void 0 : _a.classList.add("animation");
            }
            else {
                (_b = hour.closest(".bottom")) === null || _b === void 0 ? void 0 : _b.classList.remove("animation");
            }
            hour.textContent = hours_diff.toString().padStart(2, '0');
        });
        days.forEach(day => {
            var _a, _b;
            if (day.textContent != days_diff.toString().padStart(2, '0')) {
                (_a = day.closest(".bottom")) === null || _a === void 0 ? void 0 : _a.classList.add("animation");
            }
            else {
                (_b = day.closest(".bottom")) === null || _b === void 0 ? void 0 : _b.classList.remove("animation");
            }
            day.textContent = days_diff.toString().padStart(2, '0');
        });
    }
}
setInterval(() => {
    christmasCountDown();
}, 1000);
