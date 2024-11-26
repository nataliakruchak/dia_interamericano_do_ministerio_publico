    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Para de observar após o card aparecer
                }
            });
        }, {
            threshold: 0.5 // 50% do card precisa estar visível
        });

        cards.forEach(card => {
            observer.observe(card); // Inicia a observação dos cards
        });
    });

    