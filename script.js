const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('navLinks');

if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinksContainer.contains(e.target)) {
            navLinksContainer.classList.remove('active');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });
}

const addToCartButtons = document.querySelectorAll('.btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const originalText = button.textContent;
        const originalBackground = button.style.background;
        
        button.style.background = '#28a745';
        button.textContent = 'Added! ✓';
        button.disabled = true;
        
        setTimeout(() => {
            button.style.background = originalBackground || 'linear-gradient(45deg, #667eea, #764ba2)';
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
        
        img.addEventListener('load', () => {
            const fallback = img.nextElementSibling;
            if (fallback && fallback.classList.contains('image-fallback') || fallback.classList.contains('hero-fallback')) {
                fallback.style.display = 'none';
            }
        });
    });
});

document.documentElement.style.scrollBehavior = 'smooth';

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);