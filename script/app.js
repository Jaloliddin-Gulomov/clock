const $sec = document.querySelector("#sec");
const $min = document.querySelector("#min");
const $hour = document.querySelector("#hour");

setInterval(updateClock, 1000);
function updateClock() {
    let date = new Date(),
        sec = date.getSeconds() / 60,
        min = (date.getMinutes() + sec) / 60,
        hour = (date.getHours() + min) / 12;
    $sec.style.transform = "rotate(" + (sec * 360) + "deg)";
    $min.style.transform = "rotate(" + (min * 360) + "deg)";
    $hour.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();
