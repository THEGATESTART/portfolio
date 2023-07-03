// Function progress language
function progressBarThai() {
    let progressBar = document.querySelector(".circular-progress");
    let langPercent = document.querySelector(".lang-percent");

    let progressPercent = 0;
    let progressEndVal = 100;
    let speed = 14;

    let progress = setInterval(() => {
        progressPercent++;
        langPercent.textContent = `${progressPercent}%`;
        progressBar.style.background = `conic-gradient(
            #f46258 ${progressPercent * 3.6}deg,
            #c0c0c0 ${progressPercent * 3.6}deg)`;
        if (progressPercent == progressEndVal) {
            clearInterval(progress);
        }
    }, speed);
}
progressBarThai();

function progressBarEng() {
    let progressBar = document.querySelector(".circular-progressE");
    let langPercent = document.querySelector(".lang-percentE");
    
    let progressPercent = 0;
    let progressEndVal = 40;
    let speed = 15;

    let progress = setInterval(() => {
        progressPercent++;
        langPercent.textContent = `${progressPercent}%`;
        progressBar.style.background = `conic-gradient(
            #f46258 ${progressPercent * 3.6}deg,
            #c0c0c0 ${progressPercent * 3.6}deg)`;
        if (progressPercent == progressEndVal) {
            clearInterval(progress);
        }
    }, speed);
}
progressBarEng();


// Function text typing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["web interface.", "web application."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
	if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Side bar toggle 
function toggleSidebar() {
    console.log("safas")
    var sidebar = document.querySelector('.side-bar');
    sidebar.classList.toggle('open');
}