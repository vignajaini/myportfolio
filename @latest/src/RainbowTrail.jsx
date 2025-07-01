
import { useEffect } from "react";

const RainbowTrail = () => {
  useEffect(() => {
    const colors = ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ccff", "#6600cc", "#ff33cc"];
    let i = 0;

    const handleMouseMove = (e) => {
      const smoke = document.createElement("div");
      smoke.className = "smoke-dot";
      smoke.style.left = `${e.pageX}px`;
      smoke.style.top = `${e.pageY}px`;
      smoke.style.backgroundColor = colors[i % colors.length];

      document.body.appendChild(smoke);
      setTimeout(() => smoke.remove(), 700);

      i++;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default RainbowTrail;
