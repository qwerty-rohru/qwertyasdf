// script.js

let currentQuestionIndex = 0;
const questions = [
    {
        question: "Do you struggle with anxiety?",
        id: "question1"
    },
    {
        question: "Do you find it difficult to manage your emotions?",
        id: "question2"
    },
    {
        question: "Do you often feel overwhelmed?",
        id: "question3"
    },
    {
        question: "Are you easily distracted during work or study?",
        id: "question4"
    },
    {
        question: "Do you have trouble staying motivated?",
        id: "question5"
    }
];

// Function to handle login submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login success (replace with actual login logic)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Assuming login is successful for demonstration
    if (email && password) {
        // Navigate to questions page
        navigateToQuestions();
    } else {
        alert('Please enter valid credentials.');
    }
});

// Initial navigation to questions after login
function navigateToQuestions() {
    renderQuestion(currentQuestionIndex);
}

// Render current question
function renderQuestion(index) {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="question-page">
            <h1>${questions[index].question}</h1>
            <div class="answer-buttons">
                <button class="answer-btn" data-answer="yes">Yes</button>
                <button class="answer-btn" data-answer="no">No</button>
            </div>
        </div>
    `;
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => {
        button.addEventListener('click', handleAnswerClick);
    });
}

// Handle answer button click
function handleAnswerClick(event) {
    const answer = event.target.dataset.answer;
    // Logic to handle answer (store, navigate to next question, etc.)
    alert(`User selected: ${answer}`);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion(currentQuestionIndex);
    } else {
        displayQuoteOfTheDay();
    }
}

// Function to display quote of the day (dummy function)
function displayQuoteOfTheDay() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="quote-page">
            <h1>Quote of the Day</h1>
            <p>Here goes the motivational quote fetched from API</p>
            <button onclick="navigateToMainHub()">Continue</button>
        </div>
    `;
}

// Example function to navigate to main hub page (to be implemented)
function navigateToMainHub() {
    alert('Navigate to main hub page');
    // Implement navigation logic or further actions here
}
