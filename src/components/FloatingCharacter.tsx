
import React, { useEffect, useRef } from "react";

// This character is a simple circle with eyes that follow the cursor.
const FloatingCharacter: React.FC = () => {
  const charRef = useRef<HTMLDivElement>(null);
  const eyeLeftRef = useRef<HTMLDivElement>(null);
  const eyeRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveListener = (e: MouseEvent) => {
      if (!charRef.current) return;
      // Follow with a subtle lag
      charRef.current.animate(
        { left: `${e.clientX + 20}px`, top: `${e.clientY + 20}px` },
        { fill: "forwards", duration: 350, easing: "ease-out" }
      );

      // Eyes follow cursor
      const rect = charRef.current.getBoundingClientRect();
      const charX = rect.left + rect.width / 2;
      const charY = rect.top + rect.height / 2;
      const dx = e.clientX - charX;
      const dy = e.clientY - charY;
      const maxEye = 7;
      const angle = Math.atan2(dy, dx);
      const eyeX = Math.cos(angle) * maxEye;
      const eyeY = Math.sin(angle) * maxEye;
      [eyeLeftRef.current, eyeRightRef.current].forEach((eye, idx) => {
        if (eye)
          eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
      });
    };
    window.addEventListener("mousemove", moveListener);
    return () => window.removeEventListener("mousemove", moveListener);
  }, []);

  // Only reveal above 600px wide (not on very small screens)
  return (
    <div
      ref={charRef}
      className="fixed z-[100] w-16 h-16"
      style={{
        left: 100,
        top: 120,
        pointerEvents: "none",
        transition: "filter 0.2s",
        filter: "drop-shadow(0 6px 16px #26386877)"
      }}
    >
      <div className="w-16 h-16 rounded-full bg-yellow-200 border-2 border-stemblue flex justify-center items-center relative animate-scale-in">
        {/* Eyes */}
        <div
          ref={eyeLeftRef}
          className="absolute w-4 h-4 bg-white rounded-full left-4 top-6 border border-stemblue flex items-center justify-center transition-transform duration-75"
        >
          <div className="w-2 h-2 rounded-full bg-blue-900" />
        </div>
        <div
          ref={eyeRightRef}
          className="absolute w-4 h-4 bg-white rounded-full left-8 top-6 border border-stemblue flex items-center justify-center transition-transform duration-75"
        >
          <div className="w-2 h-2 rounded-full bg-blue-900" />
        </div>
        {/* Smile */}
        <div className="absolute left-5 top-9 w-6 h-3 rounded-b-lg border-b-4 border-blue-800 border-solid" />
      </div>
    </div>
  );
};
export default FloatingCharacter;
