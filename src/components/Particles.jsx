import React, { useState, useEffect, useRef } from "react";

export const Particles = () => {
  const canvasRef = useRef(null);
  const [particlesArray, setParticlesArray] = useState([]);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  let mouse = {
    x: null,
    y: null,
    // to increase or decrease the mouse radius:
    radius: (window.innerHeight / 80) * (window.innerWidth / 80),
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    function Particle(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    Particle.prototype.update = function () {
      if (this.x + this.size > canvasWidth || this.x - this.size < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size > canvasHeight || this.y - this.size < 0) {
        this.directionY = -this.directionY;
      }

      this.x += this.directionX;
      this.y += this.directionY;

      // Calculate the distance between the mouse and the particle
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Check for collision between the mouse and the particle
      if (distance < mouse.radius + this.size) {
        if (mouse.x < this.x && this.x < canvasWidth - this.size * 10) {
          this.x += 10;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 10;
        }
        if (mouse.y < this.y && this.y < canvasHeight - this.size * 10) {
          this.y += 10;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 10;
        }
      }

      this.draw();
    };

    function init() {
      let numberOfParticles = (canvasHeight * canvasWidth) / 100000;
      for (let i = 0; i < numberOfParticles * 2; i++) {
        let size = Math.random() * 5 + 2;
        let x = Math.random() * (canvasWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (canvasHeight - size * 2 - size * 2) + size * 2;
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
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    function connect() {
      // Connect particles if needed
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [canvasWidth, canvasHeight, particlesArray]);

  return (
    <div className="w-full h-screen z-1 teal-500">
      <canvas ref={canvasRef} id="canvas1" className="w-full"></canvas>
    </div>
  );
};
