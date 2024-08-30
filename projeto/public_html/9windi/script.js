// JavaScript para movimentar o card com base no scroll
window.addEventListener('scroll', function() {
    const card = document.querySelector('.fixed-card');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Ajusta a posição do card com base no scroll
    card.style.transform = `translateY(${scrollTop}px)`;
});

// Aguardar o carregamento completo da página antes de adicionar o script
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de envio, o popup, o áudio e o elemento que mostra o valor
    const submitBtn = document.getElementById('submit-btn');
    const popup = document.getElementById('popup');
    const successAudio = document.getElementById('success-audio');
    const ganhoValue = document.getElementById('ganho-value');
    const cardRedText = document.getElementById('cardRedText');

    // Adiciona um ouvinte de evento para o clique no botão de envio
    submitBtn.addEventListener('click', function() {
        // Verifica se todas as perguntas foram respondidas
        const rating = document.querySelector('input[name="rating"]:checked');
        const recommend = document.querySelector('input[name="recommend"]:checked');
        const age = document.querySelector('input[name="age"]:checked');

        if (rating && recommend && age) {
            // Atualiza o texto do popup
            ganhoValue.textContent = 'R$ 57,00';
            
            // Atualiza o valor no card fixo
            cardRedText.textContent = 'R$ 57,00';
            
            // Mostra o popup
            popup.style.display = 'block';
            
            // Reproduz o áudio
            successAudio.play();
        } else {
            alert('Por favor, responda todas as perguntas antes de enviar.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const popup = document.getElementById('popup');
    const successAudio = document.getElementById('success-audio');
    const ganhoValue = document.getElementById('ganho-value');
    const cardRedText = document.getElementById('cardRedText');

    submitBtn.addEventListener('click', function() {
        const rating = document.querySelector('input[name="rating"]:checked');
        const recommend = document.querySelector('input[name="recommend"]:checked');
        const age = document.querySelector('input[name="age"]:checked');

        if (rating && recommend && age) {
            // Atualiza o texto do popup
            ganhoValue.textContent = 'R$ 57,00';
            
            // Animação para o número subir
            const finalValue = 287;
            let currentValue = 0;
            const interval = 50; // Intervalo em milissegundos
            const duration = 2000; // Duração da animação em milissegundos
            const step = finalValue / (duration / interval);
            
            const updateNumber = () => {
                currentValue += step;
                if (currentValue >= finalValue) {
                    currentValue = finalValue;
                    clearInterval(intervalId);
                }
                cardRedText.textContent = `R$ ${currentValue.toFixed(2).replace('.', ',')}`;
            };

            const intervalId = setInterval(updateNumber, interval);
            
            // Mostra o popup
            popup.style.display = 'block';
            
            // Reproduz o áudio
            successAudio.play();
        } else {
            alert('Por favor, responda todas as perguntas antes de enviar.');
        }
    });
});


// BOTÃO
document.getElementById("submit-btn").onclick = function() {
    // Verifica se uma das opções foi selecionada
    var selectedOption = document.querySelector('input[name="age"]:checked');
    
    if (selectedOption) {
        // Adiciona um atraso de 500ms (meio segundo) antes de redirecionar
        setTimeout(function() {
            window.location.href = '/tudo junto/10ultimapagina/index.html'; // Ajuste o caminho para a página de destino
        }, 4000); // O tempo é em milissegundos (1000ms = 1 segundo)
    } else {
        alert("Por favor, selecione uma opção antes de enviar.");
    }
};