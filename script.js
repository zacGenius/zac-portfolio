// ANIMAÇÃO DE PARTÍCULAS - CORRIGIDA
function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) return;
    
    const particleCount = 1000;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamanho aleatório
        const sizes = ['small', 'medium', 'large'];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        particle.classList.add(`particle-${size}`);
        
        // Posição inicial aleatória
        const startX = Math.random() * 100;
        const startY = Math.random() * 100 + 100;
        
        particle.style.left = `${startX}vw`;
        particle.style.top = `${startY}vh`;
        
        // Duração e atraso aleatórios
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 0.0001;
        
        particle.style.animation = `float ${duration}s ${delay}s linear infinite`;
        
        particlesContainer.appendChild(particle);
        
        particle.addEventListener('animationend', function() {
            particle.remove();
            createParticle();
        });
    }
    
    // Criar partículas iniciais
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

// DOMContentLoaded - CORRIGIDO
document.addEventListener('DOMContentLoaded', function() {
    initParticles();

    // Menu mobile
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Fechar menu mobile
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Carrossel
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const items = document.querySelectorAll('.carousel-item');
    
    if (carousel && prevBtn && nextBtn && items.length > 0) {
        let currentIndex = 0;

        function updateCarousel() {
            const itemWidth = items[0].offsetWidth;
            carousel.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    // Formulário
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Obrigado pelo interesse! Em breve entrarei em contato.');
            form.reset();
        });
    }
});