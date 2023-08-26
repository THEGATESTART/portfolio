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
    var sidebar = document.querySelector('.side-bar');
    sidebar.classList.toggle('open');
}

// Show swiper box
document.getElementById("show-box").addEventListener('click', showBox)

function showBox() {
    var morebox = document.getElementById("moreBox").classList.add("show")
}

// Close swiper box
document.getElementById("close-box").addEventListener('click', closeBox)

function closeBox() {
    var morebox = document.getElementById("moreBox").classList.remove("show")
}

//Start Form validation
let nameError = document.getElementById('name-error');
let mailError = document.getElementById('mail-error');
let subjectError = document.getElementById('subject-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    let nameval = document.getElementById('name').value;
    let name = document.getElementById('name');
    let failue = document.getElementById('failue-name');

    if(nameval.length == 0) {
        nameError.innerHTML = "Name is required.";
        name.style.border = "2px solid red";
        failue.style.display = "block";
        failue.classList.add("fa-solid", "fa-circle-exclamation");
        failue.classList.remove("fa-circle-check");
        nameError.style.display = "block";
        return false;
    }
    if(!nameval.match(/^[A-Za-z0-9]*\s[A-Za-z0-9]*$/)) {
        nameError.innerHTML = "Write full name.";
        nameError.style.display = "block";
        name.style.border = "2px solid red";
        failue.style.display = "block";
        failue.classList.add("fa-solid", "fa-circle-exclamation");
        failue.classList.remove("fa-circle-check");
        return false;
    }
    
    nameError.style.display = "none";
    name.style.border = "2px solid seagreen";
    failue.style.display = "block";
    failue.classList.remove("fa-solid", "fa-circle-exclamation");
    failue.classList.add("fa-solid", "fa-circle-check");
    return true;
}

function validateEmail() {
    let emailval = document.getElementById('email').value;
    let email = document.getElementById('email');
    let failue = document.getElementById('failue-mail');

    if(emailval.length == 0) {
        mailError.innerHTML = "Email is required.";
        email.style.border = "2px solid red";
        failue.style.display = "block";
        failue.classList.add("fa-solid", "fa-circle-exclamation");
        failue.classList.remove("fa-circle-check");
        mailError.style.display = "block";
        return false;
    }
    if(!emailval.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mailError.innerHTML = "Write full Email.";
        mailError.style.display = "block";
        email.style.border = "2px solid red";
        failue.style.display = "block";
        failue.classList.add("fa-solid", "fa-circle-exclamation");
        failue.classList.remove("fa-circle-check");
        return false;
    }

    mailError.style.display = "none";
    email.style.border = "2px solid seagreen";
    failue.style.display = "block";
    failue.classList.remove("fa-solid", "fa-circle-exclamation");
    failue.classList.add("fa-solid", "fa-circle-check");
    return true;
}

function validateSubject() {
    let subjectval = document.getElementById('subject').value;
    let subject = document.getElementById('subject');
    let failue = document.getElementById('failue-subject');

    if(subjectval.length == 0) {
        subjectError.innerHTML = "Subject is required.";
        subject.style.border = "2px solid red";
        failue.style.display = "block";
        failue.classList.add("fa-solid", "fa-circle-exclamation");
        failue.classList.remove("fa-circle-check");
        subjectError.style.display = "block";
        return false;
    }

    subjectError.style.display = "none";
    subject.style.border = "2px solid seagreen";
    failue.style.display = "block";
    failue.classList.remove("fa-solid", "fa-circle-exclamation");
    failue.classList.add("fa-solid", "fa-circle-check");
    return true;
}

function validateMessage() {
    let messageval = document.getElementById('message').value;
    let message = document.getElementById('message');
    let failue = document.getElementById('failue-message');
    let require = 30;
    var leftMes = require - messageval.length;

    if(leftMes > 0) {
        messageError.innerHTML = leftMes + " more charecters required.";
        message.style.border = "2px solid red";
        failue.style.display = "block";
        failue.classList.add("fa-solid", "fa-circle-exclamation");
        failue.classList.remove("fa-circle-check");
        messageError.style.display = "block";
        return false;
    }

    messageError.style.display = "none";
    message.style.border = "2px solid seagreen";
    failue.style.display = "block";
    failue.classList.remove("fa-solid", "fa-circle-exclamation");
    failue.classList.add("fa-solid", "fa-circle-check");
    return true;
}

function validateForm() {
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error to send message.";
        setTimeout(function(){
            submitError.style.display = "none";
        }, 5000);
        return false;
    }
    if(validateName() && validateEmail() && validateSubject() && validateMessage()) {        
        const formEl = document.querySelector('.form-send');
        
        formEl.addEventListener('click', event => {
            event.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            }
    
            fetch("email.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then(function(response){
                return response.text();
            }).then(function(data){
                console.log(data)
                // location.reload();
            })
            .catch(error => {
                console.log("Error: ", error);
            })
        });
    }
}
// End form validate