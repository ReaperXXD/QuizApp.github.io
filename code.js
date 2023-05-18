// Quiz questions
const questions = [
  {
    question: "What is the largest ocean in the world?",
    choices: [
      "Pacific Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the capital of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    choices: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan",
  },
  {
    question: "Which is the longest river in the world?",
    choices: [
      "Nile River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Nile River",
  },
  {
    question: "Which is the largest country by land area?",
    choices: ["United States", "China", "Russia", "India"],
    answer: "Russia",
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest",
  },
  {
    question: "Which city is the capital of Spain?",
    choices: ["Madrid", "Barcelona", "Seville", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "Which is the largest desert in the world?",
    choices: [
      "Sahara Desert",
      "Gobi Desert",
      "Kalahari Desert",
      "Atacama Desert",
    ],
    answer: "Sahara Desert",
  },
  {
    question: "Which country is famous for the Great Wall?",
    choices: ["China", "India", "Italy", "Egypt"],
    answer: "China",
  },
  {
    question: "What is the official language of Brazil?",
    choices: ["English", "Portuguese", "Spanish", "French"],
    answer: "Portuguese",
  },
];

const quizContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-btn");

function generateQuiz() {
  questions.forEach((question, index) => {
    const questionElem = document.createElement("div");
    questionElem.className = "question";
    questionElem.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

    question.choices.forEach((choice) => {
      const label = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${index}`;
      radio.value = choice;

      label.appendChild(radio);
      label.appendChild(document.createTextNode(choice));
      questionElem.appendChild(label);
    });

    quizContainer.appendChild(questionElem);
  });
}

function checkAnswers() {
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(
      `input[name="question-${index}"]:checked`
    );

    if (selectedOption && selectedOption.value === question.answer) {
      score++;
    }
  });

  const result = `You scored ${score} out of ${questions.length} questions.`;
  alert(result);
}

function highlightSelectedOption() {
  const labels = document.querySelectorAll(".question label");

  labels.forEach((label) => {
    const radio = label.querySelector("input[type='radio']");

    radio.addEventListener("click", function () {
      labels.forEach((l) => l.classList.remove("selected"));
      label.classList.add("selected");
    });
  });
}

generateQuiz();
highlightSelectedOption();
submitButton.addEventListener("click", checkAnswers);
