const starfield = document.querySelector(".starfield");

if (starfield) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  const strength = 18;
  const ease = 0.08;
  const depthNear = 1.6;
  const depthMid = 1.15;
  const depthFar = 0.75;

  const setTargetFromPoint = (x, y) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = ((x - centerX) / centerX) * strength;
    const offsetY = ((y - centerY) / centerY) * strength;
    targetX = offsetX;
    targetY = offsetY;
  };

  window.addEventListener("mousemove", (event) => {
    setTargetFromPoint(event.clientX, event.clientY);
  });

  window.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
  });

  window.addEventListener(
    "touchmove",
    (event) => {
      if (event.touches.length === 0) {
        return;
      }
      const touch = event.touches[0];
      setTargetFromPoint(touch.clientX, touch.clientY);
    },
    { passive: true },
  );

  window.addEventListener("touchend", () => {
    targetX = 0;
    targetY = 0;
  });

  const animate = () => {
    const time = performance.now() * 0.001;
    const driftX = Math.sin(time * 0.4) * 2 + Math.cos(time * 0.7) * 1.5;
    const driftY = Math.cos(time * 0.5) * 2 + Math.sin(time * 0.9) * 1.2;
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;
    const baseX = currentX + driftX;
    const baseY = currentY + driftY;
    starfield.style.setProperty("--star-x", `${baseX.toFixed(2)}px`);
    starfield.style.setProperty("--star-y", `${baseY.toFixed(2)}px`);
    starfield.style.setProperty(
      "--star-x2",
      `${(baseX * depthMid).toFixed(2)}px`,
    );
    starfield.style.setProperty(
      "--star-y2",
      `${(baseY * depthMid).toFixed(2)}px`,
    );
    starfield.style.setProperty(
      "--star-x3",
      `${(baseX * depthNear).toFixed(2)}px`,
    );
    starfield.style.setProperty(
      "--star-y3",
      `${(baseY * depthNear).toFixed(2)}px`,
    );
    requestAnimationFrame(animate);
  };

  animate();
}
