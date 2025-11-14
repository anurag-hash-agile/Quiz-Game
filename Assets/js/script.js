const questions = [
  {
    question: "Which method adds an element at the end of an array?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0 
  },
  {
    question: "What will console.log(2 + '2') show?",
    answers: ["22", "4", "NaN", "undefined"],
    correct: 0 
  },
  {
    question: "What is typeof 42?",
    answers: ["string", "number", "boolean", "object"],
    correct: 1 
  },
  {
  question: "Which function converts a string to an integer in JavaScript?",
  answers: ["parseInt()", "Number()", "toString()", "parseFloat()"],
  correct: 0 
  },
  {
  question: "Which HTML tag is used to link an external JavaScript file?",
  answers: ["<js>", "<script>", "<link>", "<code>"],
  correct: 1 
  }
];

let currentQuestion = 0;
let score = 0;
let time = 10;

function showQuestion() {
  if (currentQuestion >= questions.length) {
    endQuiz();
    return;
  }
  const q = questions[currentQuestion];
  
  document.getElementById("question").textContent = q.question;
  const labels = document.querySelectorAll("#options label");
  const inputs = document.querySelectorAll("#options input");
  
  for (let i = 0; i < 4; i++) {
    labels[i].textContent = q.answers[i];
    inputs[i].checked = false;
  }
  time = 10;
  document.getElementById("timer").textContent = `Time:${time}`
  
  timer = setInterval(function() {
    time = time - 1;
    document.getElementById("timer").textContent =  `Time:${time}`
    if (time <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

showQuestion();

function nextQuestion() {
  const inputs = document.querySelectorAll("#options input");
  const q = questions[currentQuestion];
  for (let i = 0; i < 4; i++) {
    if (inputs[i].checked === true) {
      if (i === q.correct) {
        score = score + 1;
      }
    }
  }
  document.getElementById("score").textContent = `Score:${score}`
  currentQuestion = currentQuestion + 1;
  showQuestion();
}

function endQuiz() {
  document.getElementById("question").textContent = "Quiz Finished!";
  document.getElementById("options").innerHTML = `<h3>Total Score: ${score}/${questions.length}</h3>`;
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("timer").style.display = "none";
}
let nextbutton = document.getElementById("next-btn");
nextbutton .addEventListener("click", nextQuestion);