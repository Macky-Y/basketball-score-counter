let homeScoreEl = document.getElementById("score-home");
let guestScoreEl = document.getElementById("score-guest");

let guestCurrentScore = 0;
let homeCurrentScore = 0;

function homePlusOne (){
    homeCurrentScore += 1;
    homeScoreEl.textContent = homeCurrentScore;
}

function homePlusTwo (){
    homeCurrentScore += 2;
    homeScoreEl.textContent = homeCurrentScore;
}

function homePlusThree (){
    homeCurrentScore += 3;
    homeScoreEl.textContent = homeCurrentScore;
}

function guestPlusOne (){
    guestCurrentScore += 1;
    guestScoreEl.textContent = guestCurrentScore;
}

function guestPlusTwo (){
    guestCurrentScore += 2;
    guestScoreEl.textContent = guestCurrentScore;
}

function guestPlusThree (){
    guestCurrentScore += 3;
    guestScoreEl.textContent = guestCurrentScore;
}

function newGame() {
    guestCurrentScore = 0;
    homeCurrentScore = 0;
    guestScoreEl.textContent = guestCurrentScore;
    homeScoreEl.textContent = homeCurrentScore;
    document.getElementById("winner").textContent = "";
    document.querySelector("#score-home").style.backgroundColor = "#000";
    document.querySelector("#score-guest").style.backgroundColor = "#000";
    enableButtons();
}

function endGame() {
    if(homeCurrentScore > guestCurrentScore) {
        document.getElementById("winner").textContent = "Home Team Won!"
        document.querySelector("#score-home").style.backgroundColor = "#6bb300";
        disableButtons();
    }
    else if (homeCurrentScore < guestCurrentScore) {
        document.getElementById("winner").textContent = "Guest Team Won!"
        document.querySelector("#score-guest").style.backgroundColor = "#6bb300";
        disableButtons();
    }
    else {
        document.getElementById("winner").textContent = "Match Draw!"
        document.querySelector("#score-home").style.backgroundColor = "#00b3b3";
        document.querySelector("#score-guest").style.backgroundColor = "#00b3b3";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("home-plus1").disabled = true;
    document.getElementById("home-plus2").disabled = true;
    document.getElementById("home-plus3").disabled = true;
    document.getElementById("guest-plus1").disabled = true;
    document.getElementById("guest-plus2").disabled = true;
    document.getElementById("guest-plus3").disabled = true;
}

function enableButtons () {
    document.getElementById("home-plus1").disabled = false;
    document.getElementById("home-plus2").disabled = false;
    document.getElementById("home-plus3").disabled = false;
    document.getElementById("guest-plus1").disabled = false;
    document.getElementById("guest-plus2").disabled = false;
    document.getElementById("guest-plus3").disabled = false;
}