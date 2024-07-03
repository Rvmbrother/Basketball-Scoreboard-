let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let resetButtonEl = document.getElementById("resetBtn");

function updateScore(scoreboard, points) {
  let currentScore = parseInt(scoreboard.textContent);
  currentScore += points;
  scoreboard.textContent = currentScore;
  updateHighlight();
}

function updateHighlight() {
  let homeScore = parseInt(homeScoreEl.textContent);
  let guestScore = parseInt(guestScoreEl.textContent);
  let homeSection = document.querySelector(".home-score .score-background");
  let guestSection = document.querySelector(".guest-score .score-background");

  if (homeScore > guestScore) {
    homeSection.classList.add("highlight");
    guestSection.classList.remove("highlight");
  } else if (guestScore > homeScore) {
    guestSection.classList.add("highlight");
    homeSection.classList.remove("highlight");
  } else {
    homeSection.classList.remove("highlight");
    guestSection.classList.remove("highlight");
  }
}

function reset() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
  updateHighlight();
}

resetButtonEl.addEventListener("click", reset);

// Add event listeners to buttons
document.querySelectorAll("button.adderBtn").forEach((button) => {
  button.addEventListener("click", function () {
    const team = this.getAttribute("data-team");
    const points = parseInt(this.querySelector(".adderBtnText").textContent);
    if (team === "home") {
      updateScore(homeScoreEl, points);
    } else if (team === "guest") {
      updateScore(guestScoreEl, points);
    }
  });
});

updateHighlight();
