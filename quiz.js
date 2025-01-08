const questions = [
    {
        question: "What is the capital of France?",
        options: {
            A: "Paris",
            B: "Berlin",
            C: "Madrid",
            D: "Rome"
        },
        answer: "A"
    },
    {
        question: "Which language is used for web development?",
        options: {
            A: "Python",
            B: "Java",
            C: "JavaScript",
            D: "C++"
        },
        answer: "C"
    },
    {
        question: "Who developed the theory of relativity?",
        options: {
            A: "Isaac Newton",
            B: "Albert Einstein",
            C: "Nikola Tesla",
            D: "Galileo Galilei"
        },
        answer: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: {
            A: "Earth",
            B: "Mars",
            C: "Jupiter",
            D: "Saturn"
        },
        answer: "B"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');

function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    questionContainer.textContent = questionObj.question;

    const options = questionObj.options;
    const buttons = optionsContainer.querySelectorAll('.option-btn');

    // Set button text to the options
    Object.keys(options).forEach((key, index) => {
        buttons[index].textContent = `${key}: ${options[key]}`;
    });

    // Hide the result container and show the options
    resultContainer.style.display = "none";
    optionsContainer.style.display = "flex";
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Incorrect!";
    }

    // Show the result and hide options
    resultContainer.style.display = "block";
    optionsContainer.style.display = "none";
    nextBtn.style.display = "block"; // Show next button
}

function nextQuestion() {
    // Move to the next question or end quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextBtn.style.display = "none"; // Hide next button
    } else {
        document.getElementById('quiz').innerHTML = "<h2>Quiz Finished</h2>";
        scoreDisplay.textContent = `Final Score: ${score}`;
    }
}

loadQuestion();
