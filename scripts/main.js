document.addEventListener('DOMContentLoaded', function()
{
    const cursorGlow = document.getElementById('cursorGlow');
    
    document.addEventListener('mousemove', function(e)
    {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
    
    const interactiveElements = document.querySelectorAll('a, .detail-item, .avatar');
    interactiveElements.forEach(element =>
    {
        element.addEventListener('mouseenter', function()
        {
            cursorGlow.style.width = '80px';
            cursorGlow.style.height = '80px';
            
            if (this.classList.contains('github'))
            {
                cursorGlow.style.background = 'radial-gradient(circle, rgba(240, 246, 252, 0.7) 0%, rgba(240, 246, 252, 0.4) 30%, transparent 70%)';
            }
            else if (this.classList.contains('bilibili'))
            {
                cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 161, 214, 0.7) 0%, rgba(0, 161, 214, 0.4) 30%, transparent 70%)';
            }
            else if (this.classList.contains('osu'))
            {
                cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 102, 170, 0.7) 0%, rgba(255, 102, 170, 0.4) 30%, transparent 70%)';
            }
            else
            {
                cursorGlow.style.background = 'radial-gradient(circle, rgba(100, 180, 255, 0.7) 0%, rgba(100, 180, 255, 0.4) 30%, transparent 70%)';
            }
        });
        
        element.addEventListener('mouseleave', function()
        {
            cursorGlow.style.width = '50px';
            cursorGlow.style.height = '50px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(100, 180, 255, 0.6) 0%, rgba(80, 160, 240, 0.4) 30%, transparent 70%)';
        });
    });
    
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(50px) scale(0.8)';
    
    setTimeout(() =>
    {
        container.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.32, 1)';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0) scale(1)';
    }, 300);
    
    document.addEventListener('click', function(e)
    {
        createLuxuryRipple(e.clientX, e.clientY);
    });
    
    function createLuxuryRipple(x, y)
    {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'radial-gradient(circle, rgba(100, 180, 255, 0.8) 0%, rgba(80, 160, 240, 0.6) 30%, transparent 70%)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9998';
        ripple.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        
        document.body.appendChild(ripple);
        
        setTimeout(() =>
        {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
            ripple.style.opacity = '0';
        }, 10);
        
        setTimeout(() =>
        {
            if (ripple.parentNode)
            {
                ripple.parentNode.removeChild(ripple);
            }
        }, 800);
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFade
    {
        0% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1.5); }
        100% { opacity: 0; transform: scale(2); }
    }
`;
document.head.appendChild(style);