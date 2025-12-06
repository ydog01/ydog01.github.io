document.addEventListener('DOMContentLoaded', function()
{
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e)
    {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
    });
    
    document.addEventListener('click', function(e)
    {
        createRipple(e.clientX, e.clientY);
    });
    
    const links = document.querySelectorAll('a, button, .detail-item');
    links.forEach(link =>
    {
        link.addEventListener('mouseenter', function()
        {
            cursorGlow.style.width = '60px';
            cursorGlow.style.height = '60px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(88, 166, 255, 0.6) 0%, transparent 70%)';
        });
        
        link.addEventListener('mouseleave', function()
        {
            cursorGlow.style.width = '40px';
            cursorGlow.style.height = '40px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(88, 166, 255, 0.4) 0%, transparent 70%)';
        });
    });
    
    function createRipple(x, y)
    {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'radial-gradient(circle, rgba(88, 166, 255, 0.6) 0%, transparent 70%)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9999';
        ripple.style.transition = 'all 0.6s ease-out';
        
        document.body.appendChild(ripple);
        
        setTimeout(() =>
        {
            ripple.style.width = '200px';
            ripple.style.height = '200px';
            ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() =>
        {
            if (ripple.parentNode)
            {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
    
    window.addEventListener('scroll', function()
    {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.container, .profile-card');
        
        parallaxElements.forEach((element, index) =>
        {
            const speed = 0.3 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    document.addEventListener('keydown', function(e)
    {
        if (e.key === ' ')
        {
            createRandomParticles();
        }
    });
    
    function createRandomParticles()
    {
        const container = document.getElementById('floatingParticles');
        const burstCount = 8;
        
        for (let i = 0; i < burstCount; i++)
        {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'fixed';
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.width = '30px';
            particle.style.height = '30px';
            particle.style.animation = 'none';
            
            const colors = [
                'rgba(88, 166, 255, 0.8)',
                'rgba(255, 107, 107, 0.8)',
                'rgba(88, 255, 107, 0.8)',
                'rgba(255, 209, 102, 0.8)'
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = color;
            
            document.body.appendChild(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 200;
            const targetX = Math.cos(angle) * distance;
            const targetY = Math.sin(angle) * distance;
            
            particle.animate([
                {
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 1000 + Math.random() * 500,
                easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            });
            
            setTimeout(() =>
            {
                if (particle.parentNode)
                {
                    particle.parentNode.removeChild(particle);
                }
            }, 1500);
        }
    }
});