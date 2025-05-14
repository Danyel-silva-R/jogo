let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "Conjunto A = {1, 2, 3}, Conjunto B = {3, 4, 5}. Qual é a interseção entre A e B?",
        options: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3}"],
        answer: 1
    },
    {
        question: "Conjunto A = {a, e, i}, Conjunto B = {i, o, u}. Qual é a união entre A e B?",
        options: ["{a, e, i, o, u}", "{a, i, u}", "{i}", "{o, u}"],
        answer: 0
    },
    {
        question: "Se A = {1,2,3} e B = {2,3,4}, qual é A - B?",
        options: ["{1}", "{2}", "{4}", "{2,3}"],
        answer: 0
    },
    {
        question: "Qual símbolo representa interseção?",
        options: ["∪", "⊂", "∩", "∈"],
        answer: 2
    },
    {
        question: "A = {x | x é número par menor que 6}. Qual o conjunto?",
        options: ["{2, 4, 6}", "{0, 2, 4}", "{1, 3, 5}", "{2, 4}"],
        answer: 1
    },
    {
        question: "Se A ⊂ B, isso significa que:",
        options: ["A é igual a B", "A está fora de B", "A é subconjunto de B", "A é maior que B"],
        answer: 2
    }
];

function startQuiz() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('questionBox').classList.remove('hidden');
    document.getElementById('total').textContent = questions.length;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    document.getElementById('current').textContent = currentQuestion + 1;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const feedback = document.getElementById("feedback");
    if (selected === q.answer) {
        score += 10;
        feedback.textContent = "✅ Acertou!";
        document.getElementById('correctSound').play();
    } else {
        score -= 5;
        feedback.textContent = "❌ Errou!";
        document.getElementById('wrongSound').play();
    }
    document.querySelectorAll("#options button").forEach(btn => btn.disabled = true);
    document.getElementById("nextBtn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("feedback").textContent = "";
    document.getElementById("nextBtn").classList.add("hidden");
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("questionBox").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("scoreFinal").textContent = score;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("questionBox").classList.remove("hidden");
    showQuestion();
}