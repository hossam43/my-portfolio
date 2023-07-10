import React, { useRef, useEffect } from "react";

export const Particles = () => {
  const canvasRef = useRef(null);
  let particlesArray = [];

  let mouse = {
    x: null,
    y: null,
    // to increase or decrease the mouse radius:
    radius: (window.innerHeight / 80) * (window.innerWidth / 80),
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      // Draw the particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "#6b7280";
        ctx.fill();
      }

      // Update the particle's position and draw it
      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();

        // Calculate the distance between the mouse and the particle
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check for collision between the mouse and the particle
        if (distance < mouse.radius + this.size) {
          //   console.log("Collision detected!");

          // Adjust the particle's position based on the mouse position
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > canvas.width - this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > canvas.height - this.size * 10) {
            this.y -= 10;
          }
        }

        // Update the particle's position
        this.x += this.directionX;
        this.y += this.directionY;
      }
    }

    function init() {
      particlesArray = [];
      // 90000
      let numberOfParticles = (canvas.height * canvas.width) / 90000;
      for (let i = 0; i < numberOfParticles * 2; i++) {
        // Modify this line for larger sizes
        let size = Math.random() * 5 + 2;
        let x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
        let y =
          Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = "#6b7280";
        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // check if particles are close enough to draw line between them

    function connect() {
      let opacityValue = 1;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.lineWidth = 1;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = `rgba(59, 130, 129,${opacityValue})`;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    window.addEventListener("mouseout", () => {
      mouse.x = undefined;
      mouse.y = undefined;
    });
    init();
    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="w-full h-screen z-1 teal-500">
      <canvas ref={canvasRef} id="canvas1" className="w-full"></canvas>
    </div>
  );
};
