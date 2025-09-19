import { useEffect, useRef } from 'react';

interface MatrixChar {
  x: number;
  y: number;
  char: string;
  opacity: number;
  speed: number;
}

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = '01アカサタナハマヤラワガザダバパイキシチニヒミリウィクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: MatrixChar[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * fontSize,
        y: Math.random() * -canvas.height,
        char: characters.charAt(Math.floor(Math.random() * characters.length)),
        opacity: Math.random(),
        speed: Math.random() * 2 + 1
      });
    }

    const draw = () => {
      // Black background with slight transparency for trailing effect
      ctx.fillStyle = 'rgba(16, 20, 24, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      drops.forEach((drop, index) => {
        // Cyan color with varying opacity
        ctx.fillStyle = `hsla(180, 100%, 50%, ${drop.opacity * 0.3})`;
        ctx.fillText(drop.char, drop.x, drop.y);

        // Move drop down
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y > canvas.height) {
          drops[index] = {
            x: drop.x,
            y: Math.random() * -100,
            char: characters.charAt(Math.floor(Math.random() * characters.length)),
            opacity: Math.random(),
            speed: Math.random() * 2 + 1
          };
        }

        // Randomly change character
        if (Math.random() < 0.01) {
          drop.char = characters.charAt(Math.floor(Math.random() * characters.length));
        }
      });
    };

    const interval = setInterval(draw, 50);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.1
      }}
    />
  );
};
