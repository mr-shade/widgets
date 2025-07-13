// ✨ PREMIUM TECH EFFECTS FOR ETSY-READY WIDGET
// Beautiful, Smooth, and Professional Visual Effects

class TechEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createFloatingParticles();
        this.createGlowEffects();
        this.createSmoothAnimations();
        this.addInteractiveEffects();
        this.addPremiumSounds();
        this.startAdvancedAnimations();
    }

    createFloatingParticles() {
        const particleContainer = document.getElementById('particles-container');
        
        // Create beautiful floating particles
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            
            particleContainer.appendChild(particle);
        }
    }

    createGlowEffects() {
        // Add premium glow effects to key elements
        const glowElements = document.querySelectorAll('.time-value, .stat-value, .timer-title');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.addPulseGlow(element);
            });
        });
    }

    addPulseGlow(element) {
        element.style.animation = 'digitGlow 0.5s ease-in-out, pulseGlow 0.3s ease-in-out';
        
        setTimeout(() => {
            element.style.animation = 'digitGlow 2s ease-in-out infinite alternate';
        }, 800);
    }

    createSmoothAnimations() {
        // Add smooth hover animations to interactive elements
        const interactiveElements = document.querySelectorAll('.interactive-hover');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-5px) scale(1.02)';
                element.style.filter = 'brightness(1.1) saturate(1.2)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0) scale(1)';
                element.style.filter = 'brightness(1) saturate(1)';
            });
        });
    }

    addInteractiveEffects() {
        // Add ripple effect on click
        document.addEventListener('click', (e) => {
            this.createRippleEffect(e.clientX, e.clientY);
        });
        
        // Add shimmer effect to containers
        const containers = document.querySelectorAll('.time-segment, .stat-item, .milestone-container');
        containers.forEach(container => {
            this.addShimmerEffect(container);
        });
    }

    createRippleEffect(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(103, 126, 234, 0.6), transparent);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: rippleExpand 0.6s ease-out forwards;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(ripple);
        
        // Add CSS animation if not exists
        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes rippleExpand {
                    0% { 
                        width: 20px; 
                        height: 20px; 
                        opacity: 0.8; 
                    }
                    100% { 
                        width: 300px; 
                        height: 300px; 
                        opacity: 0; 
                    }
                }
                
                @keyframes pulseGlow {
                    0% { filter: brightness(1) drop-shadow(0 0 20px rgba(103, 126, 234, 0.4)); }
                    50% { filter: brightness(1.3) drop-shadow(0 0 40px rgba(103, 126, 234, 0.8)); }
                    100% { filter: brightness(1) drop-shadow(0 0 20px rgba(103, 126, 234, 0.4)); }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    addShimmerEffect(element) {
        // Random shimmer effect every 10-15 seconds
        const shimmerInterval = setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance
                element.classList.add('shimmer-effect');
                
                setTimeout(() => {
                    element.classList.remove('shimmer-effect');
                }, 2000);
            }
        }, Math.random() * 5000 + 10000); // 10-15 seconds
    }

    startAdvancedAnimations() {
        // Floating background elements
        this.createFloatingShapes();
        
        // Progressive enhancement animations
        setTimeout(() => {
            this.enhanceVisualEffects();
        }, 2000);
    }

    createFloatingShapes() {
        const shapes = ['circle', 'triangle', 'square'];
        const colors = [
            'rgba(103, 126, 234, 0.1)',
            'rgba(245, 87, 108, 0.1)',
            'rgba(79, 172, 254, 0.1)',
            'rgba(67, 233, 123, 0.1)'
        ];

        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            shape.style.cssText = `
                position: fixed;
                width: ${Math.random() * 100 + 50}px;
                height: ${Math.random() * 100 + 50}px;
                background: ${color};
                left: ${Math.random() * 100}%";
                top: ${Math.random() * 100}%;
                opacity: 0.3;
                border-radius: ${shapeType === 'circle' ? '50%' : '10px'};
                animation: floatingShapes ${Math.random() * 20 + 15}s ease-in-out infinite;
                pointer-events: none;
                z-index: 0;
                backdrop-filter: blur(1px);
            `;
            
            document.body.appendChild(shape);
        }
        
        // Add floating shapes animation
        if (!document.querySelector('#floating-shapes-style')) {
            const style = document.createElement('style');
            style.id = 'floating-shapes-style';
            style.textContent = `
                @keyframes floatingShapes {
                    0%, 100% { 
                        transform: translateY(0px) translateX(0px) rotate(0deg); 
                        opacity: 0.3; 
                    }
                    25% { 
                        transform: translateY(-50px) translateX(30px) rotate(90deg); 
                        opacity: 0.5; 
                    }
                    50% { 
                        transform: translateY(-80px) translateX(-20px) rotate(180deg); 
                        opacity: 0.7; 
                    }
                    75% { 
                        transform: translateY(-30px) translateX(-50px) rotate(270deg); 
                        opacity: 0.4; 
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    enhanceVisualEffects() {
        // Add dynamic color shifting to gradients
        const timerTitle = document.querySelector('.timer-title');
        if (timerTitle) {
            setInterval(() => {
                const hue = Math.floor(Math.random() * 60) + 220; // Blue to purple range
                timerTitle.style.filter = `hue-rotate(${hue}deg) brightness(1.1)`;
            }, 5000);
        }
        
        // Add breathing effect to live indicator
        const liveIndicator = document.querySelector('.live-indicator');
        if (liveIndicator) {
            setInterval(() => {
                liveIndicator.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    liveIndicator.style.transform = 'scale(1)';
                }, 1000);
            }, 3000);
        }
    }

    addPremiumSounds() {
        // Create premium audio context
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            this.createSoundEffect = (frequency = 800, duration = 150, type = 'sine') => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                const filterNode = audioContext.createBiquadFilter();
                
                oscillator.connect(filterNode);
                filterNode.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = type;
                
                filterNode.type = 'lowpass';
                filterNode.frequency.value = frequency * 2;
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration / 1000);
            };

            // Add subtle sound effects
            document.addEventListener('click', () => {
                this.createSoundEffect(800, 100, 'sine');
            });
            
            // Timer tick sound (every 10 seconds)
            setInterval(() => {
                this.createSoundEffect(600, 80, 'triangle');
            }, 10000);
            
        } catch (e) {
            console.log('Audio context not available');
        }
    }

    // Utility method to add holographic effect to any element
    addHologramEffect(element) {
        element.style.position = 'relative';
        element.style.transform = 'perspective(1000px) rotateX(2deg)';
        
        const reflection = element.cloneNode(true);
        reflection.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 50%;
            opacity: 0.2;
            transform: scaleY(-0.5);
            background: linear-gradient(to bottom, 
                rgba(103, 126, 234, 0.1), 
                transparent);
            pointer-events: none;
            z-index: -1;
            filter: blur(1px);
        `;
        element.appendChild(reflection);
    }

    // Method to trigger celebration effects
    triggerCelebration() {
        // Create celebration particles
        for (let i = 0; i < 20; i++) {
            this.createCelebrationParticle();
        }
        
        // Play celebration sound
        if (this.createSoundEffect) {
            setTimeout(() => this.createSoundEffect(523, 200, 'sine'), 0);    // C
            setTimeout(() => this.createSoundEffect(659, 200, 'sine'), 200);  // E
            setTimeout(() => this.createSoundEffect(784, 300, 'sine'), 400);  // G
        }
    }

    createCelebrationParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #45b7d1);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: celebrationExplode 2s ease-out forwards;
        `;
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--dx', x + 'px');
        particle.style.setProperty('--dy', y + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
        
        // Add celebration animation if not exists
        if (!document.querySelector('#celebration-style')) {
            const style = document.createElement('style');
            style.id = 'celebration-style';
            style.textContent = `
                @keyframes celebrationExplode {
                    0% { 
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                    100% { 
                        transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize premium tech effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.premiumEffects = new TechEffects();
        console.log('✨ Premium effects initialized successfully!');
        
        // Add a subtle welcome animation
        const container = document.querySelector('.timer-container');
        if (container) {
            container.style.animation = 'slideInContainer 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }
        
    }, 100);
});

// Export for use in main.js
window.TechEffects = TechEffects;

    createMatrixRain() {
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-rain';
        matrixContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;

        for (let i = 0; i < 50; i++) {
            const drop = document.createElement('div');
            drop.className = 'matrix-drop';
            drop.style.cssText = `
                position: absolute;
                color: #00ffff;
                font-family: 'Orbitron', monospace;
                font-size: 14px;
                left: ${Math.random() * 100}%;
                animation: matrixFall ${Math.random() * 3 + 2}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
                opacity: 0.6;
                text-shadow: 0 0 10px currentColor;
            `;
            drop.textContent = Math.random() > 0.5 ? '1' : '0';
            matrixContainer.appendChild(drop);
        }

        document.body.appendChild(matrixContainer);

        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes matrixFall {
                0% { transform: translateY(-100vh); opacity: 0; }
                10% { opacity: 0.6; }
                90% { opacity: 0.6; }
                100% { transform: translateY(100vh); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    createHolographicElements() {
        const holoElements = document.querySelectorAll('.time-value, .stat-value');
        holoElements.forEach(element => {
            element.style.position = 'relative';
            
            const holo = document.createElement('div');
            holo.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, 
                    transparent 30%, 
                    rgba(0,255,255,0.1) 50%, 
                    transparent 70%);
                animation: holoScan 3s linear infinite;
                pointer-events: none;
                z-index: 1;
            `;
            element.appendChild(holo);
        });

        const holoStyle = document.createElement('style');
        holoStyle.textContent = `
            @keyframes holoScan {
                0% { transform: translateX(-100%) skewX(-20deg); }
                100% { transform: translateX(200%) skewX(-20deg); }
            }
        `;
        document.head.appendChild(holoStyle);
    }

    createDataStreams() {
        const streamContainer = document.createElement('div');
        streamContainer.className = 'data-streams';
        streamContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;

        for (let i = 0; i < 20; i++) {
            const stream = document.createElement('div');
            stream.style.cssText = `
                position: absolute;
                width: 2px;
                height: 100px;
                background: linear-gradient(to bottom, 
                    transparent, 
                    #00ffff, 
                    transparent);
                left: ${Math.random() * 100}%;
                animation: dataFlow ${Math.random() * 4 + 3}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
                opacity: 0.7;
                box-shadow: 0 0 10px #00ffff;
            `;
            streamContainer.appendChild(stream);
        }

        document.body.appendChild(streamContainer);

        const streamStyle = document.createElement('style');
        streamStyle.textContent = `
            @keyframes dataFlow {
                0% { transform: translateY(-100px) translateX(0); }
                100% { transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px); }
            }
        `;
        document.head.appendChild(streamStyle);
    }

    createQuantumParticles() {
        const quantumContainer = document.createElement('div');
        quantumContainer.className = 'quantum-particles';
        quantumContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: radial-gradient(circle, #ff0080, #00ffff);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: quantumFloat ${Math.random() * 10 + 5}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                box-shadow: 
                    0 0 10px #ff0080,
                    0 0 20px #00ffff;
            `;
            quantumContainer.appendChild(particle);
        }

        document.body.appendChild(quantumContainer);

        const quantumStyle = document.createElement('style');
        quantumStyle.textContent = `
            @keyframes quantumFloat {
                0%, 100% { 
                    transform: translate(0, 0) scale(1);
                    opacity: 0.6;
                }
                25% { 
                    transform: translate(20px, -20px) scale(1.2);
                    opacity: 1;
                }
                50% { 
                    transform: translate(-15px, 15px) scale(0.8);
                    opacity: 0.8;
                }
                75% { 
                    transform: translate(10px, -10px) scale(1.1);
                    opacity: 0.9;
                }
            }
        `;
        document.head.appendChild(quantumStyle);
    }

    addPremiumSounds() {
        // Create audio context for premium sound effects
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            this.createBeepSound = (frequency = 800, duration = 100) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration / 1000);
            };

            // Add sound effects to timer updates
            const originalUpdateTimer = window.SubathonTimer?.prototype?.updateTimerDisplay;
            if (originalUpdateTimer) {
                window.SubathonTimer.prototype.updateTimerDisplay = function() {
                    originalUpdateTimer.call(this);
                    if (this.timeRemaining % 10 === 0) {
                        this.createBeepSound?.(600, 50);
                    }
                };
            }
        } catch (e) {
            console.log('Audio context not available');
        }
    }

    addHologramEffect(element) {
        element.style.position = 'relative';
        element.style.transform = 'perspective(1000px) rotateX(5deg)';
        element.style.filter = 'drop-shadow(0 0 20px rgba(0,255,255,0.5))';
        
        const reflection = element.cloneNode(true);
        reflection.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.3;
            transform: scaleY(-1);
            background: linear-gradient(to bottom, 
                rgba(0,255,255,0.2), 
                transparent);
            pointer-events: none;
            z-index: -1;
        `;
        element.appendChild(reflection);
    }
}

// Initialize tech effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new TechEffects();
    }, 1000);
});

// Export for use in main.js
window.TechEffects = TechEffects;