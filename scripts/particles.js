// 浮动粒子效果
function createFloatingParticles() {
    const container = document.getElementById('floatingParticles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机大小
        const size = Math.random() * 60 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 随机位置
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 随机颜色
        const colors = [
            'rgba(88, 166, 255, 0.1)',
            'rgba(255, 107, 107, 0.1)',
            'rgba(88, 255, 107, 0.1)',
            'rgba(255, 209, 102, 0.1)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        // 随机动画
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
    }
}

// 页面加载时创建粒子
document.addEventListener('DOMContentLoaded', createFloatingParticles);