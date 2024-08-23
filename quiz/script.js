const questions = [
    {
        question: " O que o Ruan valerio mais gosta de fazer?",
        options: ["ir na ingreja",  "trair a namorada", "babar ovo do pastor", "tocar punheta"],
        ansewer: "trair a namorada",
    },
    {
        question: "",
        options: "",
        ansewer: "",
    }, {
        question: "",
        options: "",
        ansewer: "",
    },
]

    const correctsound = document.getElementById('correct-sound');
    const incorrectsound = document.getElementById('incorrect-sound');
 
    let currentQuestionIndex = 0;
    let score = 0;

    function showModal(){
        
        const modal = document.getElementById('modal');
        const questionElement = document.getElementById('modal-question');
        const optionsElement = document.getElementById('modal-options');
        const nextButton = document.getElementById('next-question');
        const feedbackElement = document.getElementById('feedback');

        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.options.foreEach(option =>{
            const label = document.createElement('input');
            label.classList.add('option');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'option';
            input.value = 'option';

            label.appendChild(input);
            label.appendChild(document.createTextNode);
           optionsElement.appendChild(label);

        });

        feedbackElement.textContent = '';
        feedbackElement.classList.remove('correct', 'incorrect');
        modal.style.display = 'block';

    }

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                correctsound.play();
                score++;
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }
 
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };

    document.getElementById('event').addEventListener('click', () =>{
        document.getElementById('start').style.display =  'none';
        showModal();
    });
     
        document.getElementById('event').addEventListener('click', () =>{
            document.getElementById('modal').style.display =  'none';
    });
     
    window.onclick = (event) => {
        if (event.target == document.getElementById('modal')){
            document.getElementById('modal').style.display = 'none';
        }
    };