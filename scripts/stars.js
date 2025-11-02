// 简单星星效果 - 回到最初版本，没有连线
function createSimpleStars() {
    const starsContainer = document.getElementById('simpleStars');
    const starCount = 150; // 适当数量的星星
    
    // 创建星星
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        
        // 随机大小分类
        const sizeType = Math.random();
        if (sizeType < 0.6) {
            star.className = 'star small';
        } else if (sizeType < 0.85) {
            star.className = 'star medium';
        } else if (sizeType < 0.95) {
            star.className = 'star large';
        } else {
            star.className = 'star giant';
        }
        
        // 随机颜色
        const colorType = Math.random();
        if (colorType < 0.1) {
            star.classList.add('blue');
        } else if (colorType < 0.15) {
            star.classList.add('purple');
        }
        
        // 随机闪烁速度
        const twinkleType = Math.random();
        if (twinkleType < 0.2) {
            star.classList.add('twinkle-fast');
        } else if (twinkleType < 0.4) {
            star.classList.add('twinkle-slow');
        }
        
        // 随机位置
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        
        // 随机动画
        const duration = Math.random() * 8 + 4;
        const delay = Math.random() * 10;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
    
    // 创建流星
    createShootingStars();
}

// 创建流星
function createShootingStars() {
    const starsContainer = document.getElementById('simpleStars');
    
    setInterval(() => {
        if (Math.random() > 0.7) return;
        
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // 随机起始位置
        const startX = Math.random() * 20;
        const startY = Math.random() * 30;
        star.style.left = `${startX}%`;
        star.style.top = `${startY}%`;
        
        // 随机速度
        const duration = Math.random() * 4 + 3;
        star.style.animationDuration = `${duration}s`;
        
        starsContainer.appendChild(star);
        
        // 动画结束后移除
        setTimeout(() => {
            if (star.parentNode === starsContainer) {
                starsContainer.removeChild(star);
            }
        }, duration * 1000);
        
    }, 3000);
}

// 页面加载时创建星星
window.onload = function() {
    createSimpleStars();
};