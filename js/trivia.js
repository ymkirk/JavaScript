// Date Object Method current time
var now = new Date();
var today = now.getDay();

/* create an array of month names and array of day names */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"];
// greeting
function returnGreeting() {
    hour= now.getHours();
    switch  (hour)  {
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return "Guten Morgen (Good Morning in German), "
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            return "Buena Tarde (Good Afternoon in Spanish), "
        case 17:
        case 18:
        case 19:
        case 20:
            return "Buonasera (Good Evening in Italian), "
        case 21:
        case 22:
        case 23:
        case 24:
        default:
            return "bonne nuit (Good Night in French), "
    }
}

// User Info
function validEmail(email) {
    var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var valid = email.match(emailRegex);
    return valid;
} 

// all caps return i feel like this is wrong
function majuscule(email) {
    // var majName = email.toUpperCase();
    majName = email.split("@");
    return majName[0].toUpperCase();
}


// Quote of the Day
var quotes = ['Aim for success not perfection', 'Either you run the day or the day runs you', 'Try Again, Fail again, Fail better',
'You can if you think you can', 'If you’re going through hell keep going'];

function quoteOTD() {
    var quoteIndex = Math.floor(Math.floor(Math.random()*4)+1);
    return quotes[quoteIndex];
}

// set up question and matching answer arrays
var triviaQuestion = ['What Color is the Sky?', 'What Planet do we live on?', 'What is The Abbreviation of Our school? (Hint: Brookhaven College)'];
var triviaAnswer = ['blue', 'earth', 'bhc'];


//quiz function 
function triviaQuiz() {
// initialize points
    var points = 0;

    //for loop
    for (i = 0; i <= 2; i++) {

        //set attempts to 3
        var attempts = 3;

        // use a while loop to give the user 3 attempts to answer
        while (attempts > 0) {

            // prompt user with trivia question
            answer = prompt("What is " + triviaQuestion[i]);
        
            // see if the answer matches the answer array
            if (answer.toLowerCase() == triviaAnswer[i]) {
                // if correct, add 3 to points, alert user and set attempts to 0
                // points = points + attempts;
                points += attempts;
                alert("Correct!");
                attempts = 0;
            } else {
                // if answer doesn't match, alert user and subtract 1 from attempts
                alert("Incorrect");
                // attempts = attempts - 1;
                // attempts -= 1;
                attempts--;
            } // end if
        } // end while
    } // end for
    var pointsPercentage = (points / 9 * 100).toFixed(2);
    // return the points variable
    return pointsPercentage;
} // end mathQuiz function

// To update variable w/o += amount look @25/26, 32-34, all are correct different ways to do it.