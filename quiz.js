const questions = [
    {
        question: "Which famous computer scientist is known for her work on the first algorithm intended for implementation on a computer, making her one of the first programmers?",
        options: ["Ada Lovelace", "Margaret Hamilton", "Jean E. Sammet", "Barbara Liskov"],
        answer: "Ada Lovelace"
    },
    {
        question: "Which of the following programming languages is known for its use in data science and machine learning?",
        options: ["Java", "Python", "C++", "Ruby"],
        answer: "Python"
    },
    {
        question: "Who is known as the father of modern computing and conceptualized the idea of a universal machine?",
        options: ["Alan Turing", "John von Neumann", "Charles Babbage", "Ada Lovelace"],
        answer: "Alan Turing"
    },
    {
        question: `What does the term "responsive web design" refer to?`,
        options: [" Designing for multiple browsers", "Creating websites that adapt to different screen sizes", "Using server-side programming", "Optimizing websites for search engines"],
        answer: "Creating websites that adapt to different screen sizes"
    },
    {
        question: "Which JavaScript library is known for simplifying HTML document traversing, event handling, and animation?",
        options: ["React", "Angular", "jQuery", "Vue.js"],
        answer: "jQuery"
    },
    {
        question: `What does the "box model" in CSS represent?`,
        options: ["The dimensions of a web browser", "The structure of HTML elements", "The layout of elements including margins, borders, padding, and content", "The hierarchy of CSS selectors"],
        answer: "The layout of elements including margins, borders, padding, and content"
    },
    {
        question: "What is the function of the DOMContentLoaded event in JavaScript?",
        options: ["To signal the entire page, including stylesheets and images, has loaded", "To signal that the initial HTML document has been completely loaded and parsed", "To initiate animations", "To handle form submissions"],
        answer: "To signal that the initial HTML document has been completely loaded and parsed"
    },
    {
        question: "Which HTML5 feature allows for playing audio and video directly in the browser?",
        options: ["<media>", "<audio> and <video>", "<stream>", "<file>"],
        answer: "<audio> and <video>"
    },
    {
        question: "Which algorithm is primarily used for searching an element in a sorted array?",
        options: ["Linear Search", "Binary Search", "Jump Search", "Interpolation Search"],
        answer: "Binary Search"
    },
    {
        question: `Which of the following best describes "agile methodology" in software development?`,
        options: [" A linear approach with a fixed timeline", "A flexible approach focused on iterative development and collaboration", "A prototype approach to software development","A strategy for large-scale projects only"],
        answer: "A flexible approach focused on iterative development and collaboration"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    if (isCorrect) {
        score++;
    }

    const optionsButtons = document.querySelectorAll('.option');
    optionsButtons.forEach(button => {
        if (button.innerText === currentQuestion.answer) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';

    const percentage = (score / questions.length) * 100;
    let remarks = '';
    let emoji = '';

    if (percentage === 100) {
        remarks = "Outstanding performance! 🎉";
        emoji = "🎖️";
    } else if (percentage >= 75) {
        remarks = "Great job! 🌟";
        emoji = "🏆";
    } else if (percentage >= 50) {
        remarks = "Good effort! 👍";
        emoji = "🥈";
    } else {
        remarks = "Better luck next time! 🤞";
        emoji = "😢";
    }

    scoreElement.innerHTML = `You scored ${score} out of ${questions.length}. ${emoji}<br>${remarks}`;

    scoreElement.style.display = 'block';
}

showQuestion();
