var computerChoice = ["rock", "paper", "scissors"];
//scores
var pScore = 0;
var cScore = 0;

// runs when lets play button is clicked
$(".btn").on("click", function() {
  var classButton = this.classList;
  console.log(classButton);
  $(".intro").addClass("visibilityOut");
  $(".match").removeClass("visibilityOut");
});

// runs when button is clicked
$(".options button").click(function() {
  var playerChoice = $(this).text();
  //console.log(playerChoice);
  var computerInput = computerChoice[Math.floor(Math.random() * 3)];
  //  console.log(computerInput);
  $(".player-hand").addClass("animation");
  $(".computer-hand").addClass("animation2");
  setTimeout(function() {
    $(".player-hand").attr("src", "images/" + playerChoice + ".png");
    $(".computer-hand").attr("src", "images/" + computerInput + ".png");

    //removes animation so that next time button is pressed animation is added again.
    $(".player-hand").removeClass("animation");
    $(".computer-hand").removeClass("animation2");

    checkWinner(playerChoice, computerInput);
  }, 2000);
});

// checks choices to decide the winner
function checkWinner(playerChoice, computerInput) {
  // checks when user choice is rock
  if (playerChoice === "rock") {
    if (computerInput === "scissors") {
      $(".winner").text("Player Wins!");
      pScore++;
      updateScore();
    } else if (computerInput === "rock") {
      $(".winner").text("Draw!");
    } else {
      $(".winner").text("Computer Wins!");
      cScore++;
      updateScore();
    }
  }
  // checks when user choice is scissors
  if (playerChoice === "scissors") {
    if (computerInput === "paper") {
      $(".winner").text("Player Wins!");
      pScore++;
      updateScore();
    } else if (computerInput === "scissors") {
      $(".winner").text("Draw!");
    } else {
      $(".winner").text("Computer Wins!");
      cScore++;
      updateScore();
    }
  }
  // checks when user choice is paper
  if (playerChoice === "paper") {
    if (computerInput === "rock") {
      $(".winner").text("Player Wins!");
      pScore++;
      updateScore();
    } else if (computerInput === "paper") {
      $(".winner").text("Draw!");
    } else {
      $(".winner").text("Computer Wins!");
      cScore++;
      updateScore();
    }
  }
}
//update the score
function updateScore() {
  $(".player-score p").text(pScore);
  $(".computer-score p").text(cScore);
}
