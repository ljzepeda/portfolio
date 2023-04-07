// Point of Interaction 1: Message Pop Up (Alert) 
// "Home" Page

function welcomePopUp() {

    document.getElementById("hover-name").addEventListener("mouseover", messagePopUp);

    function messagePopUp() {
        alert("Welcome to my Portfolio! Thanks for taking a look.");
    }
}



// Point of Interaction 2: Background to Favorite Color (Toggle Off/On)
// "Resume" Page
function lightMode() {
    let lightModeBody = document.body;
    lightModeBody.classList.toggle("light-mode-body")
}


// Point of Interaction 3: Random Quote (Random Number)
// "Bio" Page 
const quotes = [
    'What is an interesting fact about myself? I am fasinated by murder stories.',
    'What are my hobbies? I like to cafe hop and collect video games and keyboards.',
    'What is my professional background? I have 7 1/2 years of working in tech.',
    'What is my biggest motivator in life? My 5 siblings and 3 cats.'
]


function randomQuote() {
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-div').innerHTML = quotes[randomNum];
}