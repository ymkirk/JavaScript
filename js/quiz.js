// set up question and matching answer arrays
var triviaQuestion = ['What Color is the Sky?', 'What Planet do we live on?', 'What is The Abbreviation of Our school? (Hint: Brookhaven College)'];
var triviaAnswer = ['Blue', 'Earth', 'BHC'];

//quiz function 
function quizGame() {
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
            if (answer == triviaAnswer[i]) {
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
    // return the points variable
    return points;
} // end mathQuiz function

// To update variable w/o += amount look @25/26, 32-34, all are correct different ways to do it.