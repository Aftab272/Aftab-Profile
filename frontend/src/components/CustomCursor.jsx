import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    let smoothMouse = { x: width / 2, y: height / 2 };
    let lastMouse = { x: width / 2, y: height / 2 };
    let isHover = false;
    let isClicking = false;

    // Handle Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    // Handle Mouse Movement
    const handleMouseMove = (e) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    // Handle Click
    const handleMouseDown = () => {
      isClicking = true;
    };
    const handleMouseUp = () => {
      isClicking = false;
      createExplosion(mouse.x, mouse.y);
    };

    // Handle Hover on Interactive Elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('glass')
      ) {
        isHover = true;
      } else {
        isHover = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Bubble Physics Class
    class Bubble {
      constructor(x, y, isTrail = false, isExplosion = false) {
        this.x = x;
        this.y = y;
        this.baseSize = Math.random() * 10 + 2; // Radius 2px to 12px (diameter 4px to 24px)
        this.size = this.baseSize;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.04 + 0.01;
        this.orbitRadius = Math.random() * 25 + 5;
        this.isTrail = isTrail;
        this.isExplosion = isExplosion;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.opacity = Math.random() * 0.6 + 0.2;
        
        // Physics for trails and explosions
        this.vx = isExplosion ? (Math.random() - 0.5) * 12 : (Math.random() - 0.5) * 2;
        this.vy = isExplosion ? (Math.random() - 0.5) * 12 : (Math.random() - 0.5) * 2;
      }

      update(targetX, targetY, hoverState) {
        if (this.isTrail || this.isExplosion) {
          this.life -= this.decay;
          this.size = this.baseSize * this.life;
          this.x += this.vx;
          this.y += this.vy;
          this.vx *= 0.95; // friction
          this.vy *= 0.95;
          return;
        }

        // Orbit Logic for Core Bubbles
        this.angle += hoverState ? this.speed * 2 : this.speed;
        
        // Create a horizontal form (ellipse) by making X radius much larger than Y radius
        const currentRadiusX = hoverState ? this.orbitRadius * 3.0 : this.orbitRadius * 2.0;
        const currentRadiusY = hoverState ? this.orbitRadius * 0.5 : this.orbitRadius * 0.2;
        
        this.size = hoverState ? this.baseSize * 1.5 : this.baseSize;
        
        const targetOrbitX = targetX + Math.cos(this.angle) * currentRadiusX;
        const targetOrbitY = targetY + Math.sin(this.angle) * currentRadiusY;

        // Smooth follow
        this.x += (targetOrbitX - this.x) * 0.15;
        this.y += (targetOrbitY - this.y) * 0.15;
      }

      draw() {
        if (this.size <= 0.1 || this.life <= 0) return;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        const currentOpacity = this.opacity * this.life * (isHover && !this.isTrail ? 1.5 : 1);
        
        // Soft Transparent Gradients using Dynamic Color
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(currentOpacity, 1)})`);
        gradient.addColorStop(0.3, `rgba(${currentPrimaryRGB}, ${Math.min(currentOpacity * 0.8, 1)})`); 
        gradient.addColorStop(0.7, `rgba(${currentPrimaryRGB}, ${Math.min(currentOpacity * 0.5, 1)})`); 
        gradient.addColorStop(1, `rgba(${currentPrimaryRGB}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
      }
    }

    let bubbles = [];
    const MAX_CORE_BUBBLES = 15;

    // Initialize core orbiting bubbles
    for (let i = 0; i < MAX_CORE_BUBBLES; i++) {
      bubbles.push(new Bubble(mouse.x, mouse.y));
    }

    const createExplosion = (x, y) => {
      for (let i = 0; i < 20; i++) {
        bubbles.push(new Bubble(x, y, false, true));
      }
    };

    let animationFrameId;
    let currentPrimaryRGB = '37, 99, 235';

    const updateThemeColor = () => {
      const rootColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
      if (rootColor) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(rootColor);
        if (result) {
          currentPrimaryRGB = `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
        }
      }
    };
    
    // Initial fetch and listen for custom events
    updateThemeColor();
    window.addEventListener('themeChanged', updateThemeColor);

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow for the center of the orbit
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.2;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.2;

      // Distance calculation to detect movement speed
      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      // Generate trail bubbles while moving
      if (speed > 2 && Math.random() > 0.4) {
        const trailCount = isHover ? 3 : 1;
        for (let i = 0; i < trailCount; i++) {
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          const trail = new Bubble(smoothMouse.x + offsetX, smoothMouse.y + offsetY, true);
          trail.vx = dx * -0.05 + (Math.random() - 0.5) * 2;
          trail.vy = dy * -0.05 + (Math.random() - 0.5) * 2;
          bubbles.push(trail);
        }
      }

      // Render Glass Orb cursor
      const orbRadius = isHover ? 20 : 12;
      
      ctx.beginPath();
      ctx.arc(smoothMouse.x, smoothMouse.y, orbRadius, 0, Math.PI * 2);
      
      // 3D Spherical Gradient to simulate light reflection inside the glass
      const orbGradient = ctx.createRadialGradient(
        smoothMouse.x - orbRadius * 0.3, 
        smoothMouse.y - orbRadius * 0.3, 
        orbRadius * 0.1, 
        smoothMouse.x, 
        smoothMouse.y, 
        orbRadius
      );
      
      orbGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)'); // Specular Highlight (top-left)
      orbGradient.addColorStop(0.4, `rgba(${currentPrimaryRGB}, 0.2)`); // Translucent Glass body
      orbGradient.addColorStop(1, `rgba(${currentPrimaryRGB}, 0.6)`); // Outer edge shadow/refraction
      
      ctx.fillStyle = orbGradient;
      ctx.shadowBlur = isHover ? 20 : 10;
      ctx.shadowColor = `rgba(${currentPrimaryRGB}, 0.8)`;
      ctx.fill();
      
      // Outer Glass Rim / Border reflection
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.stroke();
      
      ctx.shadowBlur = 0;
      ctx.closePath();

      // Ensure core bubbles exist
      const coreBubbles = bubbles.filter(b => !b.isTrail && !b.isExplosion);
      const targetCoreCount = isHover ? MAX_CORE_BUBBLES + 8 : MAX_CORE_BUBBLES;
      
      if (coreBubbles.length < targetCoreCount) {
        bubbles.push(new Bubble(smoothMouse.x, smoothMouse.y));
      } else if (coreBubbles.length > targetCoreCount && !isHover) {
        // Find one core bubble and turn it into a fading trail to remove it organically
        const b = bubbles.find(b => !b.isTrail && !b.isExplosion);
        if (b) b.isTrail = true;
      }

      // Update and draw all bubbles
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.update(smoothMouse.x, smoothMouse.y, isHover);
        b.draw();
        
        // Remove dead bubbles
        if ((b.isTrail || b.isExplosion) && b.life <= 0) {
          bubbles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CustomCursor;
