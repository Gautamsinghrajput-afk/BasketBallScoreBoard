let homeEl = document.getElementById("display-content-home");
let guestEl = document.getElementById("display-content-guest");


let homeScore = 0;
let guestScore = 0;


// homeEl.innerText =homeScore ;
// scoreEl.innerText= guestScore;



function homeIncrementOne(){
  homeScore +=1;
  homeEl.textContent = homeScore;
}
function homeIncrementTwo(){
  homeScore +=2;
  homeEl.textContent = homeScore;
}
function homeIncrementThree(){
  homeScore +=3;
  homeEl.textContent = homeScore;
}

function guestIncrementOne(){
  guestScore +=1;
  guestEl.textContent = guestScore;
}
function guestIncrementTwo(){
  guestScore +=2;
  guestEl.textContent = guestScore
}
function guestIncrementThree(){
  guestScore +=3;
  guestEl.textContent = guestScore
}

function clearScore(){
  homeScore = 0;
  guestScore= 0;
  homeEl.textContent = homeScore;
  guestEl.textContent = guestScore

}