const questions = [
    {
        "question": "Qual é a principal marca de motocicletas japonesa?",
        "options": ["Yamaha", "Kawasaki", "Honda", "Suzuki"],
        "answer": "Honda"
    },
    {
        "question": "Qual é o tipo de motocicleta projetada para terrenos off-road?",
        "options": ["Chopper", "Cruiser", "Dirt Bike", "Sport Bike"],
        "answer": "Dirt Bike"
    },
    {
        "question": "Qual modelo da Harley-Davidson é conhecido por seu design clássico?",
        "options": ["Sportster", "Softail", "Road Glide", "Iron 883"],
        "answer": "Softail"
    },
    {
        "question": "Qual é a cilindrada média de uma moto esportiva de alta performance?",
        "options": ["250cc", "600cc", "750cc", "1000cc"],
        "answer": "1000cc"
    },
    {
        "question": "O que significa a sigla ABS em motocicletas?",
        "options": ["Anti-lock Braking System", "Automatic Brake System", "Advanced Braking System", "Active Brake Sensor"],
        "answer": "Anti-lock Braking System"
    },
    {
        "question": "Qual componente de uma moto é responsável pela absorção de impactos na suspensão?",
        "options": ["Amortecedor", "Radiador", "Filtro de óleo", "Sistema de escapamento"],
        "answer": "Amortecedor"
    },
    {
        "question": "Qual marca é conhecida por suas motos de luxo e alta cilindrada?",
        "options": ["BMW", "Kawasaki", "Suzuki", "Ducati"],
        "answer": "BMW"
    },
    {
        "question": "Qual é o tipo de moto que é frequentemente utilizada para viagens de longa distância?",
        "options": ["Dirt Bike", "Cruiser", "Sport Bike", "Touring"],
        "answer": "Touring"
    },
    {
        "question": "Qual é o propósito de um slider de quadro em uma motocicleta?",
        "options": ["Melhorar a aerodinâmica", "Proteger o quadro em caso de queda", "Aumentar a velocidade máxima", "Reduzir o peso da moto"],
        "answer": "Proteger o quadro em caso de queda"
    },
    {
        "question": "Qual é o principal benefício dos pneus de motocicleta com cravos?",
        "options": ["Melhor desempenho em estrada seca", "Maior durabilidade", "Melhor aderência em superfícies molhadas ou geladas", "Mais velocidade"],
        "answer": "Melhor aderência em superfícies molhadas ou geladas"
    },
    {
        "question": "Qual tipo de moto é conhecido por seu design personalizado e geralmente com guidão alto?",
        "options": ["Chopper", "Cruiser", "Sport Bike", "Touring"],
        "answer": "Chopper"
    },
    {
        "question": "Qual é o principal benefício de uma moto com transmissão de câmbio contínuo (CVT)?",
        "options": ["Melhor controle de torque", "Menos manutenção", "Mais eficiência de combustível", "Mudança de marchas mais suave"],
        "answer": "Mudança de marchas mais suave"
    },
    {
        "question": "Qual é o propósito principal de um escapamento em uma motocicleta?",
        "options": ["Reduzir o ruído do motor", "Melhorar a aerodinâmica", "Aumentar a potência do motor", "Diminuir o consumo de combustível"],
        "answer": "Reduzir o ruído do motor"
    },
    {
        "question": "Qual componente da moto é responsável pelo controle da mistura de ar e combustível?",
        "options": ["Carburador", "Radiador", "Amortecedor", "Filtro de ar"],
        "answer": "Carburador"
    },
    {
        "question": "Qual é o nome dado ao tipo de motocicleta que combina características de touring e esportiva?",
        "options": ["Cruiser", "Sport Touring", "Chopper", "Dirt Bike"],
        "answer": "Sport Touring"
    },
    {
        "question": "Qual tipo de suspensão é comumente encontrado em motos esportivas?",
        "options": ["Suspensão dianteira telescópica", "Suspensão traseira de mola", "Suspensão de braço oscilante", "Suspensão dupla"],
        "answer": "Suspensão dianteira telescópica"
    },
    {
        "question": "Qual é a principal função do sistema de freios em uma motocicleta?",
        "options": ["Reduzir a velocidade", "Aumentar a potência", "Melhorar a eficiência do combustível", "Aumentar a estabilidade"],
        "answer": "Reduzir a velocidade"
    },
    {
        "question": "Qual tipo de motocicleta é mais adequada para passeios urbanos e curtos?",
        "options": ["Cruiser", "Sport Bike", "Chopper", "Scooter"],
        "answer": "Scooter"
    },
    {
        "question": "Qual é a marca italiana conhecida por suas motocicletas esportivas de alto desempenho?",
        "options": ["Ducati", "Aprilia", "Moto Guzzi", "Piaggio"],
        "answer": "Ducati"
    },
    {
        "question": "Qual é a principal diferença entre uma moto cruiser e uma moto sport?",
        "options": ["Posição de pilotagem e design", "Tipo de motor", "Tamanho dos pneus", "Eficiência de combustível"],
        "answer": "Posição de pilotagem e design"
    },
    {
        "question": "Qual é o nome do dispositivo usado para ajustar a suspensão de uma moto?",
        "options": ["Amortecedor", "Regulador de pressão", "Suspensão de mola", "Braço oscilante"],
        "answer": "Amortecedor"
    },
    {
        "question": "Qual tipo de motocicleta é projetado para competir em circuitos de corrida?",
        "options": ["Sport Bike", "Touring", "Cruiser", "Dirt Bike"],
        "answer": "Sport Bike"
    },
    {
        "question": "Qual é a principal característica das motocicletas touring?",
        "options": ["Conforto e espaço para bagagem", "Design esportivo", "Desempenho em alta velocidade", "Estilo personalizado"],
        "answer": "Conforto e espaço para bagagem"
    },
    {
        "question": "O que é um 'supercharger' em uma motocicleta?",
        "options": ["Um tipo de turbo", "Sistema de refrigeração", "Dispositivo de aumento de potência", "Tipo de escapamento"],
        "answer": "Dispositivo de aumento de potência"
    },
    {
        "question": "Qual componente da moto é responsável pela iluminação da estrada?",
        "options": ["Farol", "Lanterna traseira", "Pisca-pisca", "Retrovisor"],
        "answer": "Farol"
    },
    {
        "question": "Qual é a cilindrada típica de uma moto de entrada para iniciantes?",
        "options": ["50cc", "125cc", "250cc", "500cc"],
        "answer": "250cc"
    },
    {
        "question": "Qual é o propósito de uma proteção de motor em uma motocicleta?",
        "options": ["Proteger o motor em caso de queda", "Melhorar a estética", "Aumentar a potência do motor", "Reduzir o peso da moto"],
        "answer": "Proteger o motor em caso de queda"
    },
    {
        "question": "Qual é o nome do sistema que controla a pressão dos pneus em uma motocicleta?",
        "options": ["TPMS (Sistema de Monitoramento da Pressão dos Pneus)", "ABS", "Odomêtro", "Sistema de Injeção Eletrônica"],
        "answer": "TPMS (Sistema de Monitoramento da Pressão dos Pneus)"
    },
    {
        "question": "Qual tipo de moto é ideal para quem gosta de customizar e personalizar a motocicleta?",
        "options": ["Cruiser", "Sport Bike", "Dirt Bike", "Scooter"],
        "answer": "Cruiser"
    },
    {
        "question": "Qual é a principal função de um sistema de suspensão em uma motocicleta?",
        "options": ["Absorver impactos e melhorar a estabilidade", "Aumentar a potência do motor", "Melhorar a eficiência do combustível", "Reduzir o peso da moto"],
        "answer": "Absorver impactos e melhorar a estabilidade"
    },
    {
        "question": "Qual é o nome dado ao dispositivo que melhora a aderência das rodas durante a frenagem?",
        "options": ["Sistema de Controle de Tração", "ABS", "Controlador de Estabilidade", "Regulador de Velocidade"],
        "answer": "ABS"
    },
    {
        "question": "Qual é o principal objetivo de um protetor de mão em uma moto?",
        "options": ["Proteger as mãos do piloto do vento e detritos", "Aumentar a potência do motor", "Melhorar a eficiência de combustível", "Reduzir o peso da moto"],
        "answer": "Proteger as mãos do piloto do vento e detritos"
    }
];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
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
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};