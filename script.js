

const myApp = {};
// this stores the user's name from the landing page

myApp.submitLandingForm = function () {
    $('.landingPage form').on('submit', function (event) {
        event.preventDefault();
        myApp.userName = $('.landingPage input[type=text').val();
        if (myApp.userName !== '') {
            $('.landingPage').addClass('hideLanding');
            $('main').removeClass('hideMain');
            $('.mainHed').append(`<h2>Right, of course. So, ${myApp.userName}, have you voted yet?</h2>`);
        }
        else if (myApp.userName == '') {
            $('.warningMessage').html(`<h3>YOU NEED TO USE A NAME. COME ON. FOLLOW THE INSTRUCTIONS.</h3>`)
        }
    })
}
myApp.userName = $('.landingPage input[type=text').val();

// this is the smooth scroll function
myApp.scrollTo = function (location) {
    $('html, body').animate({
        scrollTop: $(location).offset().top
    }, 800)
}

// this function is what happens when user either clicks yes
myApp.userPressedYes = function (event) {
    $('.mainButtons input.yesButton').on('click touch', function (event) {
        $('.yesQuestion1').css("height", "100vh").html(myApp.yesQuizQuestion1);
        let audio = $("#taDa")[0];
        audio.play();
        myApp.scrollTo("#yesQuiz1");
        $('input.yesButton').off("click touch");
    })
}
myApp.userPressedNo = function (event) {
    $('.mainButtons input.noButton').on('click touch', function (event) {
        $('.noQuestion1').css("height", "100vh").html(myApp.noQuizQuestion1);
        myApp.scrollTo("#noQuiz1");
        let audio = $("#booSound")[0];
        audio.play();
        $('input.noButton').off("click touch");
    })
}

myApp.showResultYes = function(){
    $('.yes').on('click touch', 'input#submitYesQuiz1', function(e){
        e.preventDefault();
        console.log(myApp.userName);
        let userChoice = $('#yesQuiz1 input[type=radio][name=yesQuiz1]:checked').val();
        if (userChoice === 'yes1'){
            $('.yesResult1').css("height", "100vh").html(myApp.yesResult1);
        }
        else if (userChoice === 'no1') {
            $('.yesResult1').css("height", "100vh").html(myApp.yesResult2);
        }
        else if (userChoice === 'yes2') {
            $('.yesResult1').css("height", "100vh").html(myApp.yesResult3);
        }
        $('input.yesButton').off("click touch");

        myApp.scrollTo("#yesResults")

    })
}

myApp.showResultNo = function() {
    $('.no').on('click', 'input#submitNoQuiz1', function (e) {
        e.preventDefault();
        let userChoice = $('#noQuiz1 input[type=radio][name=noQuiz1]:checked').val();
        console.log(userChoice);
        if (userChoice === 'noResponse1') {
            $('.noResult1').css("height", "100vh").html(myApp.noResult1);
        }
        else if (userChoice === 'noResponse2') {
            $('.noResult1').css("height", "100vh").html(myApp.noResult2);
        }
        if (userChoice === 'noResponse3') {
            $('.noResult1').css("height", "100vh").html(myApp.noResult3);
        }
        $('input.noButton').off("click");
        myApp.scrollTo("#noResults")
    })
}

myApp.yesQuizQuestion1 = `<form action=""><fieldset>
                                <legend>Well, look at you! Did you take a selfie at the polling station?</legend>
                                <div><input type="radio" name="yesQuiz1" id="yes1" value="yes1">
                                <label for="yes1">Of course I did!</label></div>
                                <div><input type="radio" id="no1" name="yesQuiz1" value="no1">
                                <label for="no1">No, selfies are pain.</label></div>
                                <div><input type="radio" id="yes2" name="yesQuiz1" value="yes2">
                                <label for="yes2">I wanted to, but couldn't because the polling officer said ~PRIVACY~ is important.</label></div>
                                <label for="submitYesQuiz1"></label>
                                <input type="submit" id="submitYesQuiz1" name="yesQuiz1" value="Submit">
                            </fieldset>
                        </form>`;
// this is a property containing the html markup for the first question in the NO path
myApp.noQuizQuestion1 = `<form action=""><fieldset>
                                <legend>Uh, what? Did you just say you didn't vote, ${myApp.userName}?</legend>
                                <div><input type="radio" name="noQuiz1" id="no1" value="noResponse1">
                                <label for="no1">You heard me. I'm throwing my vote away.</label></div>
                                <div><input type="radio" id="no2" name="noQuiz1" value="noResponse2">
                                <label for="no2">I really want to, but I just can't find five minutes for an event that shapes my entire future.</label></div>
                                <div><input type="radio" id="no3" name="noQuiz1" value="noResponse3">
                                <label for="no3">Sorry, I can't finish this quiz, I'm too busy DESTROYING DEMOCRACY.</label></div>
                                <label for="submitNoQuiz1"></label>
                                <input type="submit" id="submitNoQuiz1" name="noQuiz1" value="Submit">
                            </fieldset>
                        </form>`;
// these are the three possible results in the YES path

myApp.yesResult1 = `<h2>Whoa! You've fulfilled your basic responsibilities as a citizen! Congratulations, ${myApp.userName}!</h2> <p>Why not go above and beyond and remind your friends to vote?</p><i class="fab fa-twitter"></i><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Whoa! I'm a responsible citizen, according to https://www.HaveYouVotedYet.ca!">Share this achievement on Twitter!</a>`;

myApp.yesResult2 = `<h2>Nice! You've fulfilled your basic responsibilities as a citizen.</h2><p>And if that wasn't enough, you also refuse to partake in social media trends! Congratulations, ${myApp.userName}!</p><p>Why not go above and beyond and remind your friends to vote?</p><i class="fab fa-twitter"></i><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Whoa! I'm a responsible citizen, according to https://www.HaveYouVotedYet.ca!">Share this achievement on Twitter!</a>`;

myApp.yesResult3 = `<h2>Are you telling me you respect democracy <em>and</em> an individual's right to privacy?</h2> <p>Wow, ${myApp.userName}, you're a pillar of hope for society!</p><p>Why not go above and beyond and remind your friends to vote?</p><br><i class="fab fa-twitter"></i><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Whoa! I'm a responsible citizen, according to https://www.HaveYouVotedYet.ca!">Share this achievement on Twitter!</a>`;


// this the HTML markup for when user finishes the NO path

myApp.noResult1 = `<h2 class="noResultDynamic">Your mother and I are extremely disappointed in you, ${myApp.userName}.</h2><p>It's not too late, so get out there and VOTE! You can find all the important information on what kind of ID you need and where to go below. GET TO IT!</p><a href="https://www.elections.ca/homeGE.aspx">Find all the info you need on the federal election here.</a>
<a href="https://www.elections.ca/content2.aspx?section=reg&document=index&lang=e">Not sure if you're registered? Go here, POST HASTE.</a>
<a href="https://www.elections.ca/homeGE.aspx">Want to know which riding your in? This tool is your friend.</a>`;

myApp.noResult2 = `<h2>Too busy. Got it. OK. Makes sense. We all lead busy lives I suppo-</h2><br><p>WHAT DO YOU MEAN YOU'RE TOO BUSY, ${myApp.userName} ? Get out there and VOTE! You can find all the info on what kind of ID you need and where to go below. GET TO IT!</p><a href="https://www.elections.ca/homeGE.aspx">Find all the info you need on the federal election here.</a>
<a href="https://www.elections.ca/content2.aspx?section=reg&document=index&lang=e">Not sure if you're registered? Go here, POST HASTE.</a>
<a href="https://www.elections.ca/homeGE.aspx">Want to know which riding your in? This tool is your friend.</a>`;

myApp.noResult3 = `<h2>Really, ${myApp.userName}? I know you don't mean that.</h2> 
<p>You're just afraid of greatness, aren't you?
Now get out there and VOTE! You can find all the info on what kind of ID you need and where to go below. GET TO IT!</p><a href="https://www.elections.ca/homeGE.aspx">Find all the info you need on the federal election here.</a>
<a href="https://www.elections.ca/content2.aspx?section=reg&document=index&lang=e">Not sure if you're registered? Go here, POST HASTE.</a>
<a href="https://www.elections.ca/homeGE.aspx">Want to know which riding your in? This tool is your friend.</a>`;

myApp.init = function(){
    myApp.submitLandingForm();
    myApp.userPressedYes();
    myApp.userPressedNo();
    myApp.showResultYes();
    myApp.showResultNo();
    
}

$(document).ready(function(){
    myApp.init();
    let scroll = new SmoothScroll('a[href*="#"]');
})

// set up a prompt asking for user's name on page load.

// save that name as a variable to be used in the H1, which should read 'Have you voted yet, ${userName}?`
// Set up an event listener for the YES button being submitted
// when pressed, YES should slide the other button away/out of the DOM.
// pressing YES should also smooth scroll down the page. 
// pressing YES should also set off a sound and animation
// Fade in elements already set up in the HTML markup, like images, headings and paragraphs.
// the YES button should also add links to share the website.



// the NO button, when clicked, will fade out the YES button.
// It will then smooth scroll down the page.
// pressing NO will also set off a sound and animation.
// It should then fade in elements already in the html markup