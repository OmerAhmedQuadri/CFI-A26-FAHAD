// question container
const questionContainer = document.getElementById('question-container')
const questionText = document.getElementById('question-text')
const choicelist = document.getElementById('choice-list')
const nextBtn = document.getElementById('next-btn')

// result container
const resultContainer = document.getElementById('result-container')
const scorePlace = document.getElementById('score')
const restartBtn = document.getElementById('restart-btn')

const startQuiz = document.getElementById('start-btn')

let index = 0
let score = 0

const questionsArr = [
    {
        question: "Who is the best footballer in the world?",
        choice: ["Cristiano Ronaldo", "Neymar", "Lionel Messi", "Fahad"],
        answer: "Fahad"
    },
    {
        question: "Who has the best fashion sense?",
        choice: ["David Beckham", "Zayn Malik", "Timothée Chalamet", "Fahad"],
        answer: "Fahad"
    },
    {
        question: "Who is most likely to become the richest?",
        choice: ["Elon Musk", "Mark Zuckerberg", "Jeff Bezos", "Fahad"],
        answer: "Fahad"
    }
];

startQuiz.addEventListener('click', () => {
    startQuiz.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion()
});

function showQuestion() {
    choicelist.innerHTML = '';
    nextBtn.classList.add('hidden')

    const currentQuestion = questionsArr[index]
    questionText.innerText = currentQuestion.question

    let selected = false;

    currentQuestion.choice.forEach((ele) => {
        const li = document.createElement('li')
        li.innerText = ele;

        li.addEventListener('click', () => {
            if (selected) return

            selected = true;
            li.classList.add('selected');


            if (ele == currentQuestion.answer) {
                score++
            }

            nextBtn.classList.remove('hidden')
        });

        choicelist.append(li)
    });

};

nextBtn.addEventListener('click', () => {
    index++
    if (index == questionsArr.length - 1) nextBtn.innerText = 'Submit'
    if (index == questionsArr.length) {
        results()
    } else {
        showQuestion()
    }
});

restartBtn.addEventListener('click', () => {
    index = 0
    score = 0
    resultContainer.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion()
});

function results() {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    scorePlace.innerText = `${score}/${questionsArr.length}`
};