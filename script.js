let step = 1;
let answers = [];

function nextStep(answer) {
  answers.push(answer);

  let question = document.getElementById("question");
  let choices = document.getElementById("choices");

  if (step === 1) {
    question.innerHTML = "Choose an animal:";

    choices.innerHTML = `
      <button onclick="nextStep('1')">🐷</button>
      <button onclick="nextStep('2')">🐳</button>
      <button onclick="nextStep('3')">🕷️</button>
      <button onclick="nextStep('4')">🦊</button>
    `;

    step++;
  } else if (step === 2) {
    question.innerHTML = "Choose an emotion:";

    choices.innerHTML = `
      <button onclick="nextStep('star')">(˶˃ ᵕ ˂˶)</button>
      <button onclick="nextStep('eye')">˙𐃷˙</button>
      <button onclick="nextStep('heart')">(˶˃⤙˂˶)</button>
      <button onclick="nextStep('cloud')">(っ- ‸ - ς)</button>
    `;

    step++;
  } else if (step === 3) {
    showFortune();
  }
}

function showFortune() {
  let question = document.getElementById("question");
  let choices = document.getElementById("choices");
  let fortune = document.getElementById("fortune");
  let restart = document.getElementById("restart");

  let fortunes = [
    "You will have a delicous meal soon.",
    "I see money in your future.",
    "You will make a new friend in the next week.",
    "Be cautious of the spider hiding in your room.",
    "Good luck is headed your way.",
    "Your fortune is buffering..."
  ];

  let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  question.innerHTML = "Your fortune is:";
  choices.innerHTML = "";
  fortune.innerHTML = randomFortune;
  restart.style.display = "inline-block";
}

function restartGame() {
  step = 1;
  answers = [];

  document.getElementById("question").innerHTML = "Pick a color:";

  document.getElementById("choices").innerHTML = `
    <button onclick="nextStep('orange')">Orange</button>
    <button onclick="nextStep('blue')">Blue</button>
    <button onclick="nextStep('green')">Green</button>
    <button onclick="nextStep('pink')">Pink</button>
  `;

  document.getElementById("fortune").innerHTML = "";
  document.getElementById("restart").style.display = "none";
}