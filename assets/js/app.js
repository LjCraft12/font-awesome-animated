// Break chain animation
function breakChain() {
    let chain = document.getElementById('chain');
    chain.innerHTML = "&#xf0c1";

    setTimeout(function () {
        chain.innerHTML = "&#xf127";
    }, 1000)
}
// Call animation function
breakChain();

// Animate Every 2 seconds
setInterval(breakChain, 2000);

// Battery Charge Animation
function chargeBattery() {
    let battery = document.getElementById('battery');
    battery.innerHTML = "&#xf244";

    setTimeout(function () {
        battery.innerHTML = "&#xf243";
    },500);
    setTimeout(function () {
        battery.innerHTML = "&#xf242";
    },1000);
    setTimeout(function () {
        battery.innerHTML = "&#xf241";
    },1500);
    setTimeout(function () {
        battery.innerHTML = "&#xf240";
    },2000)
}

chargeBattery();

setInterval(chargeBattery,2500);

function hourGlass() {
    let glass = document.getElementById('hourglass');
    glass.innerHTML = "&#xf251";

    setTimeout(function () {
        glass.innerHTML = "&#xf252"
    },1000)
    setTimeout(function () {
        glass.innerHTML = "&#xf253"
    },2000)
}

hourGlass()

setInterval(hourGlass, 3000)