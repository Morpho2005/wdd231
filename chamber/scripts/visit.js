const visit = document.querySelector("#visit")
const msToDays = 86400000;
let lastVisit

if (localStorage.getItem('lastVisit') == null) {
    lastVisit = null
} else {
    lastVisit = localStorage.getItem('lastVisit')
}


if (lastVisit == null) {
    visit.textContent = "Welcome! Let us know if you have any questions."
} else if (Math.floor((Date.now() - Number(lastVisit)) / msToDays) < 1) {
    visit.textContent = "Back so soon! Awesome!"
} else {
    let daysmissed = Math.floor((Date.now() - Number(lastVisit)) / msToDays)
    if (daysmissed == 1) {
        visit.textContent = `You last visited ${daysmissed} day ago.`
    } else {
        visit.textContent = `You last visited ${daysmissed} days ago.`
    }
}

localStorage.setItem('lastVisit', String(Date.now()))