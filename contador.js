let counter = 0;
const increment = 20; // Incrementando de 60 em 60
const digitCount = 9; // Temos 9 dígitos no total

function updateCounter() {
    counter += increment;

    // Garante que o número tenha sempre 9 dígitos com preenchimento de zeros
    const digits = counter.toString().padStart(digitCount, '0').split('');

    document.querySelectorAll('.digit').forEach((digitElement, index) => {
        const currentSpan = digitElement.querySelector('span');
        
        if (currentSpan) {
            // Adiciona a classe para animação
            currentSpan.classList.add('up');
            
            // Muda o conteúdo após a animação
            setTimeout(() => {
                currentSpan.textContent = digits[index];
                currentSpan.classList.remove('up');
                currentSpan.classList.add('active');
            }, 300); // Tempo da animação
        }
    });
}

// Atualiza o contador a cada 1 segundo
setInterval(updateCounter, 5000);

